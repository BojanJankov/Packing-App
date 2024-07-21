import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { NavLinkModel } from "../../Model/core.model";

interface NavbarProps {
  navLinkData: NavLinkModel[];
}

function Navbar({ navLinkData }: NavbarProps) {
  return (
    <nav className="Navbar">
      <ul>
        {navLinkData.map((link, i) => (
          <li key={i}>
            <NavLink to={link.path}>{link.text}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
