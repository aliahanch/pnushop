import React from 'react';
import PropTypes from 'prop-types';

class Delay extends React.Component {

  constructor(props) {
    super(props);
    this.state = {hidden : false};
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({hidden: true});
    }, this.props.waitBeforeShow);
  }

  render() {
    return this.state.hidden ? '' : this.props.children;
  }
}

Delay.propTypes = {
  waitBeforeShow: PropTypes.number.isRequired
};

export default Delay;