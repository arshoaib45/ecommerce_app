import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col">
      <img src={product.image} alt={product.title} className="h-40 object-contain mb-4" />
      <h2 className="font-semibold text-lg mb-1 line-clamp-2">{product.title}</h2>
      <p className="text-gray-500 text-sm mb-2">{product.category}</p>
      <p className="text-blue-600 font-bold text-xl mb-2">${product.price}</p>
      <p className="text-gray-700 text-sm flex-1 mb-2 line-clamp-3">{product.description}</p>
      <div className="flex items-center mb-2">
        <span className="text-yellow-500 mr-1">★</span>
        <span className="text-sm">{product.rating?.rate} ({product.rating?.count})</span>
      </div>
      <button
        className="mt-auto bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
        onClick={() => dispatch(addToCart(product))}
      >
        Add to Cart
      </button>
    </div>
  );
}
