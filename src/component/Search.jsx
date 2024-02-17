import React, { useState } from "react";
import data from "./selldata.json";
import ProductItems from "./ProductItems.jsx";
import "./Card.css";
import "../pages/login/login.css";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <div className="templateContainer">
        {/* <div className="loginForm">
          <input className="Searchbar" type="text" placeholder="Search here..." onChange={(event) => {
            setSearchTerm(event.target.value);
          }} />
        </div> */}
        <div>


          <form class="flex items-center max-w-sm mx-auto">
            <label for="simple-search" class="sr-only">Search</label>
            <div class="relative w-full">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2" />
                </svg>
              </div>
              <input type="text" id="simple-search" onChange={(event) => {
                setSearchTerm(event.target.value);
              }} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search product name..." required />
            </div>
            <button type="" class="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
              <span class="sr-only">Search</span>
            </button>
          </form>


        </div>
        <div className="container">
          {
            data
              .filter((val) => {
                if (searchTerm == "") {
                  return val;
                } else if (val.prodName.toLowerCase().includes(searchTerm.toLowerCase())) {
                  return val;
                }
              })
              .map((val) => {
                return (
                  <div >
                    <div key={val.id}>
                      <div className="card">
                        {/* First division */}
                        <div className="product-info">
                          <img src={val.imgURl} alt="Product" />
                          <h2>{val.prodName}</h2>
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
                  </div>)
              })
          }
        </div>
      </div>
    </>
  );
}

export default Search;

