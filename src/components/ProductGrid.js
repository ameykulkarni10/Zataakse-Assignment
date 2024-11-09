import React from "react";
import "./ProductGrid.css";

const ProductGrid = ({
  products,
  filteredProducts,
  sortOption,
  setSortOption,
}) => {
  const handleSortChange = (e) => setSortOption(e.target.value);

  return (
    <main className="product-grid">
      <div className="product-header">
        <span>
          Showing <span className="brown-text">{filteredProducts.length}</span>{" "}
          of <span className="brown-text">{products.length}</span> Products
        </span>
        <div className="sort-by">
          <label htmlFor="sort">Sort by:</label>
          <select id="sort" value={sortOption} onChange={handleSortChange}>
            <option>Most Popular</option>
            <option>Newest</option>
            <option>Price Low to High</option>
            <option>Price High to Low</option>
          </select>
        </div>
      </div>

      <div className="products">
        {filteredProducts.map((product) => (
          <div className="product-item" key={product.id}>
            <img
              src={product.thumbnail}
              alt={product.title}
              className="product-image"
            />
            <p className="product-category">{product.category}</p>
            <h4 className="product-name">{product.title}</h4>
            <span className="product-price">${product.price}</span>
          </div>
        ))}
      </div>
    </main>
  );
};

export default ProductGrid;
