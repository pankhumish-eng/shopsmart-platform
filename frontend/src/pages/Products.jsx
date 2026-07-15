import { useMemo, useState } from "react";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" ||
        product.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <main className="container py-5">
      <div className="text-center mb-5">
        <h1 className="display-6 fw-bold">ShopSmart Products</h1>
        <p className="text-muted">
          Search and browse products across popular categories.
        </p>
      </div>

      <div className="row g-3 mb-4">
        <div className="col-md-8">
          <label htmlFor="productSearch" className="form-label">
            Search products
          </label>

          <input
            id="productSearch"
            type="search"
            className="form-control"
            placeholder="Search by product name"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </div>

        <div className="col-md-4">
          <label htmlFor="categoryFilter" className="form-label">
            Category
          </label>

          <select
            id="categoryFilter"
            className="form-select"
            value={selectedCategory}
            onChange={(event) => setSelectedCategory(event.target.value)}
          >
            {categories.map((category) => (
              <option value={category} key={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      <p className="text-muted">
        Showing {filteredProducts.length} product(s)
      </p>

      <div className="row g-4">
        {filteredProducts.map((product) => (
          <div className="col-sm-6 col-lg-4" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="alert alert-info text-center mt-4">
          No matching products were found.
        </div>
      )}
    </main>
  );
}

export default Products;