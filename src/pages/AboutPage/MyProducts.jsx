import React from "react";
import Heading from "./Heading";
import { CollectionsBookmark, Shop, ShoppingCart } from "@mui/icons-material";

// images
import EnglishPost from "../../assets/images/products-image/english-post.png";
import SpanishPost from "../../assets/images/products-image/spanish-post.png";
import FrenshhPost from "../../assets/images/products-image/frensh-post.png";
import spanishLogo from "../../assets/images/products-image/espagnol.png";
import englishLogo from "../../assets/images/products-image/english.png";
import frenshLogo from "../../assets/images/products-image/frances.png";
export default function MyProducts() {
  const productItems = [
    {
      imagePost: EnglishPost,
      imageLogo: englishLogo,
      link: "https://www.patreon.com/ernstschool/shop/lista-de-frases-simples-en-ingles-y-no-1-31161?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=productshare_creator&utm_content=join_link",
    },
    {
      imagePost: FrenshhPost,
      imageLogo: frenshLogo,
      link: "https://www.patreon.com/ernstschool/shop/lista-de-frases-simples-en-frances-para-34663?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=productshare_creator&utm_content=join_link",
    },
    {
      imagePost: SpanishPost,
      imageLogo: spanishLogo,
      link: "https://www.patreon.com/aprendemosespanol/shop/liste-des-phrases-super-utiles-en-no-1-2-29509?utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=productshare_fan&utm_content=join_link",
    },
  ];
  return (
    <section id="my-products">
      <div>
        <Heading
          icon={<CollectionsBookmark />}
          title="My products"
          // description="Learn a new languages on your own"
        />
      </div>
      <div className="products-container-all">
        {productItems.map((item, idx) => (
          <a href={item.link} className="product-box" key={idx}>
            <div
              className="product-image"
              style={{ backgroundImage: `url(${item.imagePost})` }}
            ></div>
            {/* <div className="product-info">
              <span className="product-title">pdf & audio</span>
              <div
                className="product-logo"
                style={{ backgroundImage: `url(${item.imageLogo})` }}
              ></div>
            </div>
            <a href={item.link} className="product-btn">
              <ShoppingCart fontSize="small" className="product-icon-btn" />
              <div className="product-btn--text">Downloard Now</div>
            </a> */}
          </a>
        ))}
      </div>
    </section>
  );
}
