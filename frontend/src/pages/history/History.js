
//import RunningMachine from "@mui/icons-material/DirectionsRun";
//import Dumbbell from "@mui/icons-material/FitnessCenter";
//import Yoga from "@mui/icons-material/SelfImprovement";
//import Ball from "@mui/icons-material/SportsVolleyball";
//import Casino from "@mui/icons-material/Casino";

import style from "./History.module.css";
//import Detail from "./HistoryDetail"

import { useEffect, useState } from "react";
import axios from "axios";

const History = () => {
    const [query, setQuery] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const rawData = await axios.get(
                "https://jsonplaceholder.typicode.com/posts"
            );
            console.log(rawData.data);
            setQuery(rawData.data);
        };
        getData();
    });

    return (
        <div className={style.main}>
            {query}
        </div>
    );
}

export default History;