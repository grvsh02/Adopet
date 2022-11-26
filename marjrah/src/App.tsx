import React from 'react';
import './App.css';
import Navbar from "./components/navbar";
import Aboutus from "./pages/aboutus";
import Login from "./pages/login";

function App() {
  return (
    <div className="App">
        <Navbar />
        <Aboutus />
    </div>
  );
}

export default App;
