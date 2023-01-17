
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import AboutMe from './Component/AboutMe';
import Skills from './Component/Skills';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import Contact from './Component/Contact';
import Intro from './Component/Intro';

function App() { 
  return (
   
    <>
      
   <div className='App'>

   
      <Router>
      
      
        <Routes>
      
       <Route path="/" element={<><Navbar/> <Intro/></>}/>
      
      
      <Route path="/Home" element={<Home/>}  />

        <Route path="/AboutMe" element={<AboutMe/>} />

        <Route path="/Skills" element={<Skills/>}   /> 

        <Route path="/Contact" element={<Contact/>}  />

        </Routes>
        

      </Router>
    </div>

    
    </>
  );
}
export default App;
