
import { useStateContext } from "../../../src/components/StateContext/StateContext";

const WishList = () => {
  const { wishlist, removeFromWishlist, addToCart } = useStateContext();

  return (
    <div className="max-w-[1540px] mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <h2 className="text-xl sm:text-2xl font-bold mb-4">WishList</h2>

      {/* Wishlist Section */}
      <div className="mt-4">
        {wishlist.length === 0 ? (
          <p className="text-gray-600 text-center">Your wishlist is empty.</p>
        ) : (
          wishlist.map((item) => (
            <div
              key={item.product_id}
              className="flex flex-col lg:flex-row items-center justify-between p-4 gap-4 lg:gap-6"
            >
          
              <div className="flex items-center gap-4 lg:gap-6 w-full lg:w-auto">
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
                  <p className="text-gray-700 font-bold text-sm sm:text-base">
                    Price: {item.price} $
                  </p>
                </div>
              </div>
              <div className="flex sm:flex-row lg:flex-col sm:items-center lg:items-end gap-2 sm:gap-4">
                
                <button
                  onClick={() => {
                    addToCart(item);
                    removeFromWishlist(item.product_id);
                  }}
                  className="bg-purple-700 px-4 py-2 rounded-lg text-white text-sm sm:text-base"
                >
                  Add to Cart
                </button>

                {/* Remove Btnn */}
                <button
                  onClick={() => removeFromWishlist(item.product_id)}
                  className="text-red-500 text-sm sm:text-base"
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default WishList;
