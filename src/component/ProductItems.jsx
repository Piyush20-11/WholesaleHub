import React, { useState } from "react";
import "./Card.css";
import Data from "./selldata.json";

function ProductItems(props){
    return (
    <div>
            <div className="card">
      {/* First division */}
      <div className="product-info">
        <img src={props.imgURl} alt="Product" />
        <h2>{props.prodName}</h2>
      </div>

      {/* Second division */}
      <div className="quantity-input">
        <label htmlFor="quantity">Quantity:</label>
        <input
          type="number"
          id="quantity"
        //   value={quantity}
        //   onChange={(e) => setQuantity(e.target.value)}
        />
      </div>

      {/* Third division */}
      <div className="checkbox">
        <label>
          <input
            type="checkbox"
            // checked={isChecked}
            // onChange={() => setIsChecked(!isChecked)}
          />
          Add to Cart
        </label>
      </div>
        </div>
    </div>
    );
}
export default ProductItems;