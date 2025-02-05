
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Card from "./card";
import WishList from "./WishList";

const Dashboard = () => {
  const [activeComponent, setActiveComponent] = useState('cart');
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.activeComponent) {
      setActiveComponent(location.state.activeComponent);
    }
  }, [location]);

  //set active component
  const showWishlist = () => setActiveComponent('wishlist');
  const showCart = () => setActiveComponent('cart');

  return (
    <div>
      <div className="space-x-4 py-6 bg-purple-500">
        <div>
          <h2 className="text-center text-4xl font-bold text-white">Dashboard</h2>
          <p className="text-center text-white mb-2">
            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
          </p>
        </div>
        <div className="flex justify-center gap-4 text-white">
          <button
            id="cart-btn"
            onClick={showCart}
            className={`font-bold px-6 py-3 rounded-md border ${activeComponent === 'cart' && 'bg-white text-purple-500'}`}
          >
            Cart
          </button>
          <button
            id="wish-btn"
            onClick={showWishlist}
            className={`font-bold px-6 py-3 rounded-md border ${activeComponent === 'wishlist' && 'bg-white text-purple-500'}`}
          >
            Wishlist
          </button>
        </div>
      </div>

      <div className="component-container">
        {activeComponent === 'wishlist' && <WishList />}
        {activeComponent === 'cart' && <Card />}
      </div>
    </div>
  );
};

export default Dashboard;
