import React, {Component, Fragment} from 'react'
import { Route } from "react-router-dom";
import About from "../Pages/About";
import Contact from "../Pages/Contact"
import ProjectsPage from "../Pages/ProjectsPage"
// import Home from "../Pages/Home"

export default class extends Component {
    render() {
        return (
            <Fragment>
                <Route exact path="/" component={Home} />
                <Route path="/About" component={About} />
                <Route path="/Contact" component={Contact}/>
                <Route path="/ProjectsPage" component={ProjectsPage}/>

            </Fragment>
        )
    }
}

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
);