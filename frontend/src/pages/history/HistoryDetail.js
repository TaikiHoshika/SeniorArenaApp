import style from "./HistoryDetail.module.css"

const HistoryDetail = ({title, point, date, time, icon}) => {
    return (
        <div className={style.history}>
            <div className={style.icon}>
                {icon}
            </div>
            <div className={style.textcontent}>
                <div className={style.line1}>
                    <div className={style.title}>{title}</div>
                    <div className={style.time}>{time}分</div>
                </div>
                <div className={style.line2}>
                    <div>獲得ポイント {point}P</div>
                    <div className={style.date}>{date}</div>
                </div>
            </div>
        </div>

    );
}

export default HistoryDetail;