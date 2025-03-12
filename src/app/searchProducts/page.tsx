"use client";
import React, { useEffect, useState, Suspense } from "react";
import styles from "./styles.module.css";
import StarRating from "@/app/components/starrating/StarRating";
import { ProductServices } from "../../app/services/Product-services";
import { useCart } from "@/app/components/context/CartContext";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SearchProductsPage = () => {
  const [products, setProducts] = useState([]);
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";
  const router = useRouter();
  const { dispatch } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await ProductServices.getProducts();
      setProducts(data.data);
    };
    fetchProducts();
  }, [query]);

  const filteredProducts = products.filter((product: any) =>
    product.title.toLowerCase().includes((query as string).toLowerCase() || "")
  );

  return (
    <div style={{ marginBottom: "500px" }}>
      <div className={styles.mainbox}>
        <h4>
          Search Results for <span style={{ color: "red" }}>"{query}"</span>{" "}
        </h4>
        <ul>
          <div className={styles.subbox}>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product: any) => (
                <li key={product.documentId}>
                  <div className={styles.box1}>
                    <Link href={`/products/${product.documentId}`}>
                      <img
                        src={ProductServices.getImageUrl(product)}
                        alt={product.title}
                      />
                    </Link>
                    <br />
                    <br />
                    {product.title}
                    <br />
                    <span style={{ fontWeight: "bolder" }}>
                      {" "}
                      ${product.price.toFixed(2)}
                    </span>
                    <StarRating
                      rating={product.rating.rate}
                      ratingCount={product.rating.count}
                    />

                    <p>
                      {" "}
                      <button
                        className={styles.cart}
                        onClick={() => {
                          dispatch({ type: "ADD_TO_CART", payload: product });
                          router.push(`/cart`);
                        }}
                      >
                        Add to Cart
                      </button>
                    </p>
                  </div>
                </li>
              ))
            ) : (
              <h4>Sorry, no products found!</h4>
            )}
          </div>
        </ul>
      </div>
    </div>
  );
};

const SearchResults = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchProductsPage />
    </Suspense>
  );
};

export default SearchResults;

