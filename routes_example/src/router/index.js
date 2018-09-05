import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from '../App';
import Home from '../views/Home';
import About from '../views/About';
import Profile from '../views/Profile';
import Students from '../views/Students';
import StudentsInactive from '../views/Students/StudentsInactive';
import ProfileData from '../views/Profile/ProfileData';
import EditStudent from '../views/Students/EditStudent';
import ProfilePassword from '../views/Profile/ProfilePassword';

class RouterHandler extends Component {
  render() {
    return (
      <Router>
        <App>
          <Route exact path="/" component={Home}/>
          <Route exact path="/students" component={Students} />
          <Route exact path="/students/inactive" component={StudentsInactive} />
          <Route exact path="/students/:id" component={EditStudent} />
          <Route exact path="/about" component={About}/>
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/profile/data" component={ProfileData} />
          <Route exact path="/profile/password" component={ProfilePassword} />
        </App>
      </Router>
    );
  }
}
export default () => <RouterHandler />;