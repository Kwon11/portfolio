var React = require('react');

class HomePage extends React.Component {

  render () {
    return (
        <div className="CenterDisplay">
          <img src="Chan Kwon.jpg" className="HomePageImage"></img>
          <div className="HomePageText">
            <div className="CenterDisplayTitle">Chan Kwon </div>
            <div className="CenterDisplayText">I am a web developer. I am a web developer. I am a web developer. I am a web developer. I am a web developer. I am a web developer. I am a web developer. I am a web developer. I am a web developer. I am a web developer. I am a web developer. </div>
          </div>
        </div>
      )
  }

}

module.exports = HomePage;