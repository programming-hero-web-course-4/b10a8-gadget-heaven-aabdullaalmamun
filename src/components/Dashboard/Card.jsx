
import { useEffect, useState } from "react";
import { useStateContext } from "../../../src/components/StateContext/StateContext";

const Card = () => {
  const { cart, removeFromCart } = useStateContext();
  const [total, setTotal] = useState(0);
  const [sortedCart, setSortedCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [finalTotal, setFinalTotal] = useState(0);

  // Calculate total cost(updated card dependency)
  useEffect(() => {
    const newTotal = cart.reduce((acc, item) => acc + item.price, 0);
    setTotal(newTotal);
    setSortedCart([...cart]);
  }, [cart]);

 
  const handleSort = () => {
    const sorted = [...sortedCart].sort((a, b) => b.price - a.price);
    setSortedCart(sorted);
  };

 
  const handlePurchase = () => {
    setFinalTotal(total);
    setIsModalOpen(true);
    setTotal(0);
    cart.forEach((item) => removeFromCart(item.product_id));
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };


  return (
    <div className="max-w-[1540px] mx-auto mt-4 relative">
      {/* Modal Section */}
      {isModalOpen && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg text-center z-50 w-[300px]">
          <div className="mb-4 flex justify-center">
            <img
              src="https://img.icons8.com/?size=48&id=Mw4ZtZQHm38P&format=gif"
              alt=""
            />
          </div>
          <h2 className="text-2xl font-bold mb-2">Payment Successful</h2>
          <p>Thanks for purchasing.</p>
          <p className="font-bold mt-2">Total: ${finalTotal}</p>
          <button
            onClick={closeModal}
            className="mt-4 px-4 py-2 bg-gray-200 text-gray-700 rounded-md"
          >
            Close
          </button>
        </div>
      )}

      {/* Header Section */}
      <div className={`flex justify-between ${isModalOpen ? "blur-sm" : ""}`}>
        <h2 className="text-2xl font-bold mb-4">Cart Items</h2>
        <div className="flex items-center gap-4">
          <h4 className="text-2xl font-bold">Total cost: {total} $</h4>
          {/* sort button */}
          <button
            onClick={handleSort}
            className="px-3 py-1 text-purple-700 font-bold border-4 border-purple-400 rounded-4xl"
          >
            Sort by Price
          </button>
          {/* purchase button */}
          <button
            onClick={handlePurchase}
            disabled={total === 0}
            className={`text-white font-bold px-4 py-2 rounded-4xl ${
              total === 0 ? "bg-gray-400 cursor-not-allowed" : "bg-purple-400"
            }`}
          >
            Purchase
          </button>
        </div>
      </div>

      {/* Cart Items section*/}
      <div className={`mt-4 ${isModalOpen ? "blur-sm" : ""}`}>
        {sortedCart.map((item) => (
          <div
            key={item.product_id}
            className="flex justify-between items-center p-4"
          >
            <div className="flex items-center">
              <div className="w-[120px] mr-4">
                <img
                  className="rounded-xl"
                  src={item.product_image}
                  alt={item.product_title}
                />
              </div>
              <div>
                <h3 className="font-bold text-xl">{item.product_title}</h3>
                <p className="text-gray-600">{item.description}</p>
                <p className="text-gray-700 font-bold">Price: {item.price} $</p>
              </div>
            </div>
            {/* remove button */}
            <button
              onClick={() => removeFromCart(item.product_id)}
              className="text-red-500"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
