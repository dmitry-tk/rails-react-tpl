import React from 'react'

import Header from './header.jsx'
import Footer from './footer.jsx'

import TodoApp from './hello_react.jsx'


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
                <TodoApp name="React" />
                <Footer/>
            </div>
        );
    }
}
export default App;