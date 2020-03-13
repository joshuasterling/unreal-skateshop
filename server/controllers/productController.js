module.exports = {
  getProducts: async (req, res) => {
    console.log("hit get");
    const db = req.app.get("db");

    let products = await db.get_products();
    if (products[0]) {
      res.status(200).send(products);
    } else {
      res.status(500).send({ message: "No products in Database" });
    }
  },

  getProductsByType: async (req, res) => {
    const db = req.app.get("db");

    let products = await db.get_products_type(req.params.type);
    if (products[0]) {
      res.status(200).send(products);
    } else {
      res.status(500).send({ message: "Failed to retrieve products" });
    }
  }
};
