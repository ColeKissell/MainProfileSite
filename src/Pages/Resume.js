import React from 'react';
// import ReactDOM from 'react-dom';


class Resume extends React.Component {
    /* Put in an object tag to import the pdf. You need to put the resume pdf in the project files  */
    render(){
        return(
            <div>
                <p>Resume coming soon.</p>
                <object 
                    id="resumePdf"
                    type="application/pdf"
                    data="../../Resume.pdf"
                    width="100%"
                    height="300px"
                >
                </object>
            </div>

        )
        
    }

}

export default Resume;