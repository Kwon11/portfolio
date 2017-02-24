var React = require('react');
var Project = require('./Project.jsx');
var NavBar = require('./NavBar.jsx');
var ContactBar = require('./ContactBar.jsx');

class ProjectsPage extends React.Component {

  render () {
    return (
        <div className="CenterDisplay">
          <div className="LeftSideDisplay">
            <NavBar />
            <img src="logo.svg" className="LeftSideTitle"></img>
            <div className="LeftSideContent">
              <Project />
              <Project />
              <Project />
              <Project />
              </div>
            <ContactBar />
          </div>
          <div className="RightSideDisplay">
            <img src="ColorizemeSnap.JPG" className="RightSideImage"></img>
          </div>
        </div>
      )
  }
}

module.exports = ProjectsPage;