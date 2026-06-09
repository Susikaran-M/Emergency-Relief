import {Link} from "react-router-dom";
const Navbar = () => {
    return (
        <nav className="bg-gray-900 text-white p-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <span className="text-xl font-bold tracking-wider text-blue-400">
          ReliefGrid
        </span>
        {/* Navigation Links */}
        <div className="space-x-6 flex items-center">
          <Link to="/" className="hover:text-blue-300 transition-colors">Needs Board</Link>
          <Link to="/dashboard" className="hover:text-blue-300 transition-colors">NGO Dashboard</Link>
          <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md font-semibold transition-colors"
        
          >
            Login
          </button>
        </div>
      </div>
        </nav>
    );
};
export default Navbar;