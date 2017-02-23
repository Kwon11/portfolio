var React = require('react');
var Project = require('./Project.jsx');

class ProjectsPage extends React.Component {

  render () {
    return (
        <div className="CenterDisplay">
          <Project />
          <Project />
          <Project />
          <Project />
        </div>
      )
  }
}

module.exports = ProjectsPage;