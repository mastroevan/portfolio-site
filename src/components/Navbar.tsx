import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-500 via-green-400 to-blue-600 fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-500">
          <img src="url('/assets/logo-png.png')" width="20%" height="auto"></img>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-white font-semibold">
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="hover:text-gray-700 cursor-pointer"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="hover:text-gray-700 cursor-pointer"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="hover:text-gray-700 cursor-pointer"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="resume"
              smooth={true}
              duration={500}
              className="hover:text-gray-700 cursor-pointer"
            >
              Resume
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="hover:text-gray-700 cursor-pointer"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Placeholder */}
        <div className="md:hidden text-2xl cursor-pointer">
          &#9776;
        </div>
      </div>
    </nav>
  );
};

export default Navbar;