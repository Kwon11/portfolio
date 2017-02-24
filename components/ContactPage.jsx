var React = require('react');
var NavBar = require('./NavBar.jsx');
var ContactBar = require('./ContactBar.jsx');

class ContactPage extends React.Component {

  render () {
    return (
        <div className="CenterDisplay">
          <div className="LeftSideDisplay">
            <NavBar />
            <img src="logo.svg" className="LeftSideTitle"></img>
            <div className="LeftSideContent">

              <img href="www.linkedin.com/in/kwon11" src="linkedInLogo.png" className="LinkedInLogo"></img>
              <img src="GitHubLogo.png" className="GitHubLogo"></img>
              <img src="AngelListLogo.png" className="AngelListLogo"></img>
              <div>ChanTheManCan@Gmail.Com</div>

            </div>
            <ContactBar />
          </div>
          <div className="RightSideDisplay">
            <img src="Chan Kwon.jpg" className="RightSideImage"></img>
          </div>
        </div>
    )
  }

}

module.exports = ContactPage;