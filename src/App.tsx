import { useEffect } from "react";
import { Route, Switch } from "react-router";
import { useHistory } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { useAppDispatch, useAppSelector } from "./store/store";
import { auth } from "./firebase";
import { LOGGED_IN, LOGOUT } from "./store/actions";

function App() {
  const user = useAppSelector((state) => state.data.user);
  const history = useHistory();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch({ type: LOGGED_IN, payload: user });
      } else {
        dispatch({ type: LOGOUT });
      }
    });
    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  useEffect(() => {
    if (user) history.replace("/");
  }, [user, history]);

  return (
    <div className="app">
      <Switch>
        {!user && (
          <Route path="/login">
            <Login />
          </Route>
        )}
        <Route path="/cart">
          <Header />
          <Cart />
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
