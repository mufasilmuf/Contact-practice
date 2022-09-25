import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Home from "./pages/Home";
import Add from "./pages/Add";

const contacts = [
    {
        id: "1",
        name: "Mohamed",
        phone: "9095042785"
    },
    {
        id: "2",
        name: "Swetha",
        phone: "2343243264"
    },
    {
        id: "3",
        name: "Mufeeth",
        phone: "94242342785"
    },
    {
        id: "4",
        name: "Mohamed",
        phone: "2343243264"
    }
];

const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home contact={contacts} />} />
                <Route path='/add' element={<Add contact={contacts} />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routers

// const arr = [1, 2, 3, 4, 5];

// function remove(arr, n) {
//     const result = arr.filter((val) => { return val != n })
//     return result
// }

// console.log(remove(arr, 3))