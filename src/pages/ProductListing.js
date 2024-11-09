import React, { useEffect, useState } from "react";
import "./ProductListing.css";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ProductGrid from "../components/ProductGrid";

const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [availabilityStatuses, setAvailabilityStatuses] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedAvailabilityStatuses, setSelectedAvailabilityStatuses] =
    useState([]);
  const [maxPrice, setMaxPrice] = useState(1500);
  const [sliderMaxPrice, setSliderMaxPrice] = useState(1500);
  const [sortOption, setSortOption] = useState("Most Popular");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setProducts(data.products);

        const uniqueCategories = Array.from(
          new Set(data.products.map((product) => product.category))
        );
        const uniqueBrands = Array.from(
          new Set(data.products.map((product) => product.brand))
        ).filter((brand) => brand);
        const uniqueAvailabilityStatuses = Array.from(
          new Set(data.products.map((product) => product.availabilityStatus))
        ).filter((status) => status);

        setCategories(uniqueCategories);
        setBrands(uniqueBrands);
        setAvailabilityStatuses(uniqueAvailabilityStatuses);

        const highestPrice = Math.max(
          ...data.products.map((product) => product.price)
        );
        setSliderMaxPrice(highestPrice);
        setMaxPrice(highestPrice);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products
    .filter((product) => {
      const inSelectedCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(product.category);
      const inSelectedBrand =
        selectedBrands.length === 0 || selectedBrands.includes(product.brand);
      const inSelectedAvailability =
        selectedAvailabilityStatuses.length === 0 ||
        selectedAvailabilityStatuses.includes(product.availabilityStatus);
      const withinPriceRange = product.price <= maxPrice;
      return (
        inSelectedCategory &&
        inSelectedBrand &&
        inSelectedAvailability &&
        withinPriceRange
      );
    })
    .sort((a, b) => {
      switch (sortOption) {
        case "Price Low to High":
          return a.price - b.price;
        case "Price High to Low":
          return b.price - a.price;
        case "Newest":
          return new Date(b.meta.createdAt) - new Date(a.meta.createdAt); // Assuming `meta.createdAt` exists
        default:
          return 0;
      }
    });

  return (
    <div>
      <Header />
      <div className="main-content">
        <Sidebar
          categories={categories}
          brands={brands}
          availabilityStatuses={availabilityStatuses}
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
          selectedBrands={selectedBrands}
          setSelectedBrands={setSelectedBrands}
          selectedAvailabilityStatuses={selectedAvailabilityStatuses}
          setSelectedAvailabilityStatuses={setSelectedAvailabilityStatuses}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
          sliderMaxPrice={sliderMaxPrice}
        />
        <ProductGrid
          products={products}
          filteredProducts={filteredProducts}
          sortOption={sortOption}
          setSortOption={setSortOption}
        />
      </div>
    </div>
  );
};

export default ProductListing;
