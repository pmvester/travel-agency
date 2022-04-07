import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
        <img src="franklin-travel.png" onClick={() => navigate('/')} />
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