
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState} from 'react';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light'); // Wheather dark mode enabled or not
  const [alert, setAlert] = useState(null); 


  const showAlert = (message, type) => {
  setAlert({
  msg: message,
  type: type
  })
  }

  setTimeout(() => {
    setAlert(null);
  }, 3000);

  const toggleMode =() =>{
   if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor ='#030522';
    showAlert("Dark mode has been enable","success")
    document.title ='TextUtils -Dark Mode';
  }
   else{
    setMode('light');
    document.body.style.backgroundColor ='white';
    showAlert("light mode has been enable","success")
    document.title ='TextUtils -Light Mode';
   }
   }

  return (
 <>
  <Router>
  <Navbar title="TextConverter" abouttext="About Us" mode={mode} toggleMode={toggleMode}/>
     {/* <Navbar/> */}
     <Alert alert={alert}/>
     <div className="container my-4">
     <Switch>
          <Route path="/about">
            <About  mode={mode}/>
          </Route>
          <Route path="/">
          <TextForm showAlert={showAlert} heading ="Enter the text to analyze" mode={mode}/>
          </Route>
        </Switch>
     </div>
     </Router>
 </>
  );
}

export default App;
