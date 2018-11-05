import React from 'react'
import VerticalLinearStepper from '../Components/TimeLineStepper'
// import TimeLineV2 from '../TimeLineV2'


export default class ProjectsPage extends React.Component {

    render(){
        return(
            <div>
                More Projects can be found at my GitHub page.
                <VerticalLinearStepper></VerticalLinearStepper>
                {/* <TimeLineV2></TimeLineV2> */}
            </div>
        )
    }

}