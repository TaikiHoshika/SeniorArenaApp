
//import RunningMachine from "@mui/icons-material/DirectionsRun";
//import Dumbbell from "@mui/icons-material/FitnessCenter";
//import Yoga from "@mui/icons-material/SelfImprovement";
//import Ball from "@mui/icons-material/SportsVolleyball";
//import Casino from "@mui/icons-material/Casino";

import CircularProgress from '@mui/material/CircularProgress';

import style from "./History.module.css";
//import Detail from "./HistoryDetail"

import { useEffect, useState } from "react";
import axios from "axios";

const History = () => {
    const [query, setQuery] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            await axios.get(
                "https://jsonplaceholder.typicode.com/posts"
            ).then((response) => {
                setQuery(response.data);
                setLoading(false);
            });
        };
        getData();
    });

    return (
        <div className={style.main}>
            { loading ? (
                <CircularProgress sx={{ color: "#FFA600"}} />
            ) : (
                query.map((data) => {
                    return (
                        <div>
                            <p>{data.title}</p>
                            <p>{data.body}</p>
                        </div>
                    );
                })
            )}
        </div>
    );
}

export default History;