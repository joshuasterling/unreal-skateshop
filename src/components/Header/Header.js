import React, { useState } from "react";
import { connect } from "react-redux";
import { logout, login, register } from "../../redux/userReducer";
import { Link } from "react-router-dom";
import "./Header.css";

function Header(props) {
  const [user_email, setEmail] = useState("");
  const [user_password, setPassword] = useState("");
  const [registered, setRegistered] = useState(true);

  return (
    <div className="header">
      <h1 className="title">Unreal Skateshop</h1>
      {!props.userReducer.user.user_email ? (
        registered ? (
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
              type="email"
              value={user_email}
              placeholder="Enter your email"
              onChange={e => setEmail(e.target.value)}
            />
            <input
              type="password"
              value={user_password}
              placeholder="Enter your password"
              onChange={e => setPassword(e.target.value)}
            />
            <button>Login</button>
            <p>
              Don't have an account?{" "}
              <span
                onClick={() => setRegistered(false)}
                style={{ color: "yellow" }}
              >
                Click here to register.
              </span>
            </p>
          </form>
        ) : (
          <form
            className="form"
            onSubmit={e => {
              e.preventDefault();
              props.register(user_email, user_password);
              setEmail("");
              setPassword("");
            }}
          >
            New Account:
            <input
              type="email"
              value={user_email}
              placeholder="Enter your email"
              onChange={e => setEmail(e.target.value)}
            />
            <input
              type="password"
              value={user_password}
              placeholder="Enter your password"
              onChange={e => setPassword(e.target.value)}
            />
            <button>Register</button>
            <p>
              Already a member?{" "}
              <span
                onClick={() => setRegistered(true)}
                style={{ color: "yellow" }}
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
            }}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = reduxState => {
  return {
    userReducer: reduxState.userReducer
  };
};

export default connect(mapStateToProps, { logout, login, register })(Header);
