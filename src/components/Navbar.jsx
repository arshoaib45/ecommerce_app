import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Navbar() {
  const cartCount = useSelector(state => state.cart.items.reduce((sum, i) => sum + i.quantity, 0));
  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center mb-6">
      <Link to="/" className="text-2xl font-bold text-blue-600">E-Commerce</Link>
      <div className="flex gap-6 items-center">
        <Link to="/" className="hover:text-blue-500">Home</Link>
        <Link to="/cart" className="relative hover:text-blue-500">
          Cart
          {cartCount > 0 && (
            <span className="ml-1 bg-blue-500 text-white rounded-full px-2 py-0.5 text-xs">{cartCount}</span>
          )}
        </Link>
      </div>
    </nav>
  );
}
