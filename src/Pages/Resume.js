import React from 'react';
import resume from '../Media/ResumeV3.pdf'

class Resume extends React.Component {
    render(){
        return(
            <div>
                <object 
                    id="resumePdf"
                    type="application/pdf"
                    data={resume}
                    width="100%"
                    height='700'
                >
                </object>
            </div>
        )
    }
}

export default Resume;
