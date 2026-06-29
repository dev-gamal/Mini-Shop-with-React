import styles from "./ProductCard.module.css";

function ProductCard({ product }) {

  const { name, price, category, image } = product;

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={image} alt={name} className={styles.productImage} />
      </div>

      <div className={styles.info}>
        <p className={styles.category}>{category}</p>
        <h4>{name}</h4>
        
        <p className={styles.price}>{price.toFixed(2)} €</p>

        <button className={styles.addBtn}>Add to cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
