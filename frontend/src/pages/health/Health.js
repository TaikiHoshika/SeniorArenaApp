import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip
} from "chart.js";
import { Line } from "react-chartjs-2";
import style from "./Health.module.css"

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip
);

const weight = {
    labels: ["1月", "2月", "3月", "4月", "5月", "6月"],
    datasets: [
        {
            data: [55, 56, 53, 52, 53, 55],
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
        }
    ]
};

const bodyFat = {
    labels: ["1月", "2月", "3月", "4月", "5月", "6月"],
    datasets: [
        {
            data: [25, 22, 21, 23, 22, 20],
            borderColor: "rgb(99, 193, 255)",
            backgroundColor: "rgba(99, 193, 255, 0.5)",
        }
    ]
};

const Health = () => {
    return (
        <div className={style.main}>
            <div className={style.strechTime}>
                <div>
                    <div className={style.label}>今月の運動時間</div>
                    <div className={style.value}>12時間</div>
                </div>
            </div>
            <div className={style.comment}>その調子です!続けて頑張りましょう!</div>
            <div className={style.status}>
                <div className={style.statusContainer}>
                    <span className={style.label}>身長</span>
                    <span className={style.value}>168cm</span>
                </div>
                <div className={style.statusContainer}>
                    <span className={style.label}>体重</span>
                    <span className={style.value}>55kg</span>
                </div>
            </div>
            <div className={style.graphContainer}>
                <div className={style.graph}>
                    <span className={style.label}>体重の推移</span>
                    <Line data={weight} />
                </div>
            </div>
            <div className={style.graphContainer}>
                <div className={style.graph}>
                    <span className={style.label}>体脂肪率の推移</span>
                    <Line data={bodyFat} />
                </div>
            </div>
        </div>
    );
}

export default Health;