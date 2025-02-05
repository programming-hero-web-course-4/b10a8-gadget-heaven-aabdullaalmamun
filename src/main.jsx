
import { BrowserRouter, Routes, Route } from "react-router";
import { createRoot } from "react-dom/client";
import { StateProvider } from "../src/components/StateContext/StateContext.jsx"; // Import StateProvider
import "./index.css";
import App from "./App.jsx";
import Banner from "./components/Banner/Banner.jsx";
import Statistics from "./components/Statistics/Statistics.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import HomeExplore from "./components/HomeExplore/HomeExplore.jsx";
import ProductDetails from "./components/ProductDetails/ProductDetails.jsx";


createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StateProvider>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Banner />}>
            <Route index element={<HomeExplore />} />
            <Route path="explore" element={<HomeExplore />} />
          </Route>
          <Route path="statistics" element={<Statistics />} />
          <Route path="dashboard" element={<Dashboard />} />
          
          <Route path="products/:productId" element={<ProductDetails />} />
        
        </Route>
      </Routes>
    </StateProvider>
  </BrowserRouter>
);
