import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getProducts } from '../features/products/productsSlice';
import ProductCard from './ProductCard';
import SearchBar from './SearchBar';
import FilterBar from './FilterBar';

export default function ProductList() {
  const dispatch = useDispatch();
  const { items, status, categories } = useSelector(state => state.products);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [priceRange, setPriceRange] = useState([0, 1000]);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const filtered = items.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase()) &&
    (!category || p.category === category) &&
    p.price >= priceRange[0] && p.price <= priceRange[1]
  );

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <SearchBar value={search} onChange={setSearch} />
        <FilterBar
          categories={categories}
          selectedCategory={category}
          onCategoryChange={setCategory}
          priceRange={priceRange}
          onPriceRangeChange={setPriceRange}
        />
      </div>
      {status === 'loading' && <div>Loading...</div>}
      {status === 'failed' && <div>Failed to load products.</div>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
