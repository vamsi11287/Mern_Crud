const namemodel = require('../models/usermodel')

const postname = async(req,res)=>{
    try{
        const newname = new namemodel(req.body)
        const names = await newname.save()
        res.status(200).json(names)
    }
    catch(err){
        res.status(400).json({error:err.message})
    }
}

const getnames = async(req,res)=>{
    try{
        const names = await namemodel.find().sort({createdAt:-1})
        res.status(200).json(names)
    }
    catch(err){
        res.status(400).json({error:err.message})
    }
}

const getsinglename = async(req,res)=>{
    try{
        const id = req.params.id
        const names = await namemodel.findById({_id:id})
        res.status(200).json(names)
    }
    catch(err){
        res.status(400).json({error:err.message})
    }
}

const updatename = async(req,res)=>{
    try{
        const id = req.params.id
        const names = await namemodel.findByIdAndUpdate({_id:id},req.body,{new:true})
        res.status(200).json(names)
    }
    catch(err){
        res.status(400).json({error:err.message})
    }
}

const deletename = async(req,res)=>{
    try{
        const id = req.params.id
        const names = await namemodel.findByIdAndDelete({_id:id})
        res.status(200).json("name is deleted successfully")
    }
    catch(err){
        res.status(400).json({error:err.message})
    }
}

module.exports = {
    deletename,postname,updatename,getnames,getsinglename
}