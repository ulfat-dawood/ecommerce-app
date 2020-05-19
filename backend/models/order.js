const mongoose= require('mongoose');
const Schema, {ObjectId}= mongoose.Schema;

const ProductCartSchema= new Schema({
    product:{
        type: ObjectId,
        ref: 'Product'
    },
    name: String,
    count: Number,
    price: Number
})

const ProductCart= mongoose.model('OrdProductCarter', ProductCartSchema); 

const orderSchema= new Schema(
    {timestamps: true},
    {
        products: [ProductCartSchema],//array of (products in the order) schema
        transaction_id: {},
        amount: Number ,
        address: String ,
        updated: Date, 
        user: {
            type: ObjectId,
            ref: 'User'
        }
    }
)

const Order= mongoose.model('Order', orderSchema); 