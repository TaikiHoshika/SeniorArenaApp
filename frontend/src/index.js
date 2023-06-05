import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CookiesProvider } from "react-cookie";
import reportWebVitals from './debug/reportWebVitals';

import Login from './pages/login/Login';
import Dashboard from './pages/dashboard/Dashboard';
import Home from './pages/home/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <CookiesProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navigate to="/login" />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/home" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </CookiesProvider>
    </React.StrictMode>
);

reportWebVitals();