module.exports = {
  addToCart: async (req, res) => {
    const { user_id, product_id, qty } = req.body;
    const db = req.app.get("db");

    let cart = await db.get_cart(user_id);
    let cartCheck = cart.filter(e => {
      return e.product_id === product_id;
    });

    if (cartCheck[0]) {
      cart = await db.update_qty(
        cartCheck[0].cart_id,
        cartCheck[0].qty + 1,
        user_id
      );
    } else {
      cart = await db.add_to_cart(user_id, product_id);
    }
    return res.status(200).send(cart);
  },

  getCart: async (req, res) => {
    if (!req.session.user.user_id) {
      return res.status(400);
    }
    let { user_id } = req.session.user;
    const db = req.app.get("db");

    try {
      let cart = await db.get_cart([user_id]);
      if (cart) {
        return res.status(200).send(cart);
      }
    } catch (error) {
      return res.sendStatus(500);
    }
  },

  updateQty: async (req, res) => {
    const { cart_id, qty, user_id } = req.body;
    const db = req.app.get("db");

    try {
      let cart = await db.update_qty(cart_id, qty, user_id);
      return res.status(200).send(cart);
    } catch (error) {
      return res.sendStatus(500);
    }
  },

  deleteItem: async (req, res) => {
    if (!req.session.user.user_id) {
      return res.status(400);
    }
    let { user_id } = req.session.user;

    const { cart_id } = req.params;
    const db = req.app.get("db");

    try {
      let cart = await db.delete_item(cart_id, user_id);
      return res.status(200).send(cart);
    } catch (error) {
      return res.sendStatus(500);
    }
  }
};
