const express=require('express')

const postRouter=express.Router()
const {postModel}=require('../model/post.model')

postRouter.get('/', async(req,res)=>{
    const users=await postModel.find()
    res.send(users)
})


postRouter.post('/create', async(req,res)=>{
    const payload=req.body;
    const post=new postModel(payload)
    await post.save()
    res.send({"msg": "post created"})
})


postRouter.patch('/update/:id', async(req,res)=>{
    try {
        const id=req.params.id;
        const payload=req.body;
        await payload.findByIdAndUpdate({_id:id},payload)
        res.send({'msg':`Post with id: ${id} has been updated`})
    } catch (err) {
        res.send({"msg": "somthing went wrong", "error":err.message})
    }
})

postRouter.delete('/delete/:id', async(req,res)=>{
    const id=req.params.id;
    await postModel.findByIdAndDelete({_id:id})
    res.send({'msg':`Post with id: ${id} has been deleted`})
})


module.exports={
    postRouter
}