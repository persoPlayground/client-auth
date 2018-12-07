import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const auth = (state = {}, action) => { console.log(action)
    switch(action.type){ 
        case 'CREATE_USER':
        console.log('flwejhfkewk')
        return {...state, authenticated: action.token}
        default:
        return state;
    }
}
export default combineReducers({
    auth,
    form: formReducer
});