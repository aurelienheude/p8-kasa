import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/style.scss';
import { Navigate, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import About from './pages/about/about';
import Error from './pages/error/error';
import Apartment from './pages/apartment/apartment';

const root = createRoot(document.getElementById('app'));

root.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Navigate to="/404" />} />
                <Route path="/404" element={<Error />} />
                <Route path="/apartment/:id" element={<Apartment />} />
            </Routes>
        </Router>
    </React.StrictMode>
);