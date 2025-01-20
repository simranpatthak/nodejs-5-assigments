const jwt = require("jsonwebtoken")

const genToken  = async (payload)=>{
    try {
        
        const token = await jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: '24h',
          });
    return token
    } catch (error) {
        throw new Error (error)
    }
}


module.exports = {
    genToken
}