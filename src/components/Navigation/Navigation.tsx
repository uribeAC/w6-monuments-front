import "./Navigation.css";

const Navigation: React.FC = () => {
  const currentPath = window.location.pathname;

  return (
    <nav>
      <ul className="navigation">
        <li>
          <a
            className={`navigation__link${currentPath === "/" ? " navigation__link--current" : ""}`}
            href="/"
          >
            Monuments
          </a>
        </li>
        <li>
          <a
            className={`navigation__link${currentPath === "/add/" ? " navigation__link--current" : ""}`}
            href="/add/"
          >
            Add monument
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
