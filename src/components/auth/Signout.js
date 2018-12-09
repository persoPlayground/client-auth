import React, { Component } from 'react';
import { connect } from 'react-redux';
import { singnoutUser } from '../../actions';

class  Signout extends Component {

    componentWillMount() {
        localStorage.removeItem('token');
        this.props.singnoutUser();
    }
    render() {
        return <div>Signed out</div>
    }
}

export default connect(null, { singnoutUser })(Signout);