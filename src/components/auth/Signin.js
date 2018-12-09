import React, { Component } from 'react';
import {compose} from 'redux';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { signInUser } from '../../actions';

class Signin extends Component {

    handleFormSubmit =  fileds => {
       this.props.signInUser(fileds, () => {
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
                    <button>Signin</button>
                    <div>{ this.props.error}</div>
                </fieldset>
            </form>
        )
    }
}
Signin= connect(({ auth: {error} }) => ( { error }), {signInUser})(Signin);
export default reduxForm({ form: 'signup' })(Signin);
// export default compose (
//     connect(null, {createUser}),
//     eduxForm({ form: 'signup' })
// )(Signup);
