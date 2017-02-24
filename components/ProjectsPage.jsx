var React = require('react');
var Project = require('./Project.jsx');
var NavBar = require('./NavBar.jsx');
var ContactBar = require('./ContactBar.jsx');

class ProjectsPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      current: "Chan Kwon"
    }
    this.onClickChange = this.onClickChange.bind(this);
  }

  onClickChange (value) {
    console.log('it calls this shit bitch', value);
    this.setState({
      current: value
    });
  }

  render () {
    return (
        <div className="CenterDisplay">
          <div className="LeftSideDisplay">
            <NavBar />
            <img src="logo.svg" className="LeftSideTitle"></img>
            <div className="LeftSideContent">
              <Project value="StackBear" clickHandler={this.onClickChange}/>
              <Project value="To-Do-Application" clickHandler={this.onClickChange}/>
              <Project value="Colorize" clickHandler={this.onClickChange}/>
              <Project value="Secret-Santa" clickHandler={this.onClickChange}/>
              </div>
            <ContactBar />
          </div>
          <div className="RightSideDisplay">
            <img src={this.state.current +".jpg"} className="RightSideImage"></img>
          </div>
        </div>
      )
  }
}

module.exports = ProjectsPage;