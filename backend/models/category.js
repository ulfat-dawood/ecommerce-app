const mongoose= require('mongoose'); 
const Schema = mongoose.Schema; 

const categorySchema= new Schema(
    // {
    //     timestamps: true
    // },

    {
        name:{
            type: String,
            trim: true,
            maxlength: 32,
            required: true,
            unique: true
        }
    },
    { timestamps: true }
)

module.exports= mongoose.model('Categoty', categorySchema)