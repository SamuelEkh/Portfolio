import React from 'react';
import DashBoard from './components/Dashboard';
import Header from './components/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

function App() {

  return (
    <Router>
      <main className="main-content">
        <Header />
        <DashBoard />
      </main>
    </Router>
  );
}

export default App;
