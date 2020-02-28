import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as serviceWorker from './serviceWorker';

// --- import views---
import Home from './views/home/Home';
import Contact from './views/contact/Contact';
import Events from './views/events/Events';
import News from './views/news/News';
import Promo from './views/promo/Promo';
import Highlight from './views/highlight/Highlight';
import LoginMember from './views/profile/loginPage/LoginMember';
import RegisterMember from './views/profile/registerPage/RegisterMember';
import PaymentProcess from'./components/paymentProcess/paymentProcess';
import Process from'./components/paymentProcess/Process';
import Confirmation from'./components/paymentProcess/Confirmation';

ReactDOM.render(
  <Router>
    <Route path="/" exact component={Home} />
    <Route path="/home" component={Home} />
    <Route path="/contact" component={Contact} />
    <Route path="/events" component={Events} />
    <Route path="/news" component={News} />
    <Route path="/promo" component={Promo} />
    <Route path="/highlight" component={Highlight} />
    <Route path="/login" component={LoginMember} />
    <Route path="/register" component={RegisterMember} />
    <Route path="/payment" component={PaymentProcess} />
    <Route path="/process" component={Process} />
    <Route path="/confirm" component={Confirmation} />
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
