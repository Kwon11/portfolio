var React = require('react');
var NavBar = require('./NavBar.jsx');
var ContactBar = require('./ContactBar.jsx');

class HomePage extends React.Component {

  render () {
    return (
        <div className="CenterDisplay">
          <div className="LeftSideDisplay">
            <NavBar />
            <img src="logo.svg" className="LeftSideTitle"></img>
            <div className="LeftSideContent">
            <div className="HomeText">I am a web developer. I am a web developer. I am a web developer. I am a web developer. I am a web developer. I am a web developer. I am a web developer. I am a web developer. I am a web developer. I am a web developers. I am a web developer. </div>
            </div>
            <ContactBar/>
          </div>
          <div className="RightSideDisplay">
            <img src="Chan Kwon.jpg" className="RightSideImage"></img>
          </div>
        </div>
      )
  }

}

module.exports = HomePage;