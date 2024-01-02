import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./itemsSlice";

const appStore = configureStore({
	reducer: {
		items: itemsSlice,
	},
});

export default appStore;
