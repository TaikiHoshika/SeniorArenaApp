import { NavLink } from "react-router-dom";

import iconHome from "../../components/icons/menu/iconHome.svg";
import iconHealth from "../../components/icons/menu/iconHealth.svg";
import iconHistory from "../../components/icons/menu/iconHistory.svg";
import iconUser from "../../components/icons/menu/iconUser.svg";

import style from "./Menu.module.css";
const Menu = () => {
    return (
        <div className={style.buttons_menu}>
            <NavLink to="/home">
                <div className={style.button_menu}>
                    <img src={iconHome} alt="icon"/>
                    <span>ホーム</span>
                </div>
            </NavLink>
            <NavLink to="/health">
                <div className={style.button_menu}>
                    <img src={iconHealth} alt="icon"/>
                    <span>ダッシュボード</span>
                </div>
            </NavLink>
            <NavLink to="/history">
                <div className={style.button_menu}>
                    <img src={iconHistory} alt="icon"/>
                    <span>運動履歴</span>
                </div>
            </NavLink>
            <NavLink to="/profile">
                <div className={style.button_menu}>
                    <img src={iconUser} alt="icon"/>
                    <span>会員証</span>
                </div>
            </NavLink>
        </div>
    );
}

export default Menu;