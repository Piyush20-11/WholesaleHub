import React from "react";
import Data from "../../component/selldata.json";
import ProductItems from "../../component/ProductItems.jsx";
import "../login/login.css";
import Search from "../../component/Search.jsx";
import "../../component/Card.css";
import Navbar from "../Start/Navbar.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function createCard(dataitem) {
  return (
    <ProductItems
      key={dataitem.id}
      imgURl={dataitem.imgURl}
      prodName={dataitem.prodName}
    />
  );
}
function Homepage() {
  return (
    <div className="homepage">
      <div>
        <Search />
      </div>
      {/* <div className="container">
        {Data.map(createCard)}
      </div> */}
      {/* we have not used it here because search.jsx is already returning the cards*/}
      <div className="center">
        <button className="btn" type="submit" >Submit</button>
      </div>
      
    </div>
    
  );
}

export default Homepage;
