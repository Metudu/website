import { useContext, useEffect } from "react"
import {LoggedInContext} from "../../App"
import { useNavigate } from "react-router-dom";

export default function Main() {
  const {loggedIn, setLoggedIn} = useContext(LoggedInContext);
  const navigate = useNavigate();

  useEffect(() => {
    if(!loggedIn) {
      navigate("/");
    }
  }, [loggedIn]);    
  return (
    <>
    </>
  ) 
}