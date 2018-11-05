import React from 'react'
import VerticalLinearStepper from '../Components/TimeLineStepper'
// import TimeLineV2 from '../TimeLineV2'
// import {  } from "react-icons/fa";

export default class ProjectsPage extends React.Component {

    render(){
        return(
            <div>
                More Projects can be found at my GitHub page.
                <a ></a>
                {/* <i class='fab fa-github' style='font-size:36px'></i> */}
                <VerticalLinearStepper></VerticalLinearStepper>
                {/* <TimeLineV2></TimeLineV2> */}
            </div>
        )
    }

}