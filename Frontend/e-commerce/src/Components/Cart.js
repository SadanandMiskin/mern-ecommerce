import React, { useState } from "react";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartItems from "./CartItems";
import { updateCartItems } from "../Utils/cartSlice";

const Cart = () => {
	let cartItems = useSelector((store) => store.cart.cartItems);
	const [count, setCount] = useState(Array(cartItems.length).fill(1));
	const dispatch = useDispatch();
	const user = useSelector((store) => store.user.user);
	const navigate = useNavigate();

	let price = 0;
	cartItems.map((item) => (price += item.price * item.totalItems));

	const handleCount = (inc, index) => {
		const newCount = [...count];
		newCount[index] = inc ? count[index] + 1 : count[index] - 1;
		setCount(newCount);

		let newCartItems = cartItems.map((item, i) => {
			if (i === index) {
				return { ...item, totalItems: newCount[index] };
			}
			return { ...item };
		});
		dispatch(updateCartItems(newCartItems));
	};

	const handleRemoveItem = (index) => {
		const newCart = [...cartItems];
		newCart.splice(index, 1);

		dispatch(updateCartItems(newCart));
	};

	const handlePlaceOrder = () => {
		if (!user) {
			navigate("/login");
		} else {
			navigate("/place-order");
			// Send it to backend
		}
	};

	return (
		<div>
			<Header ifInCart={true} />

			<div className="pt-32">
				<div className="my-20 mx-auto flex justify-center">
					<div className="bg-slate-200 py-10 w-[60%] shadow-xl">
						<h1 className="font-semibold text-2xl px-7 pb-4 mb-7 border-b border-gray-400">
							CART
						</h1>

						{cartItems.length === 0 ? (
							<div className="text-3xl flex justify-center items-center pt-16">
								Your cart is empty!!😕
							</div>
						) : (
							cartItems.map((item, index) => (
								<CartItems
									key={item?._id}
									item={item}
									totalItems={item?.totalItems}
									count={count[index]}
									setCountFunc={(inc) => {
										handleCount(inc, index);
									}}
									handleRemoveItem={() => {
										handleRemoveItem(index);
									}}
								/>
							))
						)}

						<div className="mt-10 flex justify-center">
							{cartItems.length > 0 && (
								<button
									onClick={handlePlaceOrder}
									className="px-10 py-3 bg-green-500 text-white hover:bg-green-600 hover:scale-95 duration-150"
								>
									PLACE ORDER
								</button>
							)}
						</div>
					</div>
					<div className="ml-10 bg-slate-200 w-72 h-80 shadow-xl">
						<h1 className="py-3 font-semibold px-5 text-gray-500 border-b border-gray-400">
							PRICE DETAILS
						</h1>
						<div className="px-7 mt-3 flex justify-between">
							<div className="">Price ({cartItems.length} items)</div>
							<div className="">₹{price}</div>
						</div>

						<div className="px-7 mt-5 flex justify-between">
							<div className="">Discount</div>
							<div className="text-green-500">-₹0</div>
						</div>

						<div className="px-7 mt-5 flex justify-between">
							<div className="">Delivery Charges</div>
							<div className="text-green-500">Free</div>
						</div>

						<div className="px-7 mt-8 py-6 text-md font-semibold border-y border-gray-400 flex justify-between">
							<div className="">Total Amount</div>
							<div className="">₹{price}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;
