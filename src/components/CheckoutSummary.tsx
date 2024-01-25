

const CheckoutSummary = ({ subtotal, discount, total }) => {
  //throw new Error("Unexpected Render Error occured! 🚩");

  return (
    <div className="checkout-summary p-4 bg-gray-900 border-2 border-slate-200 shadow-md rounded-md">
      <p className="text-lg font-semibold mb-2 text-slate-200">Summary</p>
      <p className="text-sm text-gray-500">Subtotal: ${subtotal}</p>
      <p className="text-sm text-gray-500">Discount: ${discount}</p>
      <p className="text-lg font-semibold text-slate-300">Total: ${total}</p>
    </div>
  );
};

export default CheckoutSummary;
