import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import CategoryPage from "./CategoryPage";

const Main = () => {
	return (
		<Routes>
			<Route path="/">
				<Route index element={<Browse />}></Route>
				<Route path=":category" element={<CategoryPage />}></Route>
			</Route>
			<Route path="/login" element={<Login />}></Route>
		</Routes>
	);
};

export default Main;
