const User=require('../models/userModel')

//login user
const loginUser=async(req,res,next)=>{
    res.json({msg:'login user'})
}

//signup user

const signupUser=async(req,res,next)=>{
    const[email,password]=req.body
    res.json({msg:'signup user'})

    try{
        const user=await User.singup(email.password)

        res.status(200).json({email,user})

    }catch(error){
        res.status(400).json({error:error.message})
    } 
}

module.exports={loginUser,signupUser}