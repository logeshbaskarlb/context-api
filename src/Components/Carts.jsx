import React, { useContext } from "react";
import Productlist from "../Context/Productlist";
import CartItem from "./CartItems";

const Carts = () => {
  const { cart, loading, price } = useContext(Productlist);
  return (
    <>
      <div className="container-fluid ">
        <div className="row justify-content-center mt-4">
          <div className="h2 m-0 mt-4 ms-4">Shopping Cart</div>
          <div className="col-md-9" style={{ backgroundColor: "none" }}>
            <div className="container">
              {loading ? (
                <h3 className="text-center">...</h3>
              ) : cart.length > 0 ? (
                cart.map((item, index) => (
                  <CartItem product={item} key={index} />
                ))
              ) : (
                <h4 className="text-center mt-5">No items </h4>
              )}
            </div>
          </div>
          <div className="card  mt-2 pt-2 mb-5 pb-5" style={{ maxWidth: "18rem" }}>
            <div className="card-header  text-center">Total</div>
            <div className="card-body">
              <h5 className="card-title text-center">${price.toFixed(2)}</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carts;
