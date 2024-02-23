import "./Header.scss";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { pathname: "/", label: "Home" },
  { pathname: "/about", label: "About" },
  { pathname: "/contacts", label: "Contact" },
  { pathname: "/error/404", label: "Error" },
  // Add more links as needed
];

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <nav>
        <ul>
          {navLinks.map((link) => (
            <li key={link.pathname}>
              <Link
                to={link.pathname}
                className={location.pathname === link.pathname ? "active" : ""}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {/* Optional: Add other header elements (logo, search bar, etc.) */}
    </header>
  );
};

export default Header;
