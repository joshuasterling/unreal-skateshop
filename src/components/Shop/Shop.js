import React from "react";
import NewCarousel from "../NewCarousel/NewCarousel";
// eslint-disable-next-line
import { Link as LinkScroll, animateScroll as scroll } from "react-scroll";
import { useState } from "react";
import "./Shop.css";

function Shop() {
  const [product, setProduct] = useState("");

  return (
    <div className="shop-component">
      <div className="shop-section" id="section1">
        <div className="shop-title">
          <h1>Shop</h1>
        </div>

        <div className="shop-holder">
          <div className="decks">
            <LinkScroll to="product-section" smooth={true} offset={-140}>
              <img
                src="https://unrealskateshop.s3-us-west-1.amazonaws.com/decks/Enjoi/Enjoi2.jpeg"
                alt=""
                className="shop-nav-pics"
                onClick={() => setProduct("deck")}
              />
              <h1 onClick={() => setProduct("deck")}>Decks</h1>
            </LinkScroll>
          </div>

          <div className="trucks">
            <LinkScroll to="product-section" smooth={true} offset={-140}>
              <img
                src="https://unrealskateshop.s3-us-west-1.amazonaws.com/trucks/Royal2.jpeg"
                alt=""
                className="shop-nav-pics"
                onClick={() => setProduct("trucks")}
              />
              <h1 onClick={() => setProduct("trucks")}>Trucks</h1>
            </LinkScroll>
          </div>

          <div className="wheels">
            <LinkScroll to="product-section" smooth={true} offset={-140}>
              <img
                src="https://unrealskateshop.s3-us-west-1.amazonaws.com/wheels/Spitfire1.jpeg"
                alt=""
                className="shop-nav-pics"
                onClick={() => setProduct("wheels")}
              />
              <h1 onClick={() => setProduct("wheels")}>Wheels</h1>
            </LinkScroll>
          </div>

          <div className="bearings">
            <LinkScroll to="product-section" smooth={true} offset={-140}>
              <img
                src="https://unrealskateshop.s3-us-west-1.amazonaws.com/bearings/Bones2.jpeg"
                alt=""
                className="shop-nav-pics"
                onClick={() => setProduct("bearings")}
              />
              <h1 onClick={() => setProduct("bearings")}>Bearings</h1>
            </LinkScroll>
          </div>
        </div>
      </div>
      <div id="product-section">
        <NewCarousel type={`${product}`} />
      </div>
    </div>
  );
}

export default Shop;
