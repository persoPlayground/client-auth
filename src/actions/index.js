import axios from 'axios';

export const createUser = ({ email, password }, cb) => async dispatch => {
    try {

        const response = await axios.post('http://localhost:3001/signup', {
        email,
        password
        });
        const { token } = response.data;
        dispatch({
          type: 'CREATE_USER',
          token  
        });
        localStorage.setItem('token', token);
        cb();
    } catch (error) {
        dispatch({
            type: 'ERROR',
            error: 'ERROR'
          });
    }
}

export const singnoutUser = () => ({
    type: 'SIGNOUT'
});

export const signInUser = ({ email, password }, cb ) => async dispatch => {
    try {
        const response = await axios.post('http://localhost:3001/signin', {
        email,
        password
        });
        const { token } = response.data;
        dispatch({
          type: 'SIGNINUSER',
          token  
        });
        localStorage.setItem('token', token);
        cb();
    } catch (error) {
        dispatch({
            type: 'ERROR',
            error: 'ERROR'
          });
    }
};

