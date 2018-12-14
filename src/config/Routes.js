import React, {Component, Fragment} from 'react';
import { Route } from "react-router-dom";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import ProjectsPage from "../Pages/ProjectsPage";
import Resume from '../Pages/Resume';
import me from '../Media/KissellFamily2018(71of84).JPG'
export default class extends Component {
    render() {
        return (
            <Fragment>
                <Route exact path="/" component={Home} />
                <Route path="/About" component={About} />
                <Route path="/Contact" component={Contact}/>
                <Route path="/ProjectsPage" component={ProjectsPage}/>
                <Route path='/Resume' component={Resume}/>
            </Fragment>
        )
    }
}

const Home = () => (
    <div>
        <h2>Hello! My name is Nicole Kissell. Welcome to my site.</h2>
        <img src={me} alt="" width="100%" height='100%'/>
    </div>
);