import React, {Component, Fragment} from 'react';
import { Route } from "react-router-dom";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import ProjectsPage from "../Pages/ProjectsPage";
// import Home from "../Pages/Home"
import Resume from '../Pages/Resume';
// import { Button } from '@material-ui/core';
import './homePic.css'
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
    <div css="mainPage">
        <h2>Hello! My name is Nicole Kissell. Welcome to my site.</h2>
    </div>
);