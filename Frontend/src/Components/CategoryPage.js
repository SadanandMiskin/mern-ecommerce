import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Header from "./Header";
import CategoryList from "./CategoryList";

const CategoryPage = () => {
	let categoryName = useParams();
	categoryName = categoryName?.category?.toLowerCase();

	const category = useSelector((store) => store.items[categoryName]);

	if (!category) return null;

	return (
		<div>
			<Header />
			<CategoryList category={category} categoryPage={true} />
		</div>
	);
};

export default CategoryPage;
