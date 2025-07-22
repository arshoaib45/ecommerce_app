import { useDispatch } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../features/cart/cartSlice';

export default function CartItem({ item }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded shadow mb-4">
      <img src={item.image} alt={item.title} className="w-20 h-20 object-contain" />
      <div className="flex-1">
        <h2 className="font-semibold text-lg">{item.title}</h2>
        <p className="text-gray-500 text-sm">{item.category}</p>
        <p className="text-blue-600 font-bold">${item.price}</p>
      </div>
      <div className="flex items-center gap-2">
        <button
          className="px-2 py-1 bg-gray-200 rounded"
          onClick={() => dispatch(decreaseQuantity(item.id))}
        >-</button>
        <span className="px-2">{item.quantity}</span>
        <button
          className="px-2 py-1 bg-gray-200 rounded"
          onClick={() => dispatch(increaseQuantity(item.id))}
        >+</button>
      </div>
      <button
        className="ml-4 text-red-500 hover:underline"
        onClick={() => dispatch(removeFromCart(item.id))}
      >Remove</button>
    </div>
  );
}
