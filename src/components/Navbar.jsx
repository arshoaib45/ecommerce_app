import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Navbar() {
  const cartCount = useSelector(state => state.cart.items.reduce((sum, i) => sum + i.quantity, 0));
  return (
    <nav className="sticky top-0 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 shadow-lg px-6 py-4 flex justify-between items-center mb-8 z-30 backdrop-blur bg-opacity-90">
      <Link to="/" className="flex items-center gap-2">
        <span className="inline-block bg-white rounded-full p-1 shadow-md">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="6" width="18" height="13" rx="2" fill="#3B82F6"/>
            <rect x="7" y="2" width="10" height="6" rx="2" fill="#60A5FA"/>
          </svg>
        </span>
        <span className="text-2xl font-extrabold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent drop-shadow">E-Commerce</span>
      </Link>
      <div className="flex gap-6 items-center">
        <Link to="/" className="text-white font-medium hover:text-blue-100 transition-colors">Home</Link>
        <Link to="/cart" className="relative text-white font-medium hover:text-blue-100 transition-colors">
          <span className="flex items-center gap-1">
            <svg className="inline-block" width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M6 6h15l-1.5 9h-13z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><circle cx="9" cy="21" r="1" fill="currentColor"/><circle cx="18" cy="21" r="1" fill="currentColor"/></svg>
            Cart
          </span>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-4 bg-pink-500 text-white rounded-full px-2 py-0.5 text-xs font-bold shadow">{cartCount}</span>
          )}
        </Link>
      </div>
    </nav>
  );
}
