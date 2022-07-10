import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import LandingPage from "../pages/landingPage";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
    </Switch>
  );
};

export default Routes;
