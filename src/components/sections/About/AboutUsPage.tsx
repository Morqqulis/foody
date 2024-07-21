import React from 'react';
import styles from './AboutUsPage.module.css';

const foodItems = [
  { name: 'Hamburger', price: 5.90, image: '/About/hamburger.png', rating: 5 },
  { name: 'Sausage Pizza', price: 7.90, image: '/About/sausage-pizza.png', rating: 4 },
  { name: 'Tomato Soup', price: 7.90, image: '/About/tomato-soup.png', rating: 4 },
  { name: 'Papa Coffee', price: 1.40, image: '/About/papa-coffee.png', rating: 5 },
];

const FoodItem = ({ name, price, image, rating }) => (
  <div className={styles.foodItem}>
    <img className={styles.foodImg} src={image} alt={name} />
    <h3 className={styles.foodName}>{name}</h3>
    <p className={styles.star}>{'⭐'.repeat(rating)}</p>
    <p className={styles.foodPrice}>${price}</p>
  </div>
);

const AboutUsPage = () => (
  <div className="container">
    <div className={styles.aboutUsPage}>
      <div className={styles.aboutUs}>
        <h1 className={styles.aboutUsTitle}>About Us</h1>
        <p className={styles.aboutUsText}>
          Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
        </p>
      </div>
      <div className={styles.foodList}>
        <div className={styles.rotateBack}></div>
        {foodItems.map((item, index) => (
          <FoodItem key={index} {...item} />
        ))}
      </div>
    </div>
  </div>
);

export default AboutUsPage;