# GadgetHeaven 
Your go-to destination for the latest and greatest gadgets!  

🔗 **Live Site:** [GadgetHeaven](https://gadgett.netlify.app/)  
 

## 📌 Project Overview  
**GadgetHeaven** is a fully responsive e-commerce platform designed for buying the latest gadgets.  
The platform features a structured navigation bar, product categories, detailed product pages, a shopping cart, a wishlist system, and product filtering.  

This project is developed using **React.js**, with state management handled via **Context API**.  


## 🚀 Features  
✔ **User-Friendly Navigation:** A well-structured Navbar with active route indication.  
✔ **Product Listing & Filtering:** Sidebar categories for filtering gadgets dynamically.  
✔ **Cart & Wishlist Management:** Add/remove items efficiently using Context API.  
✔ **Sorting & Pricing:** Sort cart items by price in descending order.  
✔ **Edge Case Handling:** Prevents duplicate wishlist entries and incorrect operations.  
✔ **Dynamic Page Management:** Handles reloads without 404 errors.  
✔ **Toast Notifications:** Provides feedback when adding items to the cart/wishlist.  
✔ **Modal-Based Purchase Confirmation:** Uses `useNavigate()` for smooth navigation.  
✔ **Custom 404 Page:** Redirects users if an incorrect route is accessed.  
✔ **Dynamic Page Titles & Favicon:** Enhances user experience and branding.  

---

## 🛠 Tech Stack  
- **Frontend:** React.js, Tailwind CSS  
- **State Management:** Context API  
- **Routing:** React Router  
- **UI Components:** React Icons, React Rating  
- **Deployment:** Netlify  

---

## 📂 Project Setup  
Follow these steps to run the project locally:  

### 1 Clone the Repository  
```sh
git clone https://github.com/YOUR_GITHUB_USERNAME/GadgetHeaven.git
cd GadgetHeaven
```

### 2 Install Dependencies  
```sh
npm install
```

### 3 Start the Development Server  
```sh
npm run dev
```

### 4 Build for Production  
```sh
npm run build
```

---

## 📄 React Concepts Used  
✔ **React Components** - Reusable UI elements.  
✔ **React Hooks** - `useState`, `useEffect`, `useContext`, `useLocation`, `useNavigate`.  
✔ **React Router** - Dynamic navigation between pages.  
✔ **Context API** - Managing cart and wishlist globally.  
✔ **Event Handling** - Click events for buttons and actions.  
✔ **Conditional Rendering** - Showing/hiding elements based on conditions.  

---

## 🛍 Project Functionalities  

### 🛒 Cart System  
- Add/remove items.  
- Displays total cart value.  
- Sorting functionality.  

### ❤️ Wishlist System  
- Add/remove items (prevents duplicates).  
- Moves items from wishlist to cart.  

### 📊 Statistics Page  
- **Composed Chart** displaying price, rating, and quantity.  

### 📌 Dashboard Page  
- **Tabs for Cart & Wishlist** - Users can switch views easily.  

### 🖼 Home Page  
- Dynamic **Banner Section** with a call-to-action button.  
- Sidebar for **Product Categories**.  

### 🔍 Product Details Page  
- **Comprehensive product details** (image, price, specs, availability, etc.).  
- **"Add to Cart" & "Add to Wishlist"** buttons with validation.  

---

## ❗ Edge Cases & Special Implementations  
✔ **Prevents Reload Errors**: No 404 pages when reloading.  
✔ **Disable Duplicate Wishlist Additions**: Prevents adding the same product twice.  
✔ **Sort Cart Items by Price**: Higher-priced items appear first.  
✔ **Background Color Change**: Uses `useLocation()` for dynamic styling.  
✔ **Purchase Confirmation Modal**: Clears cart upon purchase & redirects home.  

---

## 📌 Upcoming Enhancements  
🔹 **User Authentication** (Login & Signup)  
🔹 **Backend Integration** (Real-time database for products & orders)  
🔹 **Payment Gateway Integration** (Stripe/PayPal)  

---

## ✨ Contributing  
Want to contribute? Fork the repo, make your changes, and submit a pull request!  

---

## 📞 Contact  
For any issues or suggestions, feel free to reach out:  
📧 **Email:** *(ahmedmamun2526@gmail.com)*  
🐦 **Facebook:** *(https://www.facebook.com/abdulla.al.mamun.297358/)*  
💼 **LinkedIn:** *(https://www.facebook.com/abdulla.al.mamun.297358/)*  
