import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Checkbox from '@mui/material/Checkbox';
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';

import './Login.module.css';

const Login = () => {

    useEffect(() => {
        checkSession();
    }, []);

    const [email, setemail] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);
    const [error, setError] = useState(false);

    const [cookies, setCookie, removeCookie] = useCookies(["token"]);
    const navigate = useNavigate();

    const toggleRemember = () => {
        setRemember(!remember);
    };

    const onLogin = async () => {
        if(email !== "" && password !== "" ) {
            const authStatus = await axios.post(
                "http://localhost:3030/api/auth/login/",
                {email: email, password: password}
            );
            const data = JSON.parse(JSON.stringify(authStatus.data));
            if(data["isAuthenticated"]) {
                setCookie("token", data["token"])
                navigate("/dashboard");
            } else {
                setError(true);
            }
        } else {
            setError(true);
        }
    };

    const checkSession = async () => {
        const token = cookies.token
        const authStatus = await axios.post(
            "http://localhost:3030/api/auth/token/",
            {token: token}
        );
        const data = JSON.parse(JSON.stringify(authStatus.data));
        if(data["isAuthenticated"]) {
            navigate("/dashboard");
        }
    }

    return (
        <div className="background">
            <div className="login">
                <div className="content-box">
                    <h1 style={{marginBottom: "20px"}}>👴 Senior Arena 👵</h1>
                    <div className="login-frame">
                        <div className="textfield">
                            <TextField
                                id="email"
                                type="email"
                                label="Username"
                                placeholder="Username"
                                onChange={(e) => setemail(e.target.value)}
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
                            Invalid Username or Password
                        </Alert>
                    </Collapse>
                </div>
            </div>
        </div>
    );
}

export default Login;