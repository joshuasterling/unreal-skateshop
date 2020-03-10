const bcrypt = require("bcryptjs");

module.exports = {
  login: async (req, res) => {
    const { user_email, user_password } = req.body;
    const { session } = req;
    const db = req.app.get("db").auth;

    let user = await db.check_user([user_email]);
    user = user[0];
    if (!user) {
      return res.status(400).send("Email not found");
    }

    const authenticated = bcrypt.compareSync(user_password, user.user_password);

    if (authenticated) {
      delete user.user_password;
      session.user = user;
      res.status(202).send(session.user);
    } else {
      res.status(401).send("Incorrect email or password");
    }
  },

  register: async (req, res) => {
    const { user_email, user_password } = req.body;
    const { session } = req;
    const db = req.app.get("db").auth;

    console.log(user_email, user_password);
    let user = await db.check_user(user_email);
    user = user[0];
    if (user) {
      return res.status(400).send("User already exists");
    }
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(user_password, salt);
    let newUser = await db.register_user({ user_email, hash });
    newUser = newUser[0];
    session.user = newUser;
    res.status(201).send(session.user);
  },

  logout: (req, res) => {
    if (req.session) req.session.destroy();
    res.sendStatus(200);
  }
};
