import { Link } from 'react-router-dom';
import '../style/Navbar.css';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/calculator',
      text: 'Calculator',
    },
    {
      id: 3,
      path: '/quote',
      text: 'Quote',
    },
  ];

  return (
    <nav className="navbar">
      <h1>Math Magicians</h1>
      <ul className="link-list">
        {links.map((link) => (
          <li key={link.id} className="link-item">
            <Link
              to={link.path}
              className="link"
            >
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;