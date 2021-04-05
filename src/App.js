import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Error, CountryPage } from "./pages";
import { Header } from "./components";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/countries/:id">
            <CountryPage />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
