var React = require('react');
var NavBarLink = require('./NavBarLink.jsx')
class NavBar extends React.Component {


  render () {
    return (
      <nav className="NavBar">
        <NavBarLink value="Home"/>
        <NavBarLink value="Projects"/>
        <NavBarLink value="Contact"/>
      </nav>
    )
  }
}

module.exports = NavBar;