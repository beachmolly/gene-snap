import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import GamePage from "./pages/GamePage";
import GeneLibraryPage from "./pages/GeneLibraryPage";
import Navbar from "./components/Navbar";

function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/games" component={GamePage} />
                <Route path="/gene-library" component={GeneLibraryPage} />
            </Switch>
        </Router>
    );
}

export default App;
