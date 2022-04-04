import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1>Resor</h1>
      <div className="links">
        <Link to="/">Resor</Link>
        <Link to="/facts">Fakta</Link>
        <Link to="/about">Om oss</Link>
        <Link to="/contact">Kontakt</Link>
      </div>
    </nav>
  );
}
 
export default NavBar;