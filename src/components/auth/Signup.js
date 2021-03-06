import React, { Component } from 'react';
import {compose} from 'redux';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { createUser } from '../../actions';

class Signup extends Component {

    handleFormSubmit =  fileds => {
       this.props.createUser(fileds, () => {
           this.props.history.push('/message');
       });
    }
    render() {
        const { handleSubmit } = this.props; //rx form
        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit)}>
                <fieldset>
                    <Field 
                    name='email'
                    type='text'
                    component='input'
                    placeholder='email'
                    />
                    <Field 
                    name='password'
                    type='password'
                    component='input'
                    placeholder='password'
                    />
                    <button>Signup</button>
                    <div>{ this.props.error}</div>
                </fieldset>
            </form>
        )
    }
}
Signup= connect(({ auth: {error} }) => ( { error }), {createUser})(Signup);
export default reduxForm({ form: 'signup' })(Signup);
// export default compose (
//     connect(null, {createUser}),
//     eduxForm({ form: 'signup' })
// )(Signup);
