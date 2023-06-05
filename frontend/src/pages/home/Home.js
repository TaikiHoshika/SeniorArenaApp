import iconToken from "../../components/icons/svg/iconToken.svg";
import style from "./Home.module.css";

const Home = () => {
    return (
        <div className={style.main}>
            <div className={style.point}>
                <div className={style.point_balance}>
                    <span className={style.point_balance_tag}>残高</span>
                    <div className={style.point_balance_value}>
                        <span>1,532,017</span>
                        <img src={iconToken} alt="icon"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;