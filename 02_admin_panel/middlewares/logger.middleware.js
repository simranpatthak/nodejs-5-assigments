const fs = require('fs');
const logger = (req,res,next) => {

    const timestamp = new Date().toString();
    const logMessage = `URL: ${req.url}, Method: ${req.method}, Timestamp: ${timestamp}\n`;
    fs.appendFileSync('logs.txt', logMessage);
    
    console.log(logMessage);
    
    next();

};

module.exports = {
  logger,
};

//+0.5
