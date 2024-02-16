import dotenv from "dotenv";
dotenv.config();

import express from "express";
import Session from "express-session";
import passport from "passport";
import cors from "cors";

const app = express();

app.use(cors());

app.use(express.json());
app.use(
	express.urlencoded({
		extended: true,
	})
);

import { db } from "./config/db.js";
import { initializingPassport } from "./config/passportConfig.js";
import customerRegister from "./routes/customerRegister.js";
import customerLogin from "./routes/customerLogin.js";
import productRoutes from "./routes/product.js";
import productList from "./routes/getproducts.js";
import { isAuth } from "./controllers/auth.js";

db(); //database config
initializingPassport(passport);
app.use(
	Session({
		secret: "sdsadaadfdfad",
		resave: false,
		saveUninitialized: false,
		cookie: {
			maxAge: 24 * 10000,
		},
	})
);
app.use(passport.initialize());
app.use(passport.session());
app.use("/uploads", express.static("uploads"));

//routes
app.use("/register", customerRegister);
app.use("/login", customerLogin);
app.use("/addproduct", productRoutes);
app.use("/getproducts", productList);

app.get("/", (req, res) => {
	res.json({ auth: true });
});
app.post("/logout", (req, res) => {
	req.logout((err) => {
		res.json("logged out");
	});
});
app.listen(3000, async () => {
	console.log("server listening");
});
