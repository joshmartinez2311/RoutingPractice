import React from 'react';
import './App.css';
import {BrowserRouter,
Routes,
Route,
Link} from "react-router-dom";
import Home from './components/Home';
import ParamVariables from './components/ParamVariables';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Routing Practice</h1>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/:word" element={< ParamVariables/>} />
          <Route exact path="/:word/:textColor" element={<ParamVariables/>}/>
          <Route exact path="/:word/:textColor/:backgroundColor" element={<ParamVariables />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
