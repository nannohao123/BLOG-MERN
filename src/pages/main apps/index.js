import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CreateBlog from '../CreateBlog';
import DetailBlog from '../DetailBlog';
import Homepage from '../Home';
import { Footer, Header } from '../../components';
import './mainApp.scss'

function MainApp() {
    return (
        <div className='main-app-wrapper'>
            <div className='header-wrapper'>
                <Header />
            </div>
            <div className='content-wrapper'>
                <Routes>
                    <Route path="/create-blog" element={<CreateBlog />} />
                    <Route path="/detail-blog" element={<DetailBlog />} />
                    <Route path="/" element={<Homepage />} />
                </Routes>
            </div>
            <div className='footer-wrapper'>
                <Footer />
            </div>
        </div>
    );
}

export default MainApp;
