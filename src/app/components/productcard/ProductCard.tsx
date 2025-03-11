"use client";
import React, { useEffect, useState } from "react";
import styles from "@/app/products/styles.module.css";
import StarRating from "@/app/components/starrating/StarRating";
import { useCart } from "@/app/components/context/CartContext";
import { useRouter } from "next/navigation";
export default function ProductCard(props: any) {
  var product = props.product;
  //  const [products, setProducts] = useState([]);
  const { dispatch } = useCart();
  const router = useRouter();
  return (
    <div>
      {product.title}

      <span style={{ fontWeight: "bolder" }}> ${product.price.toFixed(2)}</span>

      <StarRating
        rating={product.rating.rate}
        ratingCount={product.rating.count}
      />
      <br />

      <button
        className={styles.cart}
        onClick={() => {
          dispatch({ type: "ADD_TO_CART", payload: product });
          router.push("/cart");
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}
