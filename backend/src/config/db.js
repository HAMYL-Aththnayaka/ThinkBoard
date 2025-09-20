const mongoose = require('mongoose')

const connectDB = async ()=>{
    try{
           await mongoose.connect(process.env.MONGO_URI);
            console.log("The Database is Connected")
    
    }catch(err){
        console.error("The Database is Not Connected",err.toString())
        process.exit(1);
    }
}
module.exports=connectDB