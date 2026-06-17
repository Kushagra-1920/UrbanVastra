import React from "react";
import { Route,Routes } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'


import CustomRoutes from "./Routers/CustomRoutes.jsx";

const App = () => {
  return (

    < >

      {/* <Routes>
          <Route path="/*" element={<CustomRoutes/>} /> 
      </Routes> */}
      <HomePage/>

    
    </>
  );
};

export default App;
