import "./Header.css";
import Navbar from "../../Components/Navbar/Navbar";
import { NavLinkModel } from "../../Model/core.model";

interface HeaderProps {
  title: string;
  navLinkData: NavLinkModel[];
}

function Header({ title, navLinkData }: HeaderProps) {
  return (
    <header className="Header">
      <h1>{title}</h1>
      <Navbar navLinkData={navLinkData} />
    </header>
  );
}

export default Header;
