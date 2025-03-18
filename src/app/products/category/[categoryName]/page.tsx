import { ProductServices } from "@/app/services/Product-services";
import styles from "./styles.module.css";
import Link from "next/link";
import ProductCard from "@/app/components/productcard/ProductCard";

export default async function categoryProducts(props: any) {
  const categoryName = await props.params.categoryName;
  const data = await ProductServices.getProductByCategory(categoryName);
  const catProducts = data.data;

  return (
    <div >
      <ul className={styles.listbox}>
      {catProducts.map((product: any) => (
        
          <li key={product.documentId}>
            <div className={styles.productlist}>
              <Link href={`/products/${product.documentId}`}>
                <img
                  src={ProductServices.getImageUrl(product)}
                  alt={product?.title}
                />
              </Link>
              <br />
              <br />
              <ProductCard key={product.documentId} product={product} />
            </div>
          </li>
       
      ))}
       </ul>
    </div>
  );
}
