import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
          <Navbar/>
          <Routes>
            <Route exact key="general" path='/general' element={<News pageSize={8} country="in" category="general"/>} />
            <Route exact key="business" path='/business' element={<News pageSize={8} country="in" category="business"/>} />
            <Route exact key="entertainment" path='/entertainment' element={<News pageSize={8} country="in" category="entertainment"/>} />
            <Route exact key="health" path='/health' element={<News pageSize={8} country="in" category="health"/>} />
            <Route exact key="science" path='/science' element={<News pageSize={8} country="in" category="science"/>} />
            <Route exact key="sports" path='/sports' element={<News pageSize={8} country="in" category="sports"/>} />
            <Route exact key="technology" path='/technology' element={<News pageSize={8} country="in" category="technology"/>} />
          </Routes>
      </Router>
    )
  }
}