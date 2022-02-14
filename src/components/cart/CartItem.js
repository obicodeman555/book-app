import React from "react";
import theEffectiveEngineerCover from "assets/img/the-effective-engineer-cover_bgj7u4.jpg";
import "./cartItem.scss";

const CartItem = () => {
  return (
    <div className="cartItem">
      <figure>
        <img
          src={theEffectiveEngineerCover}
          alt="the-effective-engineer-cover"
          srcset=""
        />
        <figcaption>
          <span className="md-font-size">The Effective Engineer</span>
          <span>Edmond Lau</span>
          <button type="button">Remove</button>
        </figcaption>
      </figure>
      <div className="cartItem__control">
        <span className="amountOfItem">$29.99</span>
        <span>
          <button type="button">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19 12.9938V11H5V12.9938L19 12.9938Z" fill="black" />
            </svg>
          </button>
          <input
            type="number"
            name="numberOfitem"
            disabled="disabled"
            value={2}
          />
          <button type="button">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.9058 10.9057H5L5 12.8995H10.9058L10.9058 19L12.8995 19L12.8995 12.8995H19V10.9057H12.8995L12.8995 5L10.9058 5L10.9058 10.9057Z"
                fill="black"
              />
            </svg>
          </button>
        </span>
        <span className="amountOfQuantity">$58.88</span>
      </div>
    </div>
  );
};

export default CartItem;
