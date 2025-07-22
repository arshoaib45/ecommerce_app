import ProductList from '../components/ProductList';

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-4">Products</h1>
      <ProductList />
    </div>
  );
}
