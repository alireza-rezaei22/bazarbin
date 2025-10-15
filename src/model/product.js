import mongoose from "mongoose";

const schema = mongoose.Schema({
    image:{
        type: Buffer,
        required : false,
    },
    title:{
        type: String,
        required : true,
        minLength: 2,
        maxLength: 20,
    },
    description:{
        type: String,
        required : false,
    },
    city:{
        type: String,
        required : true,
    },
    price:{
        type: Number,
        required : true,
    },
    condition:{
        type: String,
        required : true,
    },
    location:{
        type: Array,
        required: false
    },
    date: {
        type: Date,
        default: Date.now(),
      },
})
const productModel = mongoose.models?.product || mongoose.model('product', schema)
export default productModel