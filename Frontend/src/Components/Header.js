import { useFormik } from "formik";
import React from "react";

const Header = () => {
	const { values, handleChange, handleSubmit } = useFormik({
		initialValues: {
			searchText: "",
		},
		onSubmit: (values) => {
			console.log(values);
		},
	});

	return (
		<div className="bg-slate-200 h-28 flex justify-between items-center px-16">
			<div className="h-[20%] flex justify-center items-center ">
				<img
					className="w-32"
					src="https://seeklogo.com/images/O/opencart-logo-923F11C362-seeklogo.com.png"
					alt="logo"
				/>
			</div>

			<form onSubmit={handleSubmit}>
				<input
					className="w-[500px] px-7 py-3 rounded-md shadow-lg outline-none"
					placeholder="Search for products"
					name="searchText"
					value={values.searchText}
					onChange={handleChange}
				></input>
				<button className="bg-slate-400 shadow-xl py-3 ml-1 px-5 rounded-md hover:bg-slate-500 hover:text-white duration-150">
					Search
				</button>
			</form>

			<div>
				<button className="bg-slate-400 mr-9 shadow-xl py-3 ml-1 px-5 rounded-md hover:bg-slate-500 hover:text-white duration-150">
					Login
				</button>
				<button className="bg-slate-400 shadow-xl py-3 ml-1 px-5 rounded-md hover:bg-slate-500 hover:text-white duration-150">
					<img
						alt="Cart"
						className="w-6 rounded-full inline-block"
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWEQD6LABnC5kTVztoatyqwmNgoXUvanemfA&usqp=CAU"
					></img>{" "}
					(0 items)
				</button>
			</div>
		</div>
	);
};

export default Header;
