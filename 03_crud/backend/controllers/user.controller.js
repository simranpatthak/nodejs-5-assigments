const bcrypt = require("bcrypt");
const { genToken }= require("../utils/jwt")
const User = require("../models/users.model");

  module.exports . register = async(req,res)=>{
    try {
        const { username, email, dateOfBirth, role, location, password, confirmPassword } = req.body;
            if (!username || !email || !dateOfBirth || !role || !location || !password || !confirmPassword) {
          return res.status(400).json({ error: 'All fields are required' });
        }
    
        if (password !== confirmPassword) {
          return res.status(400).json({ error: 'Passwords do not match' });
        }
    
        const existingUser = await User.findOne({ email });
        if (existingUser) {
          return res.status(400).json({ error: 'Email is already registered' });
        }
    
        const hashedPassword = await bcrypt.hash(password, 10);
    
        const newUser = new User({
          username,
          email,
          dateOfBirth,
          role,
          location,
          password: hashedPassword,
        });
    
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
  }

 module.exports . login= async (req,res)=>{
    try {
        const { username, password } = req.body;
            if (!username || !password) {
          return res.status(400).json({ error: 'Username and password are required' });
        }
    
        const user = await User.findOne({ username });
        if (!user) {
          return res.status(404).json({ error: 'User not found' });
        }
    
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
          return res.status(401).json({ error: 'Invalid credentials' });
        }
    
        const tokenPayload = {
          userId: user._id,
          role: user.role,
        };
    
        const token = genToken(tokenPayload);
    
        res.status(200).json({ message: 'Login successful', token });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
 }

  