import React from "react";
import FoodItem from "./FoodItem";
import Header from "./Header";

const Menu = ({ foods, categories, selectedCategory }) => {
  return (
    <div className="sub_page">
      <div className="hero_area">
        <div className="bg-box">
          <img src="/images/hero-bg.jpg" alt="Hero background" />
        </div>
        <Header />
      </div>

      <section className="food_section layout_padding-bottom">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>Our Menu</h2>
          </div>

          <ul className="filters_menu">
            <li className={selectedCategory === "all" ? "active" : ""}>
              <a href="?category=all">All</a>
            </li>
            {categories.map((cat, index) => (
              <li key={index} className={selectedCategory === cat ? "active" : ""}>
                <a href={`?category=${cat}`}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</a>
              </li>
            ))}
          </ul>

          <div className="filters-content">
            <div className="row grid">
              {foods.map((food, index) => (
                <FoodItem key={index} food={food} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
