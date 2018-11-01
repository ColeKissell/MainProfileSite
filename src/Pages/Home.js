import React from 'react'

import { BrowserRouter as Router } from "react-router-dom";
import CustomNav from '../config/CustomNav';

const BasicExample = () => (
  <Router>
    <div>
      <CustomNav/>
    </div>
  </Router>
);

export default BasicExample;