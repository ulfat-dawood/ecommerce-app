const mongoose= require('mongoose');
const crypto= require('crypto'); 
const uuidv1= require('uuid/v1');
 
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
    encry_password:{
        type:String,
        required: true
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
},
{
    timestamps: true
})

//create virtual field called 'password'
userSchema.virtual('password')
.set(function(password){ //setter: store the value in th DB
    this._password= password; //private fields start with underscore
    this.salt= uuidv1(); 
    this.encry_password= this.securePassword(password);
} )
.get(function(){//getter: populate the value from DB
    return this._password
})

userSchema.method= {
    //this method will be used when authenticating user on login
    authenticate: function(plainpassword){ //take plain password from user
        return this.securePassword(plainpassword) === this.encry_password;
    },
    securePassword: function(plainpassword){
        if(!password) return ""; 
        try{
            return crypto
            .createHmac('sha256', this.salt)
            .update(plainPassword)
            .digest('hex');

        }catch(err){
            return "";

        }
    }
}

module.exports= mongoose.model('User', userSchema)