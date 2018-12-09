import React, { Component } from 'react';
import { connect } from 'react-redux';

export default WrappedComponent => {

    class RequireAuth extends Component {

        componentDidMount () {
            this.checkToken();
        }
        componentDidUpdate () {
            this.checkToken();
        }

        checkToken () {
            if(!this.props.authenticated) {
                this.props.history.push('/');
            }
        }

        render() {
            return(
                <WrappedComponent { ... this.props } />
            )
        }
    }
    return connect(({ auth: { authenticated }}) => ( { authenticated }))(RequireAuth);
}
