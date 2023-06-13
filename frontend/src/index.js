import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CookiesProvider } from "react-cookie";
import reportWebVitals from './debug/reportWebVitals';

import Base from './pages/Base';
import Login from './pages/login/Login';
import Dashboard from './pages/dashboard/Dashboard';
import Home from './pages/home/Home';
import Reserve from './pages/reserve/Reserve';

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <CookiesProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<Base />}>
                        <Route index element={<Dashboard />} />
                        <Route path="home" element={<Home />} />
                        <Route path="reserve" element={<Reserve />} />
                        <Route path="history" element={<h1>りれき</h1>} />
                        <Route path="profile" element={<h1>ぷろふぃーる</h1>} />
                    </Route>
                    <Route path="*" element={<h1>Page Not Found</h1>} />
                </Routes>
            </BrowserRouter>
        </CookiesProvider>
    </React.StrictMode>
);

reportWebVitals();