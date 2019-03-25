import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MainRoutes from "./routes/mainRoutes"
function App() {
  
  return (
    <MainRoutes/>
  );
}

export default App;
