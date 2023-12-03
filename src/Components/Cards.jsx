import React, { useContext } from "react";
import Productlist from "../Context/Productlist";
import { StarFill } from 'react-bootstrap-icons'

const Cards = ({ product }) => {
  const { addToCart, removeToCart,cart} = useContext(Productlist);
  const inTheCart = () =>
    product && cart.some((item) => item.id === product.id);
  const handleClick = () =>
    inTheCart() ? removeToCart(product) : addToCart(product);
  return (
    <>
      <div className="col mb-4">
        <div className="card h-100">
          <img
            className="card-img-top rounded mx-auto d-block mt-3"
            src={product.image}
            alt="..."
            style={{ width: "200px", height: "200px" }}
          />
          <hr className="m-0 mt-2 " />
          <div className="card-body p-4">
            <div className="text-center">
              <h6 className="">{product.title}</h6>
              <div className="d-flex justify-content-center small text-warning mb-2">
                    {
                        Array.from({ length: Math.round(product.rating.rate) }, (_, i) => <StarFill key={i} />)
                    }
                </div>
              <span className="h6">${product.price}</span>
            </div>
          </div>
        <div className="card-footer pb-3 pt-3 bg-transparent">
          <div className="text-center">
            <button
              className={
                inTheCart() ? "btn btn-danger mt-auto" : "btn btn-info mt-auto"
              }
              onClick={handleClick}
            >
              {inTheCart() ? "Remove" : "Add the product"}
            </button>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
