import { useParams } from "react-router-dom";
import { useStateContext } from "../../../src/components/StateContext/StateContext";
import productsData from "../../../public/products.json";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Rating from "react-rating-stars-component";

const ProductDetails = () => {
  const { productId } = useParams();
  const { addToCart, addToWishlist } = useStateContext();
  const product = productsData.find(
    (p) => p.product_id === parseInt(productId)
  );

  if (!product) {
    return (
      <div className="text-red-500 text-center py-20">Product not found!</div>
    );
  }

  //  handle adding to cart
  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.product_title} added to Cart!`, {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      theme: "colored",
    });
  };

  //handle adding to wishlist
  const handleAddToWishlist = (product) => {
    addToWishlist(product);
    toast.info(`${product.product_title} added to Wishlist!`, {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      theme: "colored",
    });
  };

  return (
    <div>
      <div className="bg-[#9538E2]">
        <h2 className="text-4xl text-center pt-4 text-white font-bold">
          Product Detail
        </h2>
        <p className="text-center pb-45 text-white mt-2">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>

      <div className="max-w-7xl mx-auto py-10 px-4 bg-white rounded-4xl relative bottom-30">
        <div className="grid md:grid-cols-2 gap-8">
          <img
            src={product.product_image}
            alt={product.product_title}
            className="w-full h-96 object-contain rounded-lg"
          />
          <div>
            <h1 className="text-4xl font-bold mb-4">{product.product_title}</h1>
            <p className="text-2xl text-purple-600 mb-4">{product.price} $</p>
            <p className="text-gray-600 mb-6">{product.description}</p>

            {/* Specifications */}
            <div>
              <h2 className="text-2xl font-semibold mb-2">Specifications</h2>
              <ul className="list-disc pl-6">
                {product.Specification.map((spec, idx) => (
                  <li key={idx} className="text-gray-700">
                    {spec}
                  </li>
                ))}
              </ul>
            </div>
            {/* Rating Stars */}
            <div className="flex items-center mb-3">
              <h2 className="text-xl font-semibold mr-4">Rating:</h2>
              <Rating
                count={5}
                value={product.rating}
                size={30}
                activeColor="#ffd700"
                edit={false}
              />
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => handleAddToCart(product)}
                className="bg-purple-500 text-white px-6 py-3 rounded-md hover:bg-purple-600"
              >
                Add to Cart
              </button>
              <button
                onClick={() => handleAddToWishlist(product)}
                className="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600"
              >
                <img
                  src="https://img.icons8.com/?size=24&id=86737&format=png"
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ToastContainer in ProductDetails */}
      <ToastContainer />
    </div>
  );
};

export default ProductDetails;
