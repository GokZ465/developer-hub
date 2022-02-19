import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1>Developer HUB</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/search">Search</Link>
        {/* <Link to="/dummy">Dummy</Link> */}
      </div>
    </nav>
  );
};

export default NavBar;
