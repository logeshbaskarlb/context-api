import Header from "./Header";
import { useContext } from "react";
import Cards from "./Cards";
import Productlist from "../Context/Productlist";

const Home = () => {
  const { products, loading } = useContext(Productlist);
  return (
    <div className="contianer-fluid">
      <Header />
      <article className="py-5">
        <section className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols row-cols-md-2 row-cols-xl-4 justify-content-center">
            {loading ? (
              <h4 className="text-center">... </h4>
            ) : (
              products.map((item, index) => {
                return <Cards product={item} key={index} />;
              })
            )}
          </div>
        </section>
      </article>
    </div>
  );
};
export default Home;
