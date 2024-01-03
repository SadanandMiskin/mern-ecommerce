import React, { useEffect, useState } from "react";
import Header from "./Header";
import ProductList from "./ProductList";
import CategoryList from "./CategoryList";
import useFetchProducts from "../Hooks/useFetchProducts";
import { useSelector } from "react-redux";

const Browse = () => {
	useFetchProducts();

	const products = useSelector((store) => store.items);

	if (!products) return null;

	const { mobiles, clothes, bags, snacks, laptops } = products;

	console.log(products);

	return (
		<div className="">
			<Header />
			<CategoryList category={mobiles} categoryPage={false} />
			<CategoryList category={clothes} categoryPage={false} />
			<CategoryList category={bags} categoryPage={false} />
			<CategoryList category={snacks} categoryPage={false} />
			<CategoryList category={laptops} categoryPage={false} />
		</div>
	);
};

export default Browse;
