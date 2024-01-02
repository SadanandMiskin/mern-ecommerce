import mongoose from "mongoose";
 
const customerSchema = mongoose.Schema({
    customerName: String,
    customerEmail: String,
    customerPhone: String,
    customerPassword: String,
}
);

const customer = mongoose.model('Customer', customerSchema)
export default customer
