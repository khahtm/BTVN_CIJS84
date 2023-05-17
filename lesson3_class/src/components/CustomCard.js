import React from "react";

function CustomCard({ title, text, image, layout }) {
  return (
    <div className="custom-card">
      {layout === "first" && (
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
      )}
      {layout === "second" && (
        <div className="second-layout">
          <div>
            <img src={image} alt="Card Image" style={{ width: 300, height: 300 }} />
          </div>
          <div>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
        </div>
      )}
      {layout === "third" && (
        <div className="third-layout">
          <h2>{title}</h2>
          <div className="second-layout">
            <div>
              <img src={image} alt="Card Image" style={{ width: 300, height: 300 }} />
            </div>
            <div>
              <p>{text}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CustomCard;

