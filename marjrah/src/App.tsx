import React from 'react';
import './App.css';
import Navbar from "./components/navbar";
import PageRouter from "./utils/routes";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
        <PageRouter/>
        <Footer/>
    </div>
  );
}

export default App;
