import s from "./aside.module.css";

function Aside() {
    return (
        <aside className={s.aside}>
            <div className={s.logo__container}>
                <a href="" className={s.logo}>
                    Open Visualization App
                </a>
            </div>
            <div className={s.nav__wrapper}>
                <h3 className={`${s.aside__title} ${s.aside__title_1}`}>
                    Menu
                </h3>
                <nav className={s.nav}>
                    <ul className={s.nav__list}>
                        <li className={`${s.nav__item} ${s.active}`}>
                            <a href="" className={s.nav__link}>
                                <img
                                    src="img/aside/Chart.svg"
                                    alt="Visualization"
                                    className={s.visualisation__icon}
                                />
                                Visualizating
                            </a>
                        </li>
                        <li className={s.nav__item}>
                            <a href="" className={s.nav__link}>
                                <img
                                    src="img/aside/Document.svg"
                                    alt="History"
                                    className={s.histiry__icon}
                                />
                                History
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className={s.nav__wrapper}>
                <h3 className={`${s.aside__title} ${s.aside__title_1}`}>
                    Others
                </h3>
                <nav className={s.nav}>
                    <ul className={s.nav__list}>
                        <li className={s.nav__item}>
                            <a href="" className={s.nav__link}>
                                <img
                                    src="img/aside/Setting.svg"
                                    alt="Settings"
                                    className={s.settings__icon}
                                />
                                Settings
                            </a>
                        </li>
                        <li className={s.nav__item}>
                            <a href="" className={s.nav__link}>
                                <img
                                    src="img/aside/Info Square.svg"
                                    alt="Help"
                                    className={s.help__icon}
                                />
                                Help
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    );
}

export default Aside;
