import jwt from 'jsonwebtoken';
const Secret = 'Amanyadav@123.gmail.com'
import UserM from '../models/user.js';
export function setUser(user){
  const payload = {
    id : user._id,
    email : user.email

  };
  return jwt.sign(payload , Secret);
}

export function getUser(token){
    if (!token) return null;
   return jwt.verify(token ,Secret); 
}
