export default function SearchBar({ value, onInputChange, onSearch }) {
  return (
    <div className="flex w-full md:w-64">
      <input
        type="text"
        placeholder="Search products..."
        value={value}
        onChange={e => onInputChange(e.target.value)}
        className="flex-1 px-4 py-2 border rounded-l focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded-r hover:bg-blue-700"
        onClick={onSearch}
      >
        Search
      </button>
    </div>
  );
}
