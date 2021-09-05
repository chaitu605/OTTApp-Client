import React from "react";
import { Route, Switch } from "react-router-dom";
import Logout from "./Components/Logout";
import DashboardContainer from "./Containers/dashboardContainer";
import VideoPlayerContainer from "./Containers/videoplayerContainer";
import AddVideoContainer from "./Containers/addvideoContainer";
import PageNotFound from "./Components/NotFound404/PageNotFound";
import LoginContainer from "./Containers/loginContainer";
import RegisterContainer from "./Containers/registerContainer";
import SearchResultsContainer from "./Containers/searchResultsContainer";
import EditVideoContainer from "./Containers/editContainer";
import AdminDashboardContainer from "./Containers/adminDashboardContainer";
import { ProtectedRoute } from "./ProtectedRoute";

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={LoginContainer} />
        <Route exact path="/register" component={RegisterContainer} />
        <Route exact path="/logout" component={Logout} />
        <Route
          exact
          path="/admin-dashboard"
          component={AdminDashboardContainer}
        />
        <ProtectedRoute exact path="/edit/:id" component={EditVideoContainer} />
        <ProtectedRoute
          exact
          path="/dashboard"
          component={DashboardContainer}
        />
        <ProtectedRoute
          exact
          path="/videoplayer/:videoId"
          component={VideoPlayerContainer}
        />
        <ProtectedRoute
          exact
          path="/searchvideo"
          component={SearchResultsContainer}
        />
        <ProtectedRoute exact path="/addvideo" component={AddVideoContainer} />
        <ProtectedRoute exactpath="*" component={PageNotFound} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
