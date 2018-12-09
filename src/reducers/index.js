import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const auth = (state = {}, action) => {
    switch(action.type){ 
        case 'CREATE_USER':
        return {...state, authenticated: action.token}
        case 'ERROR':
        return {...state, error: action.error}
        case 'SIGNOUT':
        return {...state, authenticated: ''}
        case 'SIGNINUSER':
        return {...state, authenticated: action.token}
        default:
        return state;
    }
}
export default combineReducers({
    auth,
    form: formReducer
});