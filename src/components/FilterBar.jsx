export default function FilterBar({ categories, selectedCategory, onCategoryChange, priceRange, onPriceRangeChange }) {
  return (
    <div className="flex gap-4 items-center w-full">
      <select
        value={selectedCategory}
        onChange={e => onCategoryChange(e.target.value)}
        className="px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option value="">All Categories</option>
        {categories.map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
      <div className="flex items-center gap-2">
        <span>Price:</span>
        <input
          type="number"
          min="0"
          max="1000"
          value={priceRange[0]}
          onChange={e => onPriceRangeChange([+e.target.value, priceRange[1]])}
          className="w-20 px-2 py-1 border rounded"
        />
        <span>-</span>
        <input
          type="number"
          min="0"
          max="1000"
          value={priceRange[1]}
          onChange={e => onPriceRangeChange([priceRange[0], +e.target.value])}
          className="w-20 px-2 py-1 border rounded"
        />
      </div>
    </div>
  );
}
