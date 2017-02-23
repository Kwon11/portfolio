import {Router, Route, IndexRoute, Link, hashHistory} from 'react-router';
var React = require('react');
var ReactDOM = require('react-dom');
var NavBar = require('./NavBar.jsx');
var HomePage = require('./HomePage.jsx');
var ResumePage = require('./ResumePage.jsx');
var ProjectsPage = require('./ProjectsPage.jsx');
var PersonalPage = require('./PersonalPage.jsx');


class App extends React.Component {
  render () {
    return (
      <div className="App">
        <NavBar />
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
      <Route path="Resume" component={ResumePage}/>
      <Route path="Projects" component={ProjectsPage}/>
      <Route path="Personal" component={PersonalPage}/>
    </Route>
  </Router>
  ), document.getElementById('app'));