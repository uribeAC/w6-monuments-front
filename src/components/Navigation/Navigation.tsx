import { NavLink } from "react-router";
import "./Navigation.css";

const Navigation: React.FC = () => {
  return (
    <nav>
      <ul className="navigation">
        <li>
          <NavLink to="/monuments" className={"navigation__link"}>
            Monuments
          </NavLink>
        </li>
        <li>
          <NavLink to="/add" className={"navigation__link"}>
            Add Monument
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
