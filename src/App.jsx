import { createContext, useState } from "react"
import Router from "./Router"
import Header from "./components/Header/Header";

export const LoggedInContext = createContext({
  loggedIn: window.localStorage.getItem("user") != null,
  setLoggedIn: () => {}
});

function App() {
  const [loggedIn, setLoggedIn] = useState();
  const value = {loggedIn, setLoggedIn};

  console.log(window.localStorage.getItem("user"));
  return (
  <>
    <LoggedInContext.Provider value={value}>
      <Header />
      <Router />
    </LoggedInContext.Provider>
  </>)
}

export default App
