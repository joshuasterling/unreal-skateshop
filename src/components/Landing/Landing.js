import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { Link as LinkScroll, animateScroll as scroll } from "react-scroll";
import twitter from "./twitter.svg";
import facebook from "./facebook.svg";
import linkedin from "./linkedin.svg";
import "./Landing.css";

class Landing extends React.Component {
  render() {
    if (this.props.userReducer.user.user_email) return <Redirect to="/shop" />;

    setTimeout(() => {
      scroll.scrollTo(window.innerHeight - window.innerHeight * 0.18);
      clearTimeout();
    }, 2000);

    return (
      <div className="landing">
        <div className="welcome">
          <p className="welcome-message">
            Welcome To The Most Unreal Skateshop You've Ever Seen...
          </p>
        </div>
        <div className="build" id="section1">
          <div className="build-textbox">
            <div>
              <h3 className="section-heading">Build Your Own Board</h3>
            </div>
            <div>
              <p className="section-script">
                Here at Unreal Skateshop we give you the personal selection to
                create and customize a unique board all your own. We'll help you
                step by step to craft the perfect ride. All grip tape and
                hardware included.
              </p>
            </div>
            <div>
              <button className="section-button">Click Here</button>
            </div>
          </div>
          <img
            className="build-image"
            src="https://unrealskateshop.s3-us-west-1.amazonaws.com/KickFlip.png"
            alt=""
          />
        </div>
        <div className="shop" id="section2">
          <img
            className="shop-image1"
            src="https://unrealskateshop.s3-us-west-1.amazonaws.com/3+Decks.jpg"
            alt=""
          />
          <div className="shop-textbox">
            <div>
              <h3 className="section-heading">Shop</h3>
            </div>
            <div>
              <p className="section-script">
                We have a Shop like no other. Our selection is unmatched,
                unparalleled and out of this world. Click below and take a look
                at our wide array of Decks, Trucks, Bearings and Wheels.
              </p>
            </div>
            <div>
              <Link to="/shop">
                <button className="section-button">Click Here</button>
              </Link>
            </div>
          </div>
          <img
            className="shop-image2"
            src="https://unrealskateshop.s3-us-west-1.amazonaws.com/supreme-skateboard-decks-9.jpg"
            alt=""
          />
        </div>
        <div className="about" id="section3">
          <img
            className="about-image"
            src="https://unrealskateshop.s3-us-west-1.amazonaws.com/Chick-Skater.jpg"
            alt=""
          />
          <div className="about-textbox">
            <div>
              <h3 className="section-heading">About</h3>
            </div>
            <div>
              <p className="section-script">
                Unreal Skateshop was founded in March 2020 amidst the
                CORONA-Virus epidemic. Despite the widespread panic and scare,
                we initiated our brand and pressed forward optimistically with
                enthusiasm. Our hope is to someday live in a world where
                everyone can skate free of worry and fear.
              </p>
            </div>
          </div>
        </div>
        <div className="contact-us" id="section4">
          <div>
            <h3 className="section-heading">Check Out Our Team</h3>
          </div>
          <div className="our-team">
            <div>
              <img
                className="profile-pic1"
                src="https://unrealskateshop.s3-us-west-1.amazonaws.com/Creed.jpg"
                alt=""
              />
              <h5>Creed Bratton</h5>
              <p className="job-titles">Quality Assurance</p>
              <div className="social-media">
                <a
                  href="https://twitter.com/creedbratton?lang=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="sm-logos" src={twitter} alt="" />
                </a>
                <a
                  href="https://www.facebook.com/creedbrattonmusic/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="sm-logos" src={facebook} alt="" />
                </a>
                <a
                  href="https://www.linkedin.com/in/creed-bratton-a98421198/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="sm-logos" src={linkedin} alt="" />
                </a>
              </div>
            </div>
            <div>
              <img
                className="profile-pic2"
                src="https://unrealskateshop.s3-us-west-1.amazonaws.com/Ron+Swanson.jpg"
                alt=""
              />
              <h5>Ron Swanson</h5>
              <p className="job-titles">General Manager</p>
              <div className="social-media">
                <a
                  href="https://twitter.com/reaironswanson?lang=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="sm-logos" src={twitter} alt="" />
                </a>
                <a
                  href="https://www.facebook.com/Ron-Swanson-152446580913/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="sm-logos" src={facebook} alt="" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ron-swanson-07295149/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="sm-logos" src={linkedin} alt="" />
                </a>
              </div>
            </div>
            <div>
              <img
                className="profile-pic3"
                src="https://unrealskateshop.s3-us-west-1.amazonaws.com/Chandler.jpg"
                alt=""
              />
              <h5>Chandler Bing</h5>
              <p className="job-titles">Marketing Director</p>
              <div className="social-media">
                <a
                  href="https://twitter.com/chandlermbing?lang=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="sm-logos" src={twitter} alt="" />
                </a>
                <a
                  href="https://www.facebook.com/darealchandler/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="sm-logos" src={facebook} alt="" />
                </a>
                <a
                  href="https://www.linkedin.com/in/chandler-bing-b642a0183/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="sm-logos" src={linkedin} alt="" />
                </a>
              </div>
            </div>
          </div>
          <div>
            <p>You can contact us about any questions you may have at :</p>
            <p>www.unrealskateshop.com</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    userReducer: reduxState.userReducer
  };
};

export default connect(mapStateToProps)(withRouter(Landing));
