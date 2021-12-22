import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import LinearConvolution from './components/LinearConvolution';
import CircularConvolution from './components/CircularConvolution';
import App from './App';
import Auto from './components/Auto';

const Routing = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} ></Route>
                    <Route path="/lc" element={<LinearConvolution />} ></Route>
                    <Route path="/cc" element={<CircularConvolution />} ></Route>
                    <Route path="/cross" element={<App />} ></Route>
                    <Route path="/auto" element={<Auto />} ></Route>
                </Routes>
            </div>
        </Router>
    )
}

export default Routing;
