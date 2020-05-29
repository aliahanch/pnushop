import React from 'react';
import PropTypes from 'prop-types';

class DelayR extends React.Component {

    constructor(props) {
        super(props);
        this.state = {hidden : true};
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({hidden: false});
        }, this.props.waitBeforeShow);
    }

    render() {
        return this.state.hidden ? '' : this.props.children;
    }
}

DelayR.propTypes = {
    waitBeforeShow: PropTypes.number.isRequired
};

export default DelayR;