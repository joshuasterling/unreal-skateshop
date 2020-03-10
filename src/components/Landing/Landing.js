import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "./Landing.css";

class Landing extends React.Component {
  render() {
    if (this.props.userReducer.user.user_email) return <Redirect to="/shop" />;

    return (
      <div className="landing">
        <p>Landing</p>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    userReducer: reduxState.userReducer
  };
};

export default connect(mapStateToProps)(Landing);
