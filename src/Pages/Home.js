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

// export class Home extends React.Component {

//     render(){
//         return(
//             <div>
//                 Here is the home page
//             </div>
//         )
//     }

// }
export default BasicExample;