import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './components/App';
import Home from './components/Home';
import Signup from './components/auth/Signup';
import Message from './components/Message';
import Signout from './components/auth/Signout';
import Signint from './components/auth/Signin';

const authenticated =localStorage.getItem('token');
const store = createStore(rootReducer,{ auth: {authenticated}}, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
    <Router>
        <App>
            <Route exact path="/" component={Home}/>
            <Route  path="/signup" component={Signup}/>
            <Route  path="/message" component={Message}/>
            <Route  path="/signout" component={Signout}/>
            <Route  path="/signin" component={Signint}/>
       </App>
     </Router>
    </Provider>
   ,
    document.querySelector('#root')
)