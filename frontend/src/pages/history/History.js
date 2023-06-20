
import RunningMachine from '@mui/icons-material/DirectionsRun';
import Dumbbell from '@mui/icons-material/FitnessCenter';
import Yoga from '@mui/icons-material/SelfImprovement';
import Ball from '@mui/icons-material/SportsVolleyball';
import Casino from '@mui/icons-material/Casino';

import style from "./History.module.css";
import Detail from "./HistoryDetail"

const History = () => {
    return (
        <div className={style.main}>
            <Detail
                title="ランニングマシン"
                point="100"
                date="2023/01/01"
                time="30"
                icon={<RunningMachine />}
            />
            <Detail
                title="ウェイト"
                point="100"
                date="2023/01/01"
                time="30"
                icon={<Dumbbell />}
            />
            <Detail
                title="ヨガ"
                point="100"
                date="2023/01/01"
                time="30"
                icon={<Yoga />}
            />
            <Detail
                title="メディシンボール"
                point="100"
                date="2023/01/01"
                time="30"
                icon={<Ball />}
            />
            <Detail
                title="カジノ"
                point="100"
                date="2023/01/01"
                time="30"
                icon={<Casino />}
            />
            <Detail
                title="カジノ"
                point="100"
                date="2023/01/01"
                time="30"
                icon={<Casino />}
            />
            <Detail
                title="カジノ"
                point="100"
                date="2023/01/01"
                time="30"
                icon={<Casino />}
            />
            <Detail
                title="カジノ"
                point="100"
                date="2023/01/01"
                time="30"
                icon={<Casino />}
            />
            <Detail
                title="カジノ"
                point="100"
                date="2023/01/01"
                time="30"
                icon={<Casino />}
            />
            <Detail
                title="カジノ"
                point="100"
                date="2023/01/01"
                time="30"
                icon={<Casino />}
            />
        </div>
    );
}

export default History;