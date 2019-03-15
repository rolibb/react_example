import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import Doctor from './reducers';
import DoctorFormContainer from './container/DoctorFormContainer'
import DoctorListContainer from './container/DoctorListContainer'
import DoctorEditarContainer from './container/DoctorEditarContainer'
import DoctorProfileContainer from './container/DoctorProfileContainer'

import {BrowserRouter as Router, Route} from 'react-router-dom'

const store = createStore(Doctor, applyMiddleware(thunk))

// ReactDOM.render(<Provider store={store}>
//         <DoctorFormContainer />
//         <DoctorListContainer />
//     </Provider>, document.getElementById('root'));


    ReactDOM.render(<Provider store={store}>
        <Router>
            <div>
                <Route path="/" exact component={DoctorListContainer} />
                <Route path="/crearDoctor/" component={DoctorFormContainer} />
                <Route path="/editarDoctor/:id" component={DoctorEditarContainer} />
                <Route path="/perfil/:doctor_id" component={DoctorProfileContainer} />
            </div>
        </Router>
        </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
