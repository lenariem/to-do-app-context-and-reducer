import React, { useEffect, useReducer, createContext } from "react";
import { Reducer } from "./Reducer";
import "../css/App.scss";
import Navigation from "./Navigation";
import ToDosContainer from "./ToDosContainer";
import ToDonesContainer from "./ToDonesContainer";
import Help from "./Help";
import { HashRouter, Switch, Route } from "react-router-dom";
import NotFound from "./NotFound";

export const MyContext = createContext(null);

export default function App() {
  
  const initialItems = [
    { text: "first task", done: false, id: 0 },
    { text: "second task", done: false, id: 1 },
    { text: "third task", done: false, id: 2 },
    { text: "fourth task", done: false, id: 3 },
    { text: "create a website", done: true, id: 4 },
    { text: "read a book", done: true, id: 5 },
    { text: "make a call", done: true, id: 6 },
    { text: "buy a lap top", done: true, id: 7 },
  ];

  //items -global state, dispatch -actions(methods to reducer)
  const [items, dispatch] = useReducer(Reducer, initialItems);

  useEffect(() => {
    let storedItems = localStorage.getItem("to-do-app");
    let convertedToOriginal = JSON.parse(storedItems);
    if (storedItems !== null) {
      dispatch({ type: "localStorage", payload: convertedToOriginal });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("to-do-app", JSON.stringify(items));
  }, [items]);

  return (
    <MyContext.Provider value={{ dispatch, items }}>
      <HashRouter>
        <div className="app">
          <Navigation />
          <Switch>
            <Route exact path="/">
              <ToDosContainer />
              <ToDonesContainer />
            </Route>
            <Route exact path="/help" component={Help} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </HashRouter>
    </MyContext.Provider>
  );
}
