import { NavLink } from "react-router-dom";

import iconHome from "../../components/icons/menu/iconHome.svg";
import iconHealth from "../../components/icons/menu/iconHealth.svg";
import iconHistory from "../../components/icons/menu/iconHistory.svg";
import iconUser from "../../components/icons/menu/iconUser.svg";

import style from "./Menu.module.css";
const Menu = () => {
    return (
        <div className={style.buttons_menu}>
            <div className={style.button_menu}>
                <NavLink to="/home">
                    <div>
                        <img src={iconHome} alt="icon"/>
                        <span>ホーム</span>
                    </div>
                </NavLink>
            </div>
            <div className={style.button_menu}>
                <NavLink to="/health">
                    <div>
                        <img src={iconHealth} alt="icon"/>
                        <span>統計</span>
                    </div>
                </NavLink>
            </div>
            <div className={style.button_menu}>
                <NavLink to="/history">
                    <div>
                        <img src={iconHistory} alt="icon"/>
                        <span>運動履歴</span>
                    </div>
                </NavLink>
            </div>
            <div className={style.button_menu}>
                <NavLink to="/profile">
                    <div>
                        <img src={iconUser} alt="icon"/>
                        <span>会員証</span>
                    </div>
                </NavLink>
            </div>
        </div>
    );
}

export default Menu;