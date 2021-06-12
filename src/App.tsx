import { Route, Switch } from "react-router";

import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  return (
    <div className="app">
      <Switch>
        <Route path="/login">
          <h1>Login Page</h1>
        </Route>
        <Route path="/checkout">
          <Header />
          <h1>Checkout</h1>
        </Route>
        <Route path="/">
          <Header />
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
