import React, { Component } from 'react'
// import axios from 'axios'
import Navbar from './Navbar'
import Home from './Home'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Create from './Create'
import BlogDetail from './BlogDetail'
import NotFound from './NotFound'

class App extends Component{

    render(){

        // const title = 'Welcome to the New Blog';
        // const likes = 69;
        return(
            <Router>
            <div className='app'>
                {/* <div>
                    <h1>{title}</h1>
                    <p>Like {likes} times</p>
                </div> */}
                <Navbar />
                <div className='content'>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/create">
                            <Create />
                        </Route>
                        <Route path="/blogs/:id">
                            <BlogDetail />
                        </Route>
                        <Route path="*">
                            <NotFound />
                        </Route>
                    
                    </Switch>
                </div>
            </div>
            </Router>
        )
    }
}

export default App;