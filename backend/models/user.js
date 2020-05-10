const mongoose= require('mongoose');
 
const Schema = mongoose.Schema; 

const userSchema= new Schema({
    name: {
        type: String,
        required: true,
        maxlength: 32,
        trim: true
    },
    lastName: {
        type:String,
        maxlength: 32,
        trim : true
    },
    email:{
        type:String,
        required: true, 
        trim: true, 
        unique: true
    },
    userinfo:{
        type : String,
        trim: true
    },
    password:{
        type:String,
        trim:true
    },
    salt: String,
    role:{      //defining priveleges 
        type:Number,
        default:0    //0 indicate basic user
    },
    purchases:{
        type: Array,
        default: []
    }
})

module.exports= mongoose.model('user', userSchema, 'users')