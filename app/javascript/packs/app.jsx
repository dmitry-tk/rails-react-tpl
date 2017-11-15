import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from './header.jsx'
import Footer from './footer.jsx'

import TodoApp from './hello_react.jsx'
import Posts from './posts.jsx'
import Post from './post.jsx'


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path='/' component={Posts}/>
                    <Route path='/todo-app' component={TodoApp}/>
                    <Route path='/post/:id' component={Post}/>
                </Switch>
                <Footer/>
            </div>
        );
    }
}
export default App;