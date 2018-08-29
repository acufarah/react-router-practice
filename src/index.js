import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

//Components
import Home from './components/home';
import Posts from './components/posts';
import Profile from './components/profile';

const App = () =>{
    return (
        <BrowserRouter>
            <div>
                <Route path ="/posts" component = {Posts}/>
                <Route path ="/profile" component = {Profile}/>
                <Route path ="/" component = {Home}/>
            </div>
        </BrowserRouter>
        );
    
};

ReactDOM.render(
    <App/>, document.querySelector('#root')
    
    );
    
    