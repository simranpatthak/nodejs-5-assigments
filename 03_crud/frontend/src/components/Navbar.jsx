
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const user = useSelector((state) => state.user);

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">CRUD</Link>
        <div className="flex space-x-4">
          <Link to="/" className="hover:text-gray-200">Home</Link>
          <Link to="/about" className="hover:text-gray-200">About</Link>
      {!user?.isLoggedIn ? (
        <>
          <Link to="/login" className="hover:text-gray-200">Login</Link>
          <Link to="/signup" className="hover:text-gray-200">Sign Up</Link>
        </>
      ) : (
        <div className="flex items-center space-x-4">
          <span className="font-medium">Welcome, {user.name}</span>
          <button className="hover:text-gray-200" onClick={() => {/* Add logout logic */}}>Logout</button>
        </div>
      )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar