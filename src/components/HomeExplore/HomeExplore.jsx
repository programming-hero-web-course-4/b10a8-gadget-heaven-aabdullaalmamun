
import { useState, useEffect } from "react";
import { Link } from "react-router";

const HomeExplore = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All Products");
  const [message, setMessage] = useState("");

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      const data = await fetch("../../../public/products.json").then((res) =>
        res.json()
      );
      setProducts(data);
      setFilteredProducts(data);

      // unique categories
      const uniqueCategories = [
        "All Products",
        ...new Set(data.map((item) => item.category)),
      ];
      setCategories(uniqueCategories);
    };

    fetchProducts();
  }, []);

  const handleFilter = (category) => {
    setActiveCategory(category);

    if (category === "All Products") {
      setFilteredProducts(products);
      setMessage("");
    } else {
      const filtered = products.filter(
        (product) => product.category === category
      );
      setFilteredProducts(filtered);

      // show if the category is empty
      if (filtered.length === 0) {
        setMessage("NO ITEM FOUND");
      } else {
        setMessage("");
      }
    }
  };

  return (
    <div className="max-w-7xl mx-auto mt-25 lg:mt-0">
      <h2 className="text-4xl font-bold text-center">
        Explore cutting-Edge Gadgets
      </h2>

      <div className="flex gap-4 p-4">
        {/* Sidebar catagory Buttons */}
        <div className="w-1/4">
          {categories.map((category, idx) => (
            <button
              key={idx}
              className={`w-full text-left px-4 py-2 mb-2 rounded-md ${
                activeCategory === category
                  ? "bg-purple-500 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
              onClick={() => handleFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="w-3/4">
          {message && (
            <div className="text-red-500 text-lg font-semibold">{message}</div>
          )}
          <div className="grid md:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.product_id}
                className="bg-white p-4 shadow-md rounded-lg"
              >
                <img
                  src={product.product_image}
                  alt={product.product_title}
                  className="h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">
                  {product.product_title}
                </h3>
                <p className="text-gray-600 mb-2">{product.price} $</p>
                {/* view details will nagivate by link */}
                <Link
                  to={`/products/${product.product_id}`}
                  className="px-4 py-2 bg-purple-500 text-white rounded-md block text-center"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeExplore;