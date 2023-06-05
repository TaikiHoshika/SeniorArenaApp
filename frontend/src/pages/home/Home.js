import iconHome from "../../components/icons/svg/iconHome.svg";
import iconSchedule from "../../components/icons/svg/iconSchedule.svg";
import iconHistory from "../../components/icons/svg/iconHistory.svg";
import iconUser from "../../components/icons/svg/iconUser.svg";

import style from "./Home.module.css";

const Home = () => {
    return (
        <div className={style.background}>
            <div className={style.main}></div>
            <div className={style.buttons}>
                <div className={style.button_icon}>
                    <img src={iconHome} alt="icon"/>
                    <span>ホーム</span>
                </div>
                <div className={style.button_icon}>
                    <img src={iconSchedule} alt="icon"/>
                    <span>予約</span>
                </div>
                <div className={style.button_icon}>
                    <img src={iconHistory} alt="icon"/>
                    <span>来店履歴</span>
                </div>
                <div className={style.button_icon}>
                    <img src={iconUser} alt="icon"/>
                    <span>会員証</span>
                </div>
            </div>
        </div>
    );
}

export default Home;