import React, { useState } from "react";
import LOGIN_IMG from "../images/login-img.jpg";
import Header from "./Header";
import { useFormik } from "formik";
import { loginSchema } from "./schemas";

const initialValues = {
	name: "",
	email: "",
	password: "",
};

const Login = () => {
	const [isSignInForm, setIsSignInForm] = useState(true);

	// const schema = ;

	const { values, handleChange, handleSubmit, handleBlur, touched, errors } =
		useFormik({
			initialValues: initialValues,
			validationSchema: loginSchema(isSignInForm),
			onSubmit: (values, action) => {
				console.log(values);
				action.resetForm();
			},
		});

	const handleChangeForm = () => {
		setIsSignInForm(!isSignInForm);
	};

	return (
		<div>
			<Header />
			<div className="w-6/12 mx-auto flex bg-slate-400 mt-16">
				<img src={LOGIN_IMG} alt="Login" className="w-1/2" />

				<div className="w-1/2 ">
					<form
						onSubmit={handleSubmit}
						className="flex flex-col items-center pt-28"
					>
						{!isSignInForm && (
							<div className="">
								<input
									className="p-3 outline-none my-2 w-60 rounded"
									placeholder="Full name"
									name="name"
									type="text"
									value={values.name}
									onBlur={handleBlur}
									onChange={handleChange}
								/>
								{touched.name && errors.name ? (
									<div className="font-semibold text-red-600 text-xs">
										{errors.name}
									</div>
								) : null}
							</div>
						)}
						<div className="">
							<input
								className="p-3 outline-none my-2 w-60 rounded"
								placeholder="Email"
								name="email"
								type="text"
								value={values.email}
								onBlur={handleBlur}
								onChange={handleChange}
							/>
							{touched.email && errors.email ? (
								<div className="font-semibold text-red-600 text-xs">
									{errors.email}
								</div>
							) : null}
						</div>

						<div>
							{/* <label htmlFor="password">Enter password</label> */}
							<input
								className="p-3 outline-none my-2 w-60 rounded"
								placeholder="Password"
								name="password"
								type="password"
								value={values.password}
								onBlur={handleBlur}
								onChange={handleChange}
							/>
						</div>
						{touched.password && errors.password ? (
							<div className="self-start mx-16 font-semibold text-red-600 text-xs text-left">
								{errors.password}
							</div>
						) : null}

						<button className="px-10 bg-white py-2 rounded-3xl mt-7 hover:scale-110 duration-200">
							Sign In
						</button>
					</form>

					<p className="text-center mt-12">
						{isSignInForm ? "New here?" : "Existing user?"}{" "}
						<button
							onClick={handleChangeForm}
							className="hover:border-b border-black"
						>
							{isSignInForm ? "Sign Up" : "Sign In"}
						</button>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Login;
