import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Home from "./pages/Home";
import Add from "./pages/Add";

const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/add' element={<Add />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routers