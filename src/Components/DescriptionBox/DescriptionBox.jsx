import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Our e-commerce website offers a diverse and stylish collection of
          clothing to cater to all your fashion needs. Whether you're looking
          for casual wear, formal attire, or the latest trends, we have
          something for everyone. Our categories include men's, women's, and
          children's clothing, featuring everything from elegant dresses and
          sharp suits to comfortable loungewear and activewear.
        </p>
        <p>
          Our e-commerce website features an extensive range of clothing
          available in a variety of colors and sizes to suit every preference
          and body type. We understand that style is personal, so we offer a
          palette of vibrant and classic colors to match your unique taste
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
