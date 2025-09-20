const Note = require('../Models/notesModel')

const getAllNotes = async(req,res)=>{
    try{
       const result = await Note.find();
       if (result){
         res.status(200).send({
                Alert:"Requiest Successfull",
                Result : result
         })
       }
    }catch(err){
        res.status(500).send({alert:err.toString()})
    }
}
const getNOteByID = async(req,res)=>{
    try{
    
        const id = req.params.id
        if(!id){
            res.status(403).send({Alert:"Please Send the ID"})
        }

       const result = await Note.findById(id);
       if (result){
         res.status(200).send({
                Alert:"Requiest Successfull",
                Result : result
         })
       }
    }catch(err){
        res.status(500).send({alert:err.toString()})
    }
}
const createNotes = async (req, res) => {
  try {
    const { title, content } = req.body;

   if (!title || !content ){
      return  res.status(401).send("The Data is not Givvent")
   }
   const result = await Note.create({
    title:title,
    content:content
   })
   if (!result){
       return res.status(401).send({
            Alert:"Not Created"
        })
   }
    return res.status(201).send({
      alert: "Note created successfully",
      data: { title, content }
    });
  } catch (err) {
    res.status(500).send({ alert: err.toString() });
  }
};


 const updateNotes =async(req,res)=>{
    try{
        const {title , content} = req.body
         if (!title || !content ){
            res.status(401).send({Alert:"please send the needed data to be updated"})
         } 
         const id = req.params.id
         if (!id){
            res.status(401).send({
                Alert:"Please send the ID"
            })
         }
         const result = await Note.findOne({_id:id})
         if( !result){
            res.status(401).send({
                Alert:"The Id is Invalid"
            })
         }
         const  result2 = await Note.updateOne({
            title:title,
            content:content
         })
         if (!result2){
            res.status(401).send({
                Alert:"Request was not Successfull"
            })
         }
         res.status(200).send({
            Alert:"The Data was Updated",
            Updated:result2
         })
    }catch(err){
        res.status(500).send({alert:err.toString()})
    }
}

 const deleteNotes =async(req,res)=>{
    try{
        const id = req.params.id
        if (!id){
            res.status(401).send({
                Alert:"Please Send Valid Id"
            })
        }

        const result = await Note.deleteOne({_id:id})

        if(!result){
            res.status(404).send({
                Alert:"Could Not Delete"
            })
        }
        res.status(200).send({
            Alert:"The Data Was Deleted"
        })

    }catch(err){
        res.status(500).send({alert:err.toString()})
    }
}
module.exports ={deleteNotes,updateNotes,createNotes,getAllNotes,deleteNotes,getNOteByID}