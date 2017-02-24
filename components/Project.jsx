var React = require('react');

class Project extends React.Component {

  constructor(props) {
    super(props);
  }

  handleClick (value) {
    this.props.clickHandler(value)
  }

  render () {
    return (
      <div className="Project" value={this.props.value} onClick={() => this.handleClick(this.props.value)}>
      {this.props.value}
      </div>
    )
  }


}

module.exports = Project;