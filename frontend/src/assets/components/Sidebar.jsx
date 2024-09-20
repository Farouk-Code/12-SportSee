import yogaIcon from "/app-icons/icon-yoga.svg";
import swinIcon from "/app-icons/icon-swim.svg";
import bicycleIcon from "/app-icons/icon-bicycle.svg";
import dumbbeleIcon from "/app-icons/icon-dumbbel.svg";

/**
 * Composant de barre latérale (Sidebar).
 *
 * Ce composant affiche une barre latérale contenant des icônes d'activités sportives,
 * telles que le yoga, la natation, le vélo et les haltères. Il inclut également un texte de copyright.
 *
 * @returns {JSX.Element} Le composant Sidebar.
 */
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-icons">
        <div className="sidebar-icon">
          <img src={yogaIcon} alt="Yoga" />
        </div>
        <div className="sidebar-icon">
          <img src={swinIcon} alt="Swim" />
        </div>
        <div className="sidebar-icon">
          <img src={bicycleIcon} alt="Bicycle" />
        </div>
        <div className="sidebar-icon">
          <img src={dumbbeleIcon} alt="Dumbbell" />
        </div>
      </div>
      <p className="sidebar-copyright">Copyright, SportSee 2020</p>
    </div>
  );
}

export default Sidebar;
