import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { SourceContext } from "../context/context";
import logo from "../../../public/logo.svg";

/**
 * Composant qui affiche l'en-tête de l'application.
 *
 * @returns {JSX.Element} Le composant Header rendu.
 */
function Header() {
  const { useMockData, toggleMockData } = useContext(SourceContext);

  return (
    <div className="header">
      <Link to="/">
        <img className="header-logo" src={logo} alt="SportSee logo" />
      </Link>
      <nav className="header-navbar">
        <ul className="header-nav">
          <li className="header-nav-item">
            <NavLink className="header-nav-link" to="/">
              Accueil
            </NavLink>
          </li>
          <li className="header-nav-item">
            <NavLink className="header-nav-link" to="/profile">
              Profil
            </NavLink>
          </li>
          <li className="header-nav-item">
            <NavLink className="header-nav-link" to="/settings">
              Paramètres
            </NavLink>
          </li>
          <li className="header-nav-item">
            <NavLink className="header-nav-link" to="/community">
              Communauté
            </NavLink>
          </li>
        </ul>
      </nav>
      <button onClick={toggleMockData}>{useMockData ? "Utiliser l'API" : "Utiliser les données fictives"}</button>
    </div>
  );
}

export default Header;
