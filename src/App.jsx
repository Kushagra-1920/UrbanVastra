import React from "react";
import { Route,Routes } from 'react-router-dom'

import CustomRoutes from "./Routers/CustomRoutes.jsx";

const App = () => {
  return (

    < >

      <Routes>
          <Route path="/*" element={<CustomRoutes/>} /> 
      </Routes>

    
    </>
  );
};

export default App;
