
import { useEffect, useState } from "react";
import { useStateContext } from "../../../src/components/StateContext/StateContext";

const Card = () => {
  const { cart, removeFromCart } = useStateContext();
  const [total, setTotal] = useState(0);
  const [sortedCart, setSortedCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [finalTotal, setFinalTotal] = useState(0);

  // Calculate total cost (cart dependency)
  useEffect(() => {
    const newTotal = cart.reduce((acc, item) => acc + item.price, 0);
    setTotal(newTotal);
    setSortedCart([...cart]);
  }, [cart]);

  // Sort by Price
  const handleSort = () => {
    const sorted = [...sortedCart].sort((a, b) => b.price - a.price);
    setSortedCart(sorted);
  };

  // Handle Purchase
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
    <div className="max-w-[1540px] mx-auto mt-4 px-4 sm:px-6 lg:px-8 relative">
     
      {isModalOpen && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg text-center z-50 w-[300px]">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center w-[90%] sm:w-[400px]">
            <div className="mb-4 flex justify-center">
              <img
                src="https://img.icons8.com/?size=48&id=Mw4ZtZQHm38P&format=gif"
                alt="Success"
              />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold mb-2">Payment Successful</h2>
            <p className="text-sm sm:text-base">Thanks for purchasing.</p>
            <p className="font-bold mt-2 text-lg">Total: ${finalTotal}</p>
            <button
              onClick={closeModal}
              className="mt-4 px-4 py-2 bg-gray-200 text-gray-700 rounded-md text-sm sm:text-base"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/*  Header Section */}
      <div className={`flex flex-col sm:flex-row sm:justify-between ${isModalOpen ? "blur-sm" : ""}`}>
        <h2 className="text-xl sm:text-2xl font-bold mb-4">Cart Items</h2>
        <div className="flex justify-between sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
          <h4 className="text-lg sm:text-2xl font-bold">Total cost: {total} $</h4>
          {/* Sort Button */}
          <button
            onClick={handleSort}
            className="px-3 py-1 text-purple-700 font-bold border-2 sm:border-4 border-purple-400 rounded-lg sm:rounded-4xl text-sm sm:text-base"
          >
            Sort by Price
          </button>
          {/* Purchase Button */}
          <button
            onClick={handlePurchase}
            disabled={total === 0}
            className={`text-white font-bold px-4 py-2 rounded-lg sm:rounded-4xl text-sm sm:text-base ${
              total === 0 ? "bg-gray-400 cursor-not-allowed" : "bg-purple-400"
            }`}
          >
            Purchase
          </button>
        </div>
      </div>

      {/* Cart Items Section*/}
      <div className={`mt-4 ${isModalOpen ? "blur-sm" : ""}`}>
        {sortedCart.map((item) => (
          <div
            key={item.product_id}
            className="flex flex-col sm:flex-row items-center justify-between p-4 gap-4 sm:gap-6"
          >
        
            <div className="flex items-center gap-4 sm:gap-6 w-full sm:w-auto">
              <div className="w-20 sm:w-28">
                <img
                  className="rounded-xl w-full"
                  src={item.product_image}
                  alt={item.product_title}
                />
              </div>

              <div className="flex flex-col">
                <h3 className="font-bold text-lg sm:text-xl">{item.product_title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{item.description}</p>
                <p className="text-gray-700 font-bold text-sm sm:text-base">Price: {item.price} $</p>
              </div>
            </div>

            {/*Remove Btn*/}
            <button
              onClick={() => removeFromCart(item.product_id)}
              className="text-red-500 text-sm sm:text-base"
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

