import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="sticky top-0 z-50 flex justify-between items-center bg-gradient-to-r from-blue-600 to-blue-400 p-4 shadow-md">
      <div className="flex-shrink-0 pl-4 text-lg font-bold text-white">
        <Link to="/">VisualCrave</Link>
      </div>
      <ul className="flex space-x-6 text-white text-sm font-medium">
        <li>
          <Link to="/" className="hover:text-black">Home</Link>
        </li>
        <li>
          <Link to="/gallery" className="hover:text-black">Gallery</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-black">About</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
