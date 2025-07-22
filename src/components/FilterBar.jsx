export default function FilterBar({ categories, selectedCategory, onCategoryChange, priceRange, onPriceRangeChange }) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 items-stretch w-full max-w-full overflow-x-auto">
      <select
        value={selectedCategory}
        onChange={e => onCategoryChange(e.target.value)}
        className="px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 min-w-[140px]"
      >
        <option value="">All Categories</option>
        {categories.map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
      <div className="flex items-center gap-2 flex-wrap">
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
