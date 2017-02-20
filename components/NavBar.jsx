var React = require('react');
var NavBarLink = require('./NavBarLink.jsx')
class NavBar extends React.Component {


  render () {
    return (
      <nav className="NavBar">
        <NavBarLink value="Home"/>
        <NavBarLink value="Resume"/>
        <NavBarLink value="Projects"/>
        <NavBarLink value="Personal"/>
      </nav>
    )
  }
}

module.exports = NavBar;