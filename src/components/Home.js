import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">

      <div class="dj-slider">

        <div class="dj-slide">
          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/EOSS/PC_3000-Deals-Unrec._CB634359069_.jpg" />
        </div>

        <div class="dj-slide">
          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/MI/Under1499_Tallhero_3000x1200._CB634138928_.jpg" />
        </div>

        <div class="dj-slide">
          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/SmallAppliances-22/Herotator-22/Kitchen_3000x1200_PC-citi-July._CB634387124_.jpg" />
        </div>

        <div class="dj-slide">
          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/U599/jul22/citi/MA_3000._CB634179609_.jpg" />
        </div>

        </div>

        {/* <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/EOSS/PC_3000-Deals-Unrec._CB634359069_.jpg"
          alt=""
        /> */}

        <div className="home__row">
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
            data = "This is your favourite product. Have it in Basket Now"
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
            data = "Users are buying it Lets check out"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            data = "Great Discounts available on this Product. Do smash the button below"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
            data = "Come on This Product needs a favour from you, Add to Basket"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
            data = "Amazon users are loving this ,want to try ?? Hit the button below"
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            data = "U have waited for long now , This is your time"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
