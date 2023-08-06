import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Notes from './components/Notes';
import Blog from './components/Blog';
import Home from './components/Home';
import './style.css';


import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';

function App() {
  return (

    <Router>
      <Header/>
      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='blog' element={<Blog/>}/>
        <Route path='notes' element={<Notes/>}/>

      </Routes>
      <Footer/>
    </Router>

   
  )
}

export default App;
