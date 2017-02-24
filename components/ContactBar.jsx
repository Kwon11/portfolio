var React = require('react');

class ContactBar extends React.Component {

  render () {
    return (
      <div className="ContactBar">
      <div>
       <img src="linkedInLogo.png" className="LinkedInLogo"></img>
      </div>
      <div>
       <img src="GitHubLogo.png" className="GitHubLogo"></img>
      </div>
      <div>
        <img src="AngelListLogo.png" className="AngelListLogo"></img>
      </div>
      <div>
        <img src="GmailLogo.png" className="GmailLogo"></img>
      </div>
      </div>
    )
  }

}

module.exports = ContactBar;