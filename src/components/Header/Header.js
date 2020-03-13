import React, { useState } from "react";
import { connect } from "react-redux";
import { logout, login, register, clearReducer } from "../../redux/userReducer";
import { Link, withRouter } from "react-router-dom";
import AuthErrors from "../Auth/AuthErrors";
import "./Header.css";

function Header(props) {
  const [user_email, setEmail] = useState("");
  const [user_password, setPassword] = useState("");
  const [registered, setRegistered] = useState(true);

  return (
    <div className="header">
      <h1 className="title">Unreal Skateshop</h1>
      <div className="navbar">
        <p className="navbar-item">Build Your Own</p>
        <p className="navbar-item">Shop</p>
        <p className="navbar-item">About</p>
        <p className="navbar-item">Contact Us</p>
        {!props.userReducer.user.user_email ? (
          registered ? (
            //MEMBER LOGIN
            <form
              className="form"
              onSubmit={e => {
                e.preventDefault();
                props.login(user_email, user_password);
                setEmail("");
                setPassword("");
              }}
            >
              Member Login:
              <input
                className="input"
                type="email"
                value={user_email}
                placeholder="Enter your email"
                onChange={e => setEmail(e.target.value)}
              />
              <input
                className="input"
                type="password"
                value={user_password}
                placeholder="Enter your password"
                onChange={e => setPassword(e.target.value)}
              />
              <button className="auth-button">Login</button>
              <p>
                Don't have an account?{" "}
                <span
                  onClick={() => setRegistered(false)}
                  style={{ color: "blue" }}
                >
                  Click here to register.
                </span>
              </p>
            </form>
          ) : (
            //REGISTER NEW MEMBER
            <form
              className="form"
              onSubmit={e => {
                e.preventDefault();
                props
                  .register(user_email, user_password)
                  .then(res => {
                    console.log(res);
                  })
                  .catch(err => {
                    console.log(props.userReducer);
                  });
                setEmail("");
                setPassword("");
              }}
            >
              New Account:
              <input
                className="input"
                type="email"
                value={user_email}
                placeholder="Enter your email"
                onChange={e => setEmail(e.target.value)}
              />
              <input
                className="input"
                type="password"
                value={user_password}
                placeholder="Enter your password"
                onChange={e => setPassword(e.target.value)}
              />
              <button className="auth-button">Register</button>
              <p>
                Already a member?{" "}
                <span
                  onClick={() => setRegistered(true)}
                  style={{ color: "blue" }}
                >
                  Click here to sign in.
                </span>
              </p>
            </form>
          )
        ) : (
          <div>
            <h3>Logged in as: {props.userReducer.user.user_email}</h3>
            <button>
              <Link to="/cart">Cart</Link>
            </button>
            <button
              onClick={() => {
                props.logout();
                props.clearReducer();
                props.history.push("/");
              }}
            >
              Logout
            </button>
          </div>
        )}
      </div>
      <AuthErrors />
    </div>
  );
}

const mapStateToProps = reduxState => {
  return {
    userReducer: reduxState.userReducer
  };
};

export default connect(mapStateToProps, {
  logout,
  login,
  register,
  clearReducer
})(withRouter(Header));
