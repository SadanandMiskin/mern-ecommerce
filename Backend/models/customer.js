import mongoose from "mongoose";

const customerSchema = mongoose.Schema({
	customerName: { type: String, required: true },
	customerEmail: String,
	customerPhone: String,
	customerPassword: String,
});

const customer = mongoose.model("Customer", customerSchema);
export default customer;
