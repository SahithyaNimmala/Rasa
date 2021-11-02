import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect

} from "react-router-dom";
import { useUserState } from './context/userContext';
import Chat from './Page/chat';
import LookFriends from './Page/FriendUsers';
import Home from './Page/Home';
import Login from './Page/Login';
import User from './Page/User';
import UserProfile from './Page/UserProfile';
import { PrivateRoute, PublicRoute } from "./routes"


function App() {
  const { isAuthenticated } = useUserState();
  return (
    <div className='pr-bg'>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <PrivateRoute
            path="/home"
            component={Home}
            isAuthenticated={isAuthenticated}
          />
          <PrivateRoute
            path="/chat"
            component={Chat}
            isAuthenticated={isAuthenticated}
          />
          <PrivateRoute
            path="/userProfile/"
            component={UserProfile}
            isAuthenticated={isAuthenticated}
          />
          <PrivateRoute
            path="/look-friends/"
            component={LookFriends}
            isAuthenticated={isAuthenticated}
          />
          <PrivateRoute
            path="/user/:id"
            component={User}
            isAuthenticated={isAuthenticated}
          />
          <PublicRoute exact path="/login" component={Login} isAuthenticated={isAuthenticated} />

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
