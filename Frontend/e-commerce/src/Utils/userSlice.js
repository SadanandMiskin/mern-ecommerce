import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
	name: "User",
	initialState: {
		user: null,
		address: null,
	},
	reducers: {
		addUser: (state, action) => {
			state.user = action.payload;
		},
		removeUser: (state, action) => {
			state.user = null;
		},

		addAddress: (state, action) => {
			state.address = action.payload;
		},
		removeAddress: (state, action) => {
			state.address = null;
		},
	},
});

export const { addUser, removeUser, addAddress, removeAddress } =
	userSlice.actions;
export default userSlice.reducer;
