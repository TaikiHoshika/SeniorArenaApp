import { Outlet } from 'react-router-dom';

import Menu from "../components/menu/Menu";
import Header from "../components/header/Header";

import style from "./Base.module.css"

const Base = () => {
    return (
        <div className={style.layout}>
            <div className={style.header}>
                <Header />
            </div>
            <div className={style.main}>
                <Outlet />
            </div>
            <div className={style.menu}>
                <Menu/>
            </div>
        </div>
    );
}

export default Base;