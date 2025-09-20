const ratelimit = require('../config/upstash')

const rateLimiter =async (req,res,next)=>{
    try{
        const {success} = await ratelimit.limit('Rate-Limit')
        if (!success){
            return res.status(429).send({
                Alert:"Too Many Requests Please Try Again Later"
            })
        }
        next()
    }catch(err){
        res.status(500).send({
            Alert:err.toString()
        })

    } 
}
module.exports=rateLimiter