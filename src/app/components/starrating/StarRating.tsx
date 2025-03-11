import React from "react";
import styles from "./StarRating.module.css";

const StarRating = ({ rating, ratingCount }: any) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    // <span key={index} className={index < rating ? 'star filled': 'star'}>
    //     ★
    // </span>
    <span
      key={index}
      className={`${styles.star} ${index < rating ? styles.filled : ""}`}
    >
      ★
    </span>
  ));

  return (
    <div className="rating">
      <span className="rating-count">
        {stars} ({ratingCount})
      </span>
    </div>
  );
};

export default StarRating;
