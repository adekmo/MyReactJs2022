import React from 'react'
// react router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AboutRoute from './AboutRoute'
import ErrorRoite from './ErrorRoite'
import HomeRoute from './HomeRoute'
import NavbarRoute from './NavbarRoute'
import PeopleRoute from './PeopleRoute'
import PersonRoute from './PersonRoute'

const IndexRoute = () => {
    return (
        <Router>
            <h2>React Router</h2>
            <NavbarRoute />
            <Switch>
                <Route exact path="/">
                    <HomeRoute />
                </Route>
                <Route path="/about">
                    <AboutRoute />
                </Route>
                <Route path="/people">
                    <PeopleRoute />
                </Route>
                {/* bagian :id, namanya bebas, contoh :apaaja */}
                <Route path="/person/:id" children={<PersonRoute />}></Route>
                <Route path="/*">
                    <ErrorRoite />
                </Route>
            </Switch>
        </Router>
    )
}

export default IndexRoute
