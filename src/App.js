import React from 'react'
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavbarComponent from './components/NavbarComponent/NavbarComponent'
import FooterComponent from './components/FooterComponent/FooterComponent'
import ScriptPage from './components/ScriptPage/Scripts';
import DesignPage from './components/DesignPage/DesignComponent';
import PhotographyPage from './components/PhotoGraphyPage/PhotographyPage';
import SimpleReactLightbox from "simple-react-lightbox";
import HomePage from './components/HomePage/HomePage';

function App() {
    return (
        <SimpleReactLightbox>
            <Router>
                <NavbarComponent />
                <Switch >
                    <Route path="/" exact component={HomePage} />
                    <Route path="/script" exact component={ScriptPage} />
                    <Route path="/designs" exact component={DesignPage} />
                    <Route path="/photographs" exact component={PhotographyPage} />
                </Switch>
                <FooterComponent />
            </Router>
        </SimpleReactLightbox>

    );
}


export default App;
