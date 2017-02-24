import {Router, Route, IndexRoute, Link, hashHistory} from 'react-router';
var React = require('react');
var ReactDOM = require('react-dom');
var NavBar = require('./NavBar.jsx');
var HomePage = require('./HomePage.jsx');
var ProjectsPage = require('./ProjectsPage.jsx');
var ContactPage = require('./ContactPage.jsx');

class App extends React.Component {
  render () {
    return (
      <div className="App">
        {this.props.children}
      </div>
    )
  }
}

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage}/>
      <Route path="Home" component={HomePage}/>
      <Route path="Contact" component={ContactPage}/>
      <Route path="Projects" component={ProjectsPage}/>
    </Route>
  </Router>
  ), document.getElementById('app'));