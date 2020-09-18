import React from "react";
import "./Home.css";
import Product from "../../components/Product/Product";

const Home = () => {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      <div className="home__row">
        <Product
          id="12345123"
          title="Acer Nitro 5 Intel i5-9th Gen 15.6-inch Display 1920 x 1080 Thin and Light Gaming Laptop"
          image="https://images-na.ssl-images-amazon.com/images/I/81IXuyeJhYL._SX679_.jpg"
          price={64000}
          rating={5}
        />
        <Product
          id="12345123"
          title="Acer Nitro 5 Intel i5-9th Gen 15.6-inch Display 1920 x 1080 Thin and Light Gaming Laptop"
          image="https://images-na.ssl-images-amazon.com/images/I/81IXuyeJhYL._SX679_.jpg"
          price={64000}
          rating={5}
        />
      </div>
      <div className="home__row">
        <Product
          id="123445"
          title="Lamkei Sports LAM-1284 Black Dial White Transparent Silicone Strap Analogue Digital Multifunction Watch for Men"
          image="https://images-na.ssl-images-amazon.com/images/I/919aFjwj5lL._UX679_.jpg"
          price={1500}
          rating={3}
        />
        <Product
          id="123423"
          title="EMERA Men's Solid Cotton Long Sleeve Round Neck Shrug"
          image="https://images-na.ssl-images-amazon.com/images/I/71OUSfg5a4L._UX569_.jpg"
          price={800}
          rating={4}
        />
        <Product
          id="12347823"
          title="Felvy Handmade Brown Retro Vintage Leather Woven Bracelet for Men "
          image="https://images-na.ssl-images-amazon.com/images/I/51bvAWHfzuL.jpg"
          price={400}
          rating={3}
        />
      </div>
      <div className="home__row">
        <Product
          id="12347653"
          title="Redmi 8A Dual (Sea Blue, 2GB RAM, 32GB Storage) – Dual Cameras & 5,000 mAH Battery"
          image="https://images-na.ssl-images-amazon.com/images/I/71yXShgxvpL._SX679_.jpg"
          price={8000}
          rating={4}
        />
      </div>
    </div>
  );
};

export default Home;
