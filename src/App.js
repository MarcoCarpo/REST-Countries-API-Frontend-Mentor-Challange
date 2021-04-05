import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Error, Country } from "./pages";
import { Header } from "./components";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <main className="app__main">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/countries/:id">
              <Country />
            </Route>
            <Route path="*">
              <Error />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
