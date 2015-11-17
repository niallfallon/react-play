var React = require('react');
var Link = require('react-router').Link;

var Menu = React.createClass({
  render: function() {
    return  <nav id="page_nav" className="navbar navbar-default">
              <div className="container-fluid">
              
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul className="nav navbar-nav">
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/transactions">Transactions</Link></li>
                    <li><Link to="/statements">Statements</Link></li>
                    <li><Link to="/cards">Cards</Link></li>
                    <li className="dropdown">
                      <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Administration<span className="caret"></span></a>
                      <ul className="dropdown-menu">
                        <li><Link to="/usercards">User & Cards</Link></li>
                      </ul>
                    </li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/inbox">Inbox</Link></li>
                  </ul>
                  
                </div>
              </div>
            </nav>
  }
});
 
module.exports = Menu;