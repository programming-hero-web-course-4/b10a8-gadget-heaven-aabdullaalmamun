import { NavLink, useLocation, useNavigate } from "react-router-dom";

const Nav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  // dashboard with state
  const goToDashboardWithWishlist = () => {
    navigate("/dashboard", { state: { activeComponent: "wishlist" } });
  };

  return (
    <div
      className={`flex justify-between items-center max-w-7xl mx-auto sticky z-10 mt-10 ${
        isHome ? "text-white" : "text-black"
      }`}
    >
      <h2 className="font-bold text-xl">Gadget Heaven</h2>
      <div className="flex gap-4">
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-white text-purple-600 px-5 rounded-2xl" : ""
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-purple-400 text-white px-3 rounded-2xl" : ""
          }
          to="/statistics"
        >
          Statistics
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-purple-400 text-white px-3 rounded-2xl" : ""
          }
          to="/dashboard"
        >
          Dashboard
        </NavLink>
      </div>
      <div className="flex justify-center items-center gap-4">
        <NavLink to="/dashboard">
          <button>
            <img
              className="rounded-full size-8 mt-2"
              src="https://img.icons8.com/?size=24&id=On3brTbr5kbp&format=gif"
              alt=""
            />
          </button>
        </NavLink>

        <button onClick={goToDashboardWithWishlist}>
          <img
            className="bg-white rounded-full w-full p-1"
            src="https://img.icons8.com/?size=24&id=86721&format=png"
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

export default Nav;
