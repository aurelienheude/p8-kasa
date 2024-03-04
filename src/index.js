import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/style.scss';
import {Footer} from './components/layouts/footer/footer.jsx';
import {Nav} from './components/layouts/nav/nav.jsx';/*
import {Header} from './components/layouts/header/header.jsx';
import {AboutSelection} from './components/pages/about/about.jsx';
import {Error404} from './components/pages/404/error.jsx';*/
import { Banner } from './components/banner/banner.jsx';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Nav />
    <Banner />
    {/*<AboutSelection />
    <Error404 />*/}
    <Footer />
  </React.StrictMode>
);