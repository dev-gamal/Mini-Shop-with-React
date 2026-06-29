import ProductCard from "../ProductCard/ProductCard";
import styles from "./ProductList.module.css";

function ProductList({ products }) {
  return (
    <div className={styles.listContainer}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
