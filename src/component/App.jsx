import Navbar from "../pages/Start/Navbar";
import Homepage from "../pages/Homepage/Homepage";
import Login from "../pages/login/login";
import Register from "../pages/register/register";
import Status from "../pages/Status/Status"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const currentUser = true;
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/homepage">
          <Homepage />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/status">
          <Status />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;