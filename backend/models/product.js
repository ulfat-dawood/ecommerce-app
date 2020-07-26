const mongoose= require('mongoose')
const Schema= mongoose.Schema; 
const {ObjectId}= mongoose.Schema; 

const productSchema= new Schema({
    name:{
        type:String,
        trim: true,
        maxlength: 32,
        required:true
    },
    description:{
        type:String,
        maxlength: 2000,
        trim:true,
        required: true
    },
    price:{
        type:Number,
        maxlength:32,
        trim:true,
        required:true

    },
    category:{
        type:ObjectId,
        ref:'Categoty', //Model name in category schema 
        required:true
    },
    stock: Number,
    sold:{
        type: Number,
        def:0 //defaulf value, nothing's been sold
    }, 
    photo:{
        data: Buffer, 
        contentType: String
    }
}, {timestamps: true})

module.exports= mongoose.model('Product', productSchema);