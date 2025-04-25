import React from "react";
import { Link } from "react-router-dom";

const Fooditem = ({ food }) => {
  return (
    <div className="col-sm-6 col-lg-4">
      <div className="box">
        <div className="img-box">
          <img src={food.imageUrl} alt={food.name} />
        </div>
        <div className="detail-box">
          <h5>{food.name}</h5>
          <p>{food.description}</p>
          <div className="options">
            <h6>Price: {food.price} birr</h6>
            <h6>Available: {food.available ? "Yes" : "No"}</h6>
            <Link to="/menu">🛒</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fooditem;
