// import React from "react";
// import { connect } from "react-redux";
// import { getUser } from "../redux/userReducer";
// import { useState } from "react";
// import axios from "axios";

// class Auth extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       username: "",
//       password: ""
//     };
//   }

//   handleInput = event => {
//     this.setState({
//       [event.target.name]: event.target.value
//     });
//   };

//   handleLogin = () => {
//     axios
//       .post("/api/login", {
//         username: this.state.username,
//         password: this.state.password
//       })
//       .then(res => {
//         this.props.getUser(res.data);
//         this.props.history.push("/shop");
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   };

//   handleRegister = () => {
//     const { username, password } = this.state;
//     axios
//       .post("/api/register", {
//         username: username,
//         password: password
//       })
//       .then(res => {
//         this.props.getUser(res.data);
//         this.props.history.push("/shop");
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   };

//   render() {
//     return (
//       <div>
//         <input onChange={e => handleUsername(e.target.value)} />
//         <input onChange={e => handlePassword(e.target.value)} />
//       </div>
//     );
//   }
// }

// export default connect(null, { getUser })(Auth);
