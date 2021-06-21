import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar'
import { PostItem } from './components/PostItem/PostItem';
import Footer from './components/Footer/Footer'
import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch
} from 'react-router-dom';
import AuthenticatedRoute from './AuthenticatedRoute';


import Dashboard from './components/Dashboard/Dashboard';

class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="app">
          <Navbar />
          <Switch>
            <Route exact path='/login' component={() => {
              return <div>Login Page</div>
            }}></Route>
            <Route exact path='/post/:id' component={PostItem} />
            <AuthenticatedRoute isAuthenticated={true} exact path='/dashboard' component={Dashboard} />
          </Switch>
          {/* <Footer />  */}
        </div>
      </Router>
    )
  }
}

export default App;
