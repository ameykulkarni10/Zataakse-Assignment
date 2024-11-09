import React from "react";
import "./Sidebar.css";

const Sidebar = ({
  categories,
  brands,
  availabilityStatuses,
  selectedCategories,
  setSelectedCategories,
  selectedBrands,
  setSelectedBrands,
  selectedAvailabilityStatuses,
  setSelectedAvailabilityStatuses,
  maxPrice,
  setMaxPrice,
  sliderMaxPrice,
}) => {
  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleBrandChange = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const handleAvailabilityStatusChange = (status) => {
    setSelectedAvailabilityStatuses((prev) =>
      prev.includes(status)
        ? prev.filter((s) => s !== status)
        : [...prev, status]
    );
  };

  const handleSliderChange = (e) => {
    setMaxPrice(Number(e.target.value));
  };

  const sliderProgress = (maxPrice / sliderMaxPrice) * 100;

  return (
    <aside className="sidebar">
      <section>
        <h3>CATEGORIES</h3>
        {categories.map((category) => (
          <label key={category}>
            <input
              type="checkbox"
              checked={selectedCategories.includes(category)}
              onChange={() => handleCategoryChange(category)}
            />{" "}
            {category}
          </label>
        ))}
        <label>
          <input
            type="checkbox"
            checked={selectedCategories.length === 0}
            onChange={() => setSelectedCategories([])}
          />{" "}
          All
        </label>
      </section>

      <section>
        <h3>PRICE</h3>
        <p>Price Range: $0 - ${maxPrice}</p>
        <input
          type="range"
          min="0"
          max={sliderMaxPrice}
          value={maxPrice}
          onChange={handleSliderChange}
          className="price-slider"
          style={{
            background: `linear-gradient(to right, #a0522d ${sliderProgress}%, #ddd ${sliderProgress}%)`,
          }}
        />
      </section>

      <section>
        <h3>BRANDS</h3>
        {brands.map((brand) => (
          <label key={brand}>
            <input
              type="checkbox"
              checked={selectedBrands.includes(brand)}
              onChange={() => handleBrandChange(brand)}
            />{" "}
            {brand}
          </label>
        ))}
      </section>

      <section>
        <h3>AVAILABILITY</h3>
        {availabilityStatuses.map((status) => (
          <label key={status}>
            <input
              type="checkbox"
              checked={selectedAvailabilityStatuses.includes(status)}
              onChange={() => handleAvailabilityStatusChange(status)}
            />{" "}
            {status}
          </label>
        ))}
      </section>
    </aside>
  );
};

export default Sidebar;
