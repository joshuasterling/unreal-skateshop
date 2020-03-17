import React from "react";
import { connect } from "react-redux";
import { getProductsByType } from "../../redux/productReducer";
import { addToCart } from "../../redux/cartReducer";
import { useState, useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import "./NewCarousel.css";

function NewCarousel(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    props.getProductsByType(props.type);
  }, [props.type]);

  const mappedProducts = props.productReducer.productList.map(
    (element, index, array) => {
      let nextItem = index + 1;
      let secondItem = nextItem + 1;

      return (
        <div className="full-carousel">
          <div className="item-container">
            <img className="carousel-item" src={element.product_image} alt="" />
            <p>{element.product_name}</p>
            <p>{element.product_price}</p>
            <div>
              <button
                className="cart-button"
                onClick={() => {
                  props.addToCart(element.product_id);
                }}
              >
                Add To Cart
              </button>
            </div>
          </div>
          {array[secondItem] ? (
            <span className="span">
              <div className="item-container">
                <img
                  className="carousel-item"
                  src={array[nextItem].product_image}
                  alt=""
                />
                <p>{array[nextItem].product_name}</p>
                <p>{array[nextItem].product_price}</p>
                <div>
                  <button
                    className="cart-button"
                    onClick={() => {
                      props.addToCart(array[nextItem].product_id);
                    }}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
              <div className="item-container">
                <img
                  className="carousel-item"
                  src={array[secondItem].product_image}
                  alt=""
                />
                <p>{array[secondItem].product_name}</p>
                <p>{array[secondItem].product_price}</p>
                <div>
                  <button
                    className="cart-button"
                    onClick={() => {
                      props.addToCart(array[secondItem].product_id);
                    }}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </span>
          ) : (
            <span className="span">
              <div className="item-container">
                <img
                  className="carousel-item"
                  src={array[0].product_image}
                  alt=""
                />
                <p>{array[0].product_name}</p>
                <p>{array[0].product_price}</p>
                <div>
                  <button
                    className="cart-button"
                    onClick={() => {
                      props.addToCart(array[0].product_id);
                    }}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
              <div className="item-container">
                <img
                  className="carousel-item"
                  src={array[1].product_image}
                  alt=""
                />
                <p>{array[1].product_name}</p>
                <p>{array[1].product_price}</p>
                <div>
                  <button
                    className="cart-button"
                    onClick={() => {
                      props.addToCart(array[1].product_id);
                    }}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </span>
          )}
        </div>
      );
    }
  );

  return (
    <div className="carousel-section" id="section2">
      <div className="item-title">
        <h2>{props.type === "deck" ? props.type + "s" : props.type}</h2>
      </div>
      <Carousel autoPlay={true} interval={8000} animation={"slide"}>
        {mappedProducts}
      </Carousel>
    </div>
  );
}

const mapStateToProps = reduxState => {
  return {
    productReducer: reduxState.productReducer
  };
};

export default connect(mapStateToProps, { getProductsByType, addToCart })(
  NewCarousel
);
