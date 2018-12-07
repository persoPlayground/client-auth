import axios from 'axios';

export const createUser = ({ email, password }) => async dispatch => {
    const token = await axios.post('http://localhost:3001/signup', {
    email,
    password
    });
    dispatch({
      type: 'CREATE_USER',
      token  
    })
}