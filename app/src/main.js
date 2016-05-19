import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Redirect, Route, IndexRoute, Link, hashHistory } from 'react-router'
import Speakers from './speakers/speakers.jsx';
import Contacts from './contacts/contacts.jsx';
import Events from './events/events.jsx';
import Wrap from './wrap/wrap.jsx';
import Home from './home/home.jsx';
import 'normalize.css/normalize.css'
import './style.scss'

function main() {
    ReactDOM.render((
        <Router history={hashHistory}>
            <Route path="/" component={Wrap}>
                <IndexRoute component={Home} />
                <Route path="events" component={Events} />
                <Route path="speakers" component={Speakers} />
                <Route path="contacts" component={Contacts} />
            </Route>
            <Redirect from="/*" to="/events"/>
        </Router>
    ), document.getElementById('root'));
}

main();
