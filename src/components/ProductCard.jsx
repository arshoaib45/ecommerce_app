import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const inCart = cartItems.some(item => item.id === product.id);
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-4 flex flex-col border border-gray-100 hover:border-blue-200 group relative overflow-hidden">
      <div className="flex justify-center items-center bg-white rounded-xl mb-4 h-44">
        <img src={product.image} alt={product.title} className="h-36 object-contain transition-transform duration-300 group-hover:scale-105" />
      </div>
      <h2 className="font-semibold text-lg mb-1 line-clamp-2 text-gray-800 group-hover:text-blue-700 transition-colors">{product.title}</h2>
      <p className="text-xs inline-block bg-blue-100 text-blue-600 px-2 py-0.5 rounded mb-2">{product.category}</p>
      <p className="text-blue-600 font-bold text-xl mb-2">${product.price}</p>
      <p className="text-gray-600 text-sm flex-1 mb-2 line-clamp-3">{product.description}</p>
      <div className="flex items-center mb-3">
        <span className="text-yellow-400 mr-1 text-lg">★</span>
        <span className="text-sm text-gray-500">{product.rating?.rate} <span className="text-gray-400">({product.rating?.count})</span></span>
      </div>
      <button
        className={`mt-auto py-2 rounded-lg font-semibold shadow hover:shadow-md transition-all duration-200 w-full 
          ${inCart 
            ? 'bg-blue-400 bg-opacity-30 text-white cursor-not-allowed'
            : 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white'}`}
        onClick={() => !inCart && dispatch(addToCart(product))}
        disabled={inCart}
      >
        {inCart ? 'Item is in Cart' : 'Add to Cart'}
      </button>
      <div className="absolute top-0 right-0 m-2 bg-white/80 rounded-full px-3 py-1 text-xs font-semibold text-blue-500 shadow-sm border border-blue-100">${product.price}</div>
    </div>
  );
}
