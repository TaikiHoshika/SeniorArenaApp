import iconNotification from "../../components/icons/header/iconNotification.svg";
import iconMenu from "../../components/icons/header/iconMenu.svg";

import style from "./Header.module.css";

const Header = () => {
    return (
        <div className={style.header}>
            <div className={style.button_header}>
                <img src={iconNotification} alt="icon"/>
            </div>
            <div className={style.logo}>
                Senior Arena
            </div>
            <div className={style.button_header}>
                <img src={iconMenu} alt="icon"/>
            </div>
        </div>
    );
}

export default Header;