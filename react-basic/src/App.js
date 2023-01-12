import React, {useState, useEffect, useRef, useContext, createContext, Children} from 'react';
import {BrowserRouter as Router, Routes, Route, Link, Outlet, useParams} from "react-router-dom";
import logo from './logo.svg';

import Home from './components/Home';
import Intro from './components/Intro';
import Beers from './components/Beers';
import JSX from './components/JSX';

export default App;

function App() {

  return (
    <Router>
      <p>
        <Link to="/">Home</Link>
      </p>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="intro" element={<Intro />} />
        <Route path="jsx" element={<JSX />} />
      </Routes>
    </Router>
  )
}

