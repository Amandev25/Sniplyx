import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type : String,
        required :true,
        
    },
    email: {
        type : String,
        required : true,
        unique : true
    },
    password: {
        type : String,
        required : true ,
        unique :true
    }
},
 {timestamps:true}
)

const UserM = mongoose.model("user" , UserSchema);
export default UserM ;