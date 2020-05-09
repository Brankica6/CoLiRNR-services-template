import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Common/Navbar.js';
import Home from './components/Pages/Home.js';
import About from './components/Pages/About.js';
import Contact from './components/Pages/Contact.js';
import Blog from './components/Pages/Blog.js';
import Post from './components/Pages/Post.js';


class App extends Component {
  render(){
    return (
      <div>
        <Navbar/>
        <Switch>
          <Route path='/' exact={true} component={Home} />
          <Route path='/about' component={About} />
          <Route path='/blog' component={Blog} />
          <Route path='/post/:slug' component={Post} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </div>
    );
  }
}

export default App;
