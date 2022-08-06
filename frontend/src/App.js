import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import CartItem from "./CartItem";
function App() {
  const [product, setProduct] = useState([
    {
      name: "Tote Bag",
      price: 10,
      productBy: "facebook",
      image:
        "https://ctl.s6img.com/society6/img/BvR-Cxhw7tdhGCdjA_l11ErutCE/w_700/bags/small/close/~artwork,fw_3500,fh_3500,iw_3500,ih_3500/s6-0053/a/22601141_10921566/~~/san-francisco-p15-bags.jpg",
    },
    {
      name: "Cap",
      price: 22,
      productBy: "facebook",
      image:
        "https://img.hatshopping.co.uk/59Fifty-GCP-SF-Giants-1-Cap-by-New-Era.57972_pf4.jpg",
    },
    {
      name: "Jacket",
      price: 45,
      productBy: "facebook",
      image:
        "https://cdn.shopify.com/s/files/1/1487/1618/products/SAN-FRANCISCO-SEALS-1940-AUTHENTIC-JACKET-Detail_c28b2ebc-4adc-4ab4-8de6-2fa9d30fccf4_grande.jpg?v=1525381272",
    },
  ]);

  return (
    <div className="cart-item-container">
      {product.map((prod) => {
        return (
          <CartItem
            name={prod.name}
            price={prod.price}
            productBy={prod.productBy}
            image={prod.image}
          />
        );
      })}
    </div>
  );
}

export default App;
