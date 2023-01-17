import React, {useState, useEffect, useRef, useContext, createContext, Children} from 'react';
import {BrowserRouter as Router, Routes, Route, Link, Outlet, useParams} from "react-router-dom";

import Home from './components/Home';
import Intro from './components/Intro';
import Beers from './components/Beers';
import JSX from './components/JSX';
import Components from './components/Components';
import Props from './components/Props';
import Event from './components/Event';
import RouterComponent from './components/Router';
import Examples from './components/Examples';
import Form from './components/Form';
import FetchData from './components/FetchData';
import ManageDOM from './components/ManageDOM';

export default function App() {

  return (
    <Router>
      <p>
        <Link to="/">Home</Link>
      </p>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="intro" element={<Intro />} />
        <Route path="jsx" element={<JSX />} />
        <Route path="components" element={<Components />} />
        <Route path="props" element={<Props />} />
        <Route path="event" element={<Event />} />
        <Route path="dom" element={<ManageDOM />} />
        <Route path="Form" element={<Form />} />
        <Route path="router" element={<RouterComponent />} />
        <Route path="fetch" element={<FetchData />} />
        <Route path="examples" element={<Examples />} />
      </Routes>
    </Router>
  )
}

