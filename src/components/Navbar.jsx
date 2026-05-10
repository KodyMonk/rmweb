import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    ["Home", "/"],
    ["About", "/about"],
    ["Our Portfolio", "/portfolio"],
    ["Services", "/services"],
    ["Contact Us", "/contact"],
  ];

  return (
    <header className="navbar">
      <Link to="/" className="logo">
        <div className="logoMark">RM</div>
        <div>
          <h2>REMYA</h2>
          <span>MANAGEMENT W.L.L</span>
        </div>
      </Link>

      <nav className={open ? "navLinks active" : "navLinks"}>
        {links.map(([label, path]) => (
          <NavLink key={path} to={path} onClick={() => setOpen(false)}>
            {label}
          </NavLink>
        ))}
      </nav>

      <button className="menuBtn" onClick={() => setOpen(!open)}>
        {open ? <X /> : <Menu />}
      </button>
    </header>
  );
}