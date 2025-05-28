import s from './Menu.module.css';

function Menu({ active, toggleMenu }) {
    return (
        <div
            className={`${s.menu__icon} ${active ? s.active : ""}`}
            onClick={toggleMenu}
        >
            <span></span>
        </div>
    );
}

export default Menu;
