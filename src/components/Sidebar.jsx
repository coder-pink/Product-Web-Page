import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-full bg-gray-900 text-white p-4 w-64 pt-20">
      <ul>
        <li className="mb-4 pt-6">
          <Link to="/products" className="hover:text-gray-300">Product Details</Link>
        </li>
        <li>
          <Link to="/compare" className="hover:text-gray-300">Compare Products</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

