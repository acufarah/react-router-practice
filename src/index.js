import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

//Components
import Home from './components/home';
import Posts from './components/posts';
import Profile from './components/profile';

const App = () =>{
    return (
        <BrowserRouter>
            <div>
                <header>
                    <Link to='/'>Home</Link><br/>
                    <Link to='/posts'>Posts</Link><br/>
                    <Link to='/profile'>Profile</Link><br/>
                    <hr/>
                </header>
                <Route path ="/posts" exact component = {Posts}/>
                <Route path ="/profile" exact component = {Profile}/>
                <Route path ="/" exact component = {Home}/>
            </div>
        </BrowserRouter>
        );
    
};

ReactDOM.render(
    <App/>, document.querySelector('#root')
    
    );
    
    