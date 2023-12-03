import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
const Productlist = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const [price, setPrice] = useState(1);

  const handlePrice = () => {
    let total = 0;
    cart.map((item) => (total += item.quantity * item.price));
    setPrice(total);
  };

  useEffect(() => {
    handlePrice();
  });

  useEffect(() => {
    const getProducts = async () => {
      try {
        const productsData = await axios.get(
          "https://6567756864fcff8d7310690c.mockapi.io/User"
        );
        const updatedData = productsData.data.map((product) => ({
          ...product,
        }));
        setProducts(updatedData);
      } catch (error) {
        alert(`Warning`);
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeToCart = (product) =>
    setCart(cart.filter((item) => item.id !== product.id));

  const change = (item, Qty) => {
    const updatedCart = cart.map((data) => {
      if (data.id === item.id) {
        const updatedQuantity = data.quantity + Qty;
        return {
          ...data,
          quantity: updatedQuantity > 0 ? updatedQuantity : 1,
        };
      }
      return data;
    });

    setCart(updatedCart);
  };

  return (
    <Productlist.Provider
      value={{
        products,
        loading,
        addToCart,
        cart,
        removeToCart,
        change,
        price,
      }}
    >
      {children}
    </Productlist.Provider>
  );
};

export default Productlist;
