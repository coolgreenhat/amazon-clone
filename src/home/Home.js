import React from 'react';
import "./Home.css";
import Product from "./product/Product";

function Home() {
  return (
    <div className="home">
      <img 
      className="home__image"
      src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonDevices/2019/Post_AugArt/1x_Dot._CB406062798_.jpg" 
      alt=""/>
    {/* Product id, title, price, rating, image  */}
    <div className="home__row">
      <Product 
        id={12345} 
        title="The Subtle Art of Not Giving a F*ck "
        price={299}
        rating={5}
        image="https://images-na.ssl-images-amazon.com/images/I/511vJPN7p5L._SX331_BO1,204,203,200_.jpg"
      />
       <Product 
        id={12346} 
        title="The Alchemist "
        price={199}
        rating={5}
        image="https://images-na.ssl-images-amazon.com/images/I/410llGwMZGL._SX328_BO1,204,203,200_.jpg"
      />
      </div>
      <div className="home__row">
      <Product 
        id={12346} 
        title="Apple Watch Series 3 (GPS, 42mm) - Space Grey Aluminium Case with Black Sport Band"
        price={23900}
        rating={4}
        image="https://images-na.ssl-images-amazon.com/images/I/71EoGntO5bL._SL1500_.jpg"
      />
       <Product 
        id={12348} 
        title="Canon EOS 1500D 24.1 Digital SLR Camera (Black) with EF S18-55 is II Lens, 16GB Card and Carry Case"
        price={29000}
        rating={4}
        image="https://images-na.ssl-images-amazon.com/images/I/914hFeTU2-L._SL1500_.jpg"
      />
       <Product 
        id={12349} 
        title="OnePlus 8 Pro (Onyx Black 8GB RAM+128GB Storage)"
        price={54999}
        rating={5}
        image="https://images-na.ssl-images-amazon.com/images/I/61YSMhOd5EL._SL1500_.jpg"
      />
    </div>
    <div className="home__row">
      <Product 
          id={12340} 
          title="LG 80 cms (32 Inches) HD Ready LED Smart TV 32LM560BPTC with IPS Display & WebOS (2019 Model)"
          price={14,990}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/81Yy5UF05tL._SL1500_.jpg"
        />
    </div>
    {/* product  */}
    </div>
  );
}

export default Home
