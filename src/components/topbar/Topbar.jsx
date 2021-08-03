import "./topbar.scss";

const Topbar = ({ isOpen, toggle }) => {
  return (
    <div className={"nav " + (isOpen && "active")}>
      <div className="nav__container wrapper">
        <div className="nav__left">
          <a href="#about" className="nav__logo">
            neko<span>.</span>
          </a>
        </div>

        <div className="nav__right">
          <ul className="nav__menu">
            <li className="nav__menu--item">
              <a href="#about">O mnie</a>
            </li>
            <li className="nav__menu--item">
              <a href="#offer">Oferta</a>
            </li>
            <li className="nav__menu--item">
              <a href="#portfolio">Portfolio</a>
            </li>
            <li className="nav__menu--item">
              <a href="#contact">Kontakt</a>
            </li>
          </ul>

          <div className="nav__burger" onClick={toggle}>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
