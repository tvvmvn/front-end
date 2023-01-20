import React, {useState, useEffect, useRef, useContext, createContext, Children} from 'react';
import {BrowserRouter as Router, Routes, Route, Link, Outlet, useParams} from "react-router-dom";

import Home from './components/Home';
import Intro from './components/Intro';
import JSX from './components/JSX';
import Components from './components/Components';
import Props from './components/Props';
import Event from './components/Event';
import MyRouter from './components/MyRouter';
import FetchData from './components/FetchData';
import ManageDOM from './components/ManageDOM';
import NotFound from './components/NotFound';
import TodoApp from './components/TodoApp';

export default function App() {

  return (
    <Router>
      <nav style={{backgroundColor: '#ddd', padding: '0.5rem'}}>
        <Link to="/">Home</Link>
      </nav>

      <Routes>
        <Route index element={<Home />} />
        <Route path="intro" element={<Intro />} />
        <Route path="jsx" element={<JSX />} />
        <Route path="components" element={<Components />} />
        <Route path="props" element={<Props />} />
        <Route path="event" element={<Event />} />
        <Route path="dom" element={<ManageDOM />} />
        <Route path="router/*" element={<MyRouter />} />
        <Route path="fetch" element={<FetchData />} />
        <Route path="todo" element={<TodoApp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

