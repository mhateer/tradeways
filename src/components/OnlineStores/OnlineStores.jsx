import React, { useEffect, useState } from "react";
import "./OnlineStores.scss";
import amazon from "../../assets/amazon.png";
import tiktok from "../../assets/tiktok.png";
import walmart from "../../assets/walmart.png";
import target from "../../assets/target.png";
import etsy from "../../assets/etsy.png";
import ebay from "../../assets/ebay.png";

const OnlineStores = () => {
  const [visibleContainers, setVisibleContainers] = useState([]);

  useEffect(() => {
    const timers = [];
    [amazon, walmart, target, etsy, tiktok, ebay].forEach((_, index) => {
      timers.push(
        setTimeout(() => {
          setVisibleContainers((prev) => [...prev, index]);
        }, index * 200)
      );
    });

    return () => timers.forEach((timer) => clearTimeout(timer));
  }, []);

  return (
    <section className="stores">
      <div className="heading">
        <h1>We Are Your Online <br /> Supply & Distribution Partner</h1>
      </div>
      <div className="paragraph">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ligula metus, elementum vel orci in, luctus finibus nisi. Sed <br />
          malesuada lectus nunc. Curabitur ut quam at lacus suscipit bibendum pharetra get mauris. Nam placerat <br />
          vestibulum justo ut sagittis.
        </p>
      </div>
      <div className="subHeading">
        <h2>Visit Our Online Stores At</h2>
      </div>

      <div className="store-logos">
        <div className={`store-box amazon ${visibleContainers.includes(0) ? "show" : ""}`}>
          <img src={amazon} alt="Amazon FBA" />
        </div>
        <div className="center">
          <div className="top">
            <div className={`store-box target ${visibleContainers.includes(2) ? "show" : ""}`}>
              <img src={target} alt="Target" />
            </div>
            <div className={`store-box etsy ${visibleContainers.includes(3) ? "show" : ""}`}>
              <img src={etsy} alt="Etsy" />
            </div>
          </div>
          <div className="bottom">
            <div className={`store-box tiktok ${visibleContainers.includes(4) ? "show" : ""}`}>
              <img src={tiktok} alt="TikTok Shop" />
            </div>
            <div className={`store-box ebay ${visibleContainers.includes(5) ? "show" : ""}`}>
              <img src={ebay} alt="eBay" />
            </div>
          </div>
        </div>
        <div className={`store-box walmart ${visibleContainers.includes(1) ? "show" : ""}`}>
          <img src={walmart} alt="Walmart (Coming Soon)" />
        </div>
      </div>
    </section>
  );
};

export default OnlineStores;
