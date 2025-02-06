import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Nav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";
  const [isOpen, setIsOpen] = useState(false);

  const goToDashboardWithWishlist = () => {
    navigate("/dashboard", { state: { activeComponent: "wishlist" } });
    setIsOpen(false);
  };

  return (
    <div
      className={`flex justify-between items-center max-w-7xl mx-auto sticky z-10 mt-10 md:mt-5 px-4 md:px-8 ${
        isHome ? "text-white" : "text-black"
      }`}
    >
      <h2 className="font-bold text-xl md:text-2xl">Gadget Heaven</h2>

      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={40} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Navigation links */}
      <div
        className={`absolute md:static top-16 left-0 w-full md:w-auto md:flex bg-purple-800 md:bg-transparent shadow-md md:shadow-none py-4 md:py-0 transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-purple-400 md:bg-white md:text-purple-600 px-5 rounded-2xl"
                : ""
            }
            to="/"
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "bg-purple-400 text-white px-3 rounded-2xl" : ""
            }
            to="/statistics"
            onClick={() => setIsOpen(false)}
          >
            Statistics
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "bg-purple-400 text-white px-3 rounded-2xl" : ""
            }
            to="/dashboard"
            onClick={() => setIsOpen(false)}
          >
            Dashboard
          </NavLink>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-4">
        <NavLink to="/dashboard">
          <button>
            <img
              className="rounded-full size-8"
              src="https://img.icons8.com/?size=24&id=On3brTbr5kbp&format=gif"
              alt="Profile"
            />
          </button>
        </NavLink>

        <button onClick={goToDashboardWithWishlist}>
          <img
            className="bg-white rounded-full w-full p-1"
            src="https://img.icons8.com/?size=24&id=86721&format=png"
            alt="Wishlist"
          />
        </button>
      </div>
    </div>
  );
};

export default Nav;
