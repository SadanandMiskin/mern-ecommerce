import React from "react";

const ProductList = ({ productName, category, price, img }) => {
	return (
		<div className="min-w-[320px] max-w-[320px] mr-4 p-5 border flex flex-col justify-center text-center shadow-xl">
			<img className="max-w-[80%] h-[60%] mx-auto" src={img} alt="Product" />
			<h1 className="mt-10 font-bold text-lg">{productName}</h1>
			<h2 className="text-sm">₹{price}</h2>
		</div>
	);
};

export default ProductList;
