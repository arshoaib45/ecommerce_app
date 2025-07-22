export default function CartSummary({ items }) {
  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  return (
    <div className="bg-white rounded shadow p-4 mt-4">
      <h2 className="text-xl font-bold mb-2">Order Summary</h2>
      <div className="flex justify-between mb-2">
        <span>Total Items:</span>
        <span>{items.reduce((sum, i) => sum + i.quantity, 0)}</span>
      </div>
      <div className="flex justify-between font-bold text-lg">
        <span>Total:</span>
        <span>${total.toFixed(2)}</span>
      </div>
    </div>
  );
}
