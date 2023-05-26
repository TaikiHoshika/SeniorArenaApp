import { useState } from "react";
import axios from "axios";

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Checkbox from '@mui/material/Checkbox';
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';

import './login.css';

const Login = () => {
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);
    const [error, setError] = useState(false);

    //const [Login, setLogin] = useState(false);

    const toggleRemember = () => {
        setRemember(!remember);
    };

    const onLogin = async () => {
        if(userId !== "" && password !== "" ) {
            await fetch("http://localhost:3030/api/login/", {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "http://localhost:3030"
                },
                body: JSON.stringify({userId: "root", password: "P@ssw0rd"})
              })
        } else {
            setError(true);
        }
    };

    return (
        <div className="background">
            <div className="login">
                <div className="content-box">
                    <h1 style={{marginBottom: "20px"}}>👴 Senior Arena 👵</h1>
                    <div className="login-frame">
                        <div className="textfield">
                            <TextField
                                id="userId"
                                type="email"
                                label="Username"
                                placeholder="Username"
                                onChange={(e) => setUserId(e.target.value)}
                                margin="normal"
                            />
                            <TextField
                                id="password"
                                label="Password"
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                                margin="normal"
                            />
                            <Link href="#" underline="none">
                                Forgot your password?
                            </Link>
                        </div>
                        <div className="buttons">
                            <div className="remember-me">
                                <Checkbox onChange={toggleRemember}/>
                                <span>Remember Me</span>
                            </div>
                            <div className="login-button">
                                <Button
                                    variant="contained"
                                    onClick={onLogin}
                                >
                                    Login
                                </Button>
                            </div>
                        </div>
                    </div>
                    <span className="errorMargin"></span>
                    <Collapse in={error}>
                        <Alert
                            severity="error"
                            onClose={() => {setError(false)}}
                        >
                            Invalid Username of Password
                        </Alert>
                    </Collapse>
                </div>
            </div>
        </div>
    );
}

export default Login;