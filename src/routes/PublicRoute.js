


import React from 'react'
import LandingPage from '../components/landing/LandingPage';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const PublicRoute = () => {
  return (
    <div>
        <Router>

            <Route exact path='/' component={LandingPage} />

        </Router>

    </div>
  )
}

export default PublicRoute