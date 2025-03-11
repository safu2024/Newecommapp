import Link from "next/link";
import StarRating from "../components/starrating/StarRating";
import { ProductServices } from "../../app/services/Product-services";
import styles from "./styles.module.css";
import ProductCard from "@/app/components/productcard/ProductCard";

export default async function Products() {
  const data = await ProductServices.getProducts();

  const products = data.data;

  return (
    <div>
      <ul>
        <div className={styles.container}>
          {products.map((product: any) => (
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

                <ProductCard key={product.documentId} product={product} />
              </div>
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
}
