import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './styles/style.scss';

import Home from './pages/home';
import About from './pages/about';
import Error from './pages/error';
import Apartment from './pages/apartment';

import { LayoutContent } from './layouts/link';

const root = createRoot(document.getElementById('app'));

root.render(
    <React.StrictMode>
        <Router basename='/p8-kasa'>
            <Routes>
                <Route path="/" element={<LayoutContent><Home /></LayoutContent>} />
                <Route path="/about" element={<LayoutContent><About /></LayoutContent>} />
                <Route path="/apartment/:id" element={<LayoutContent><Apartment /></LayoutContent>} />
                <Route path="*" element={<LayoutContent><Error /></LayoutContent>} />
                <Route path="/404" element={<LayoutContent><Error /></LayoutContent>} />
            </Routes>
        </Router>
    </React.StrictMode>
);