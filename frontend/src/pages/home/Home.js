import { Link } from "react-router-dom";

import style from "./Home.module.css";

const Home = () => {

    return (
        <div className={style.main}>
            <Link to="/scanner">
                <div className={style.buttonScanner} >
                    トレーニング開始
                </div>
            </Link>
        </div>
    );
}

export default Home;