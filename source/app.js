var React = require('react');
var ReactDOM = require('react-dom');
var Application = require('./components/Application.react');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;

var About = require('./components/About.react');
var Inbox = require('./components/Inbox.react');
var UserCards = require('./components/UserCards.react');

var AppDispatcher = require('./dispatcher'); 


var routes = {
  path: '/',
  component: Application,
  childRoutes: [
    {path: 'about', component: About},
    {path: 'inbox', component: Inbox},
    {path: 'usercards', component: UserCards}
  ]
};

ReactDOM.render(<Router routes={routes} />, document.getElementById('react-application'));
