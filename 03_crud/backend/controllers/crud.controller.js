const User = require("../models/users.model");

module.exports.getAllUsers = async(req,res)=>{
    if (req.user.role !== 'Admin') {
        return res.status(403).json({ error: 'Access denied. Admins only.' });
      }
    
      try {
        const users = await User.find();
        res.status(200).json(users);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
}
module.exports.getUserDetails = async(req,res)=>{
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ error: 'User not found' });
        res.status(200).json(user);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
}
module.exports.updateUserDetails = async(req,res)=>{
    if (req.user.role !== 'Admin') {
        return res.status(403).json({ error: 'Access denied. Admins only.' });
      }
    
      try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedUser) return res.status(404).json({ error: 'User not found' });
        res.status(200).json(updatedUser);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
}
module.exports.deleteUser = async(req,res)=>{
    if (req.user.role !== 'Admin') {
        return res.status(403).json({ error: 'Access denied. Admins only.' });
      }
    
      try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) return res.status(404).json({ error: 'User not found' });
        res.status(200).json({ message: 'User deleted successfully' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
}

  

  
  