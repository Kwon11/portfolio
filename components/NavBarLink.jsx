var React = require('react');
import {Link} from 'react-router';

class NavBarLink extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <Link to={this.props.value} className="NavBarLink">
       {this.props.value}
      </Link>
    )
  }
}

module.exports = NavBarLink;