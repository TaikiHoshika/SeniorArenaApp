import style from "./Profile.module.css";

import qr from "./qr_example.png"

import UserProfile from '@mui/icons-material/Person';
import Settings from '@mui/icons-material/Settings';
import Coupons from '@mui/icons-material/ConfirmationNumber';
import Help from '@mui/icons-material/Help';

const Profile = () => {
    return (
        <div className={style.main}>
            <div className={style.username}>
                <div>
                    <span className={style.name}>福岡 太郎</span><span className={style.sama}>様</span>
                </div>
                <div>
                    会員No. 0000182
                </div>
            </div>
            <span id={style.hr} />
            <div className={style.card}>
                <img src={qr} />
            </div>
            <span id={style.hr} />
            <div className={style.settings}>
                <div>
                    <UserProfile />
                    <div>
                        お客様情報の<br />確認・編集
                    </div>
                </div>
                <div>
                    <Coupons />
                    <div>
                        クーポン
                    </div>
                </div>
                <div>
                    <Help />
                    <div>
                        わしにはわからん
                    </div>
                </div>
                <div>
                    <Settings />
                    <div>
                        アプリ設定
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;