import { useSelector } from 'react-redux';
import CartItem from '../components/CartItem';
import CartSummary from '../components/CartSummary';

export default function Cart() {
  const items = useSelector(state => state.cart.items);
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>
      {items.length === 0 ? (
        <div className="bg-white p-6 rounded shadow text-center">Your cart is empty.</div>
      ) : (
        <>
          {items.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
          <CartSummary items={items} />
        </>
      )}
    </div>
  );
}
