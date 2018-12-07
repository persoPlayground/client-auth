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

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
    <Router>
        <App>
            <Route exact path="/" component={Home}/>
            <Route exact path="/signup" component={Signup}/>
       </App>
     </Router>
    </Provider>
   ,
    document.querySelector('#root')
)