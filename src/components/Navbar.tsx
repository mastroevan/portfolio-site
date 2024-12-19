import { Link } from "react-scroll";
import logo from "../assets/logo-png.png"

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-500">
          <img src={logo} width="20%" height="auto"></img>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-semibold">
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="hover:text-blue-500 cursor-pointer"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="hover:text-blue-500 cursor-pointer"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="hover:text-blue-500 cursor-pointer"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="resume"
              smooth={true}
              duration={500}
              className="hover:text-blue-500 cursor-pointer"
            >
              Resume
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="hover:text-blue-500 cursor-pointer"
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