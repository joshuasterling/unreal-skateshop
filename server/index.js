require("dotenv").config();
const express = require("express"),
  massive = require("massive"),
  session = require("express-session"),
  authCtrl = require("./controllers/authController"),
  cartCtrl = require("./controllers/cartController"),
  productCtrl = require("./controllers/productController"),
  checkUser = require("./middlware/checkUser"),
  { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

const app = express();

app.use(express.json());
app.use(
  session({
    resave: false,
    saveUninitialized: true,
    rejectUnauthorized: false,
    cookie: { maxAge: 1000 * 60 * 60 },
    secret: SESSION_SECRET
  })
);

massive({
  connectionString: CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false
  }
}).then(db => {
  app.set("db", db);
  console.log("DB Connected");
});

//AUTH ENDPOINTS
app.get("/api/user", checkUser);
app.post("/api/register", checkUser, authCtrl.register);
app.post("/api/login", checkUser, authCtrl.login);
app.post("/api/logout", authCtrl.logout);

//PRODUCT ENDPOINTS
app.get("/api/products", productCtrl.getProducts);
app.get("/api/products/:type", productCtrl.getProductsByType);

//CART ENDPOINTS
app.post("/api/cart", cartCtrl.addToCart);
app.get("/api/cart", cartCtrl.getCart);
app.put("/api/cart", cartCtrl.updateQty);
app.delete("/api/cart/:cart_id", cartCtrl.deleteItem);

app.listen(SERVER_PORT, () => console.log(`Server running on ${SERVER_PORT}`));
