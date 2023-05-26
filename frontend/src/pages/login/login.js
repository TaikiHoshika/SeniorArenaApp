import { useState } from "react";

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Checkbox from '@mui/material/Checkbox';

import './login.css';

const Login = () => {
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);

    const toggleRemember = () => {
        setRemember(!remember);
    };

    const onLogin = () => {
        console.log(userId);
        console.log(password);
        console.log(remember);
    };

    return (
        <div className="background">
            <div className="login">
                <div className="content-box">
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
                            <Button variant="contained" onClick={onLogin}>
                                Login
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;