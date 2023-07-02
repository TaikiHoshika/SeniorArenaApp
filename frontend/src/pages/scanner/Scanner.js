import { useState } from "react";
import { useZxing } from "react-zxing";

import style from "./Scanner.module.css";

const Scanner = () => {
    const [result, setResult] = useState("");
    const { ref } = useZxing({
        onResult(result) {
            setResult(result.getText());
        },
    });

    return (
        <div className={style.scanner}>
            <video ref={ref}/>
            <span>{result}</span>
        </div>

    );
};

export default Scanner;