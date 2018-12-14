import React from 'react';
// import ReactDOM from 'react-dom';
import resume from '../Media/resumeV2Pdf.pdf'

class Resume extends React.Component {
    /* Put in an object tag to import the pdf. You need to put the resume pdf in the project files  */
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