import { useStateContext } from "../../../src/components/StateContext/StateContext";

const WishList = () => {
  const { wishlist, removeFromWishlist } = useStateContext();

  // console.log(wishlist);
  const { addToCart } = useStateContext();
  //  console.log(addToCart);

  return (
    <div className="max-w-[1540px] mx-auto">
      <h2 className="text-2xl font-bold mb-4">WishList</h2>
      {wishlist.map((item) => (
        <div
          key={item.product_id}
          className="flex justify-between items-center p-4"
        >
          <div className="flex items-center">
            <div className="w-[120px] mr-4">
              <img className="rounded-xl" src={item.product_image} alt="" />
            </div>
            <div>
              <h3 className="font-bold text-xl">{item.product_title}</h3>
              <p className="text-gray-600">{item.description}</p>
              <p className="text-gray-700 font-bold">Price: {item.price} $</p>

              {/* Add to card button */}
              <button
                onClick={() => {
                  addToCart(item), removeFromWishlist(item.product_id);
                }}
                className="bg-purple-700 px-3 py-2 rounded-4xl text-white"
              >
                Add to Cart
              </button>
            </div>
          </div>

          {/* remove btn */}
          <button
            onClick={() => removeFromWishlist(item.product_id)}
            className="text-red-500"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default WishList;
