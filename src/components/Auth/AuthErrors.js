import React from "react";
import { connect } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { clearCartReducer } from "../../redux/cartReducer";
import "react-toastify/dist/ReactToastify.css";

class AuthErrors extends React.Component {
  render() {
    if (this.props.userReducer.error)
      toast.warning(`${this.props.userReducer.errorMessage}`, {
        position: toast.POSITION.TOP_RIGHT
      });

    if (this.props.cartReducer.success) {
      toast.success(`${this.props.cartReducer.successMessage}`, {
        position: toast.POSITION.BOTTOM_RIGHT
      });
      this.props.clearCartReducer();
    }

    if (this.props.cartReducer.error) {
      toast.info(`${this.props.cartReducer.errorMessage}`, {
        position: toast.POSITION.BOTTOM_RIGHT
      });
      this.props.clearCartReducer();
    }

    return (
      <div style={{ position: "fixed" }}>
        <ToastContainer autoClose={2500} />
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    userReducer: reduxState.userReducer,
    cartReducer: reduxState.cartReducer
  };
};

export default connect(mapStateToProps, { clearCartReducer })(AuthErrors);
