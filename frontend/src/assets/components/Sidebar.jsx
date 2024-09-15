import yogaIcon from "/app-icons/icon-yoga.svg";
import swinIcon from "/app-icons/icon-swim.svg";
import bicycleIcon from "/app-icons/icon-bicycle.svg";
import dumbbeleIcon from "/app-icons/icon-dumbbel.svg";

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
