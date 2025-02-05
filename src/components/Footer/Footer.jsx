
const Footer = () => {
  return (
    <footer className="bg-gray-100 text-center py-8 border-t border-gray-300">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold mb-2">Gadget Heaven</h2>
        <p className="text-gray-500 mb-6">Leading the way in cutting-edge technology and innovation.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-800">
          <div>
            <h3 className="font-extrabold text-xl mb-3">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline text-gray-500">Product Support</a></li>
              <li><a href="#" className="hover:underline text-gray-500">Order Tracking</a></li>
              <li><a href="#" className="hover:underline text-gray-500">Shipping & Delivery</a></li>
              <li><a href="#" className="hover:underline text-gray-500">Returns</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-extrabold text-xl  mb-3">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline text-gray-500">About Us</a></li>
              <li><a href="#" className="hover:underline text-gray-500">Careers</a></li>
              <li><a href="#" className="hover:underline text-gray-500">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-extrabold text-xl mb-3">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline text-gray-500">Terms of Service</a></li>
              <li><a href="#" className="hover:underline text-gray-500">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline text-gray-500">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
