import iconHome from "../../components/icons/svg/iconHome.svg";
import iconSchedule from "../../components/icons/svg/iconSchedule.svg";
import iconHistory from "../../components/icons/svg/iconHistory.svg";
import iconUser from "../../components/icons/svg/iconUser.svg";

import style from "./Menu.module.css";
const Menu = () => {
    return (
        <div className={style.buttons_menu}>
            <div className={style.button_menu}>
                <img src={iconHome} alt="icon"/>
                <span>ホーム</span>
            </div>
            <div className={style.button_menu}>
                <img src={iconSchedule} alt="icon"/>
                <span>予約</span>
            </div>
            <div className={style.button_menu}>
                <img src={iconHistory} alt="icon"/>
                <span>来店履歴</span>
            </div>
            <div className={style.button_menu}>
                <img src={iconUser} alt="icon"/>
                <span>会員証</span>
            </div>
        </div>
    );
}

export default Menu;