import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

/*
* @ All pages Import
*/
import Admin from './admin/Admin';
import Home from './pages/HomeTwo'
import Service from './pages/Service'
import ServiceDetails from "./pages/ServiceDetails";
import Blog from './pages/BlogGridWithoutSidebar';
import BlogDetailsPage from "./pages/BlogDetails";
import Team from "./pages/Team";
import TeamDetails from "./pages/TeamDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error404 from "./pages/Error404";
import ScrollToTop from "./helpers/ScrollToTop";

const App = () => {
    return (
        <Router>
            <ScrollToTop>
                <Switch>
      
                    <Route exact path={'/'} component={Home}/>
                    <Route exact path={'/admin'} component={Admin}/>
                    <Route exact path={'/services'} component={Service}/>

                    <Route path={'/service/:serviceID'} component={ServiceDetails}/>
                 
                    <Route exact path={"/blog"}
                           component={Blog}/>

                    <Route path={"/blog/:blogID"} component={BlogDetailsPage}/>
                    <Route exact path={"/team"} component={Team}/>
                    <Route path={"/team-member/:teamID"} component={TeamDetails}/>

                    <Route exact path={"/about"} component={About}/>
                    <Route exact path={"/contact"} component={Contact}/>
                    
                    <Route exact component={Error404}/>
                </Switch>
            </ScrollToTop>
        </Router>
    );
};

export default App;