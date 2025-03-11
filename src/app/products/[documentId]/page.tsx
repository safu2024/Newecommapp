import React from "react";
import { ProductServices } from "@/app/services/Product-services";
import StarRating from "@/app/components/starrating/StarRating";
import styles from "./styles.module.css";
import BackButton from "@/app/components/BackButton";

export default async function productDetails(props: any) {
  const documentId = props.params.documentId;
  const data = await ProductServices.getProductById(documentId);
  const product = data.data;

  return (
    <div style={{ marginBottom: "150px" }}>
      <div className={styles.boxdetail}>
        <img src={ProductServices.getImageUrl(product)} alt={product.title} />
        <h3>{product.title}</h3>

        <h5>Category: {product.category}</h5>
        <p>{product.description}</p>
        <p style={{ fontWeight: "bolder" }}>
          Price: ${product.price.toFixed(2)}
        </p>
        <StarRating
          rating={product.rating.rate}
          ratingCount={product.rating.count}
        />
        <br />

        <BackButton />
        {/* <button>
       
        Back to Products</button> */}
      </div>
    </div>
  );
}
