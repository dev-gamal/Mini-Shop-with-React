import styles from "./CategoryFilter.module.css";

function CategoryFilter({ categories, selectedCategory, setSelectedCategory }) {
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className={styles.filterContainer}>
      <label htmlFor="category-select" className={styles.label}>
        Filter by category :
      </label>

      <select
        id="category-select"
        className={styles.select}
        value={selectedCategory}
        onChange={handleCategoryChange}
      >
        {categories.map((category, index) => (
          <option value={category} key={index}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CategoryFilter;
