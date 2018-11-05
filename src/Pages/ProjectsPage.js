import React from 'react'
import VerticalLinearStepper from '../TimeLineStepper'
// import TimeLineV2 from '../TimeLineV2'
export default class ProjectsPage extends React.Component {

    render(){
        return(
            <div>
                More Projects can be found at my GitHub page.
                {/* <i class='fab fa-github' style='font-size:36px'></i> */}
                <VerticalLinearStepper></VerticalLinearStepper>
                {/* <TimeLineV2></TimeLineV2> */}
            </div>
        )
    }

}