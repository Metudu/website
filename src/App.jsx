import { createContext, useEffect, useState } from "react";
import Router from "./Router"
import Header from "./components/Header/Header";
import { useNavigate } from "react-router-dom";

export const LoggedInContext = createContext({
  loggedIn: null,
  setLoggedIn: () => {}
});

function App() {
  const [loggedIn, setLoggedIn] = useState();
  const value = {loggedIn, setLoggedIn};
  const navigate = useNavigate();

  useEffect(() => {
    if (window.localStorage.getItem("user")) {
      setLoggedIn(true);
      navigate("/dashboard");
    }
    else setLoggedIn(false)
  }, [loggedIn]);

  return (
  <>
    <LoggedInContext.Provider value={value}>
      <Header />
      <Router />
    </LoggedInContext.Provider>
  </>)
}

export default App
