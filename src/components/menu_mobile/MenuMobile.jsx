import "./menuMobile.scss"

const MenuMobile = ({isOpen, toggle}) => {
    return (
        <div className={"menu " + (isOpen && "active")}>
            <ul className="menu__list">
                <li className="menu__item">
                    <a href="#about" className="menu__item--link" onClick={toggle}>O mnie </a>
                </li>
                <li className="menu__item">
                    <a href="#offer" className="menu__item--link" onClick={toggle}>Oferta</a>
                </li>
                <li className="menu__item">
                    <a href="#portfolio" className="menu__item--link" onClick={toggle}>Portfolio</a>
                </li>
                <li className="menu__item">
                    <a href="#contact" className="menu__item--link" onClick={toggle}>Kontakt</a>
                </li>
            </ul>
        </div>
    )
}

export default MenuMobile
