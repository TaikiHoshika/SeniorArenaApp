import { Link } from 'react-router-dom';

import iconHome from "../../components/icons/svg/iconHome.svg";
import iconSchedule from "../../components/icons/svg/iconSchedule.svg";
import iconHistory from "../../components/icons/svg/iconHistory.svg";
import iconUser from "../../components/icons/svg/iconUser.svg";

import style from "./Menu.module.css";
const Menu = () => {
    return (
        <div className={style.buttons_menu}>
            <Link to="/home">
                <div className={style.button_menu}>
                    <img src={iconHome} alt="icon"/>
                    <span>ホーム</span>
                </div>
            </Link>
            <Link to="/reserve">
                <div className={style.button_menu}>
                    <img src={iconSchedule} alt="icon"/>
                    <span>予約</span>
                </div>
            </Link>
            <Link to="/history">
                <div className={style.button_menu}>
                    <img src={iconHistory} alt="icon"/>
                    <span>来店履歴</span>
                </div>
            </Link>
            <Link to="/profile">
                <div className={style.button_menu}>
                    <img src={iconUser} alt="icon"/>
                    <span>会員証</span>
                </div>
            </Link>
        </div>
    );
}

export default Menu;