import React from 'react';
import '../App.css';

import { NavLink, Switch, Route } from 'react-router-dom';

/*can also do function Header()*/
class Header extends React.Component {
    render() {
       return (
          <div>
             <header className="nav-container">
               <h1>Header</h1>                
                  <NavLink to="/" style={{ margin: '2em' }}>0 - Home </NavLink>
                 
               <hr />
               <Switch>
                  <Route path="/" />

               </Switch>

               </header>
          </div>
       );
    }
  }

  export default Header;