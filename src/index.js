import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/style.scss';
import {Footer} from './components/layouts/footer/footer.jsx';
import {Nav} from './components/layouts/nav/nav.jsx';
import {Header} from './components/layouts/header/header.jsx';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Nav />
    <Header />
    <Footer />
  </React.StrictMode>
);