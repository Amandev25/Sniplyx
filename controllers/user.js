import UserM from "../models/user.js";
import { v4 as uuidv4 } from 'uuid'; // Helps to generate session Id
import {setUser} from "../service/auth.js";
export async function handleUserSignup(req,res){
    const {name , email , password} = req.body ;
    await UserM.create({
        name,
        email,
        password
    });
    return res.render("sign");
}
export async function handleUserlogin(req,res){
    const {email , password} = req.body ;
   const user =await UserM.findOne({email, password});
   if(!UserM){
    return res.render("login");;
    error : 'Invalid Username or Password'
   }
    const token=  setUser(UserM);
    res.cookie("SessionId" , token);
    return res.render("login");
}

//export default {handleUserSignup,handleUserlogin} ; 