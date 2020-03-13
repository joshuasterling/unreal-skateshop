import React from "react";
import { connect } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class AuthErrors extends React.Component {
  render() {
    if (this.props.userReducer.error)
      toast.error(`${this.props.userReducer.errorMessage}`, {
        position: toast.POSITION.TOP_RIGHT
      });
    return (
      <div style={{ position: "fixed" }}>
        <ToastContainer autoClose={2000} />
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    userReducer: reduxState.userReducer
  };
};

export default connect(mapStateToProps)(AuthErrors);
