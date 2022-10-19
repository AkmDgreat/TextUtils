import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar.js";
import Textbox from "./components/Textbox.js";
import Alert from "./components/Alert.js";

function App() {

  const [alerto, setAlerto] = useState(null);
  const displayAlert = (message, type) => {
  setAlerto({
      msg: message,
      type: type
  })              //I have set alert to an object
}

const changeTheme = () =>{
  displayAlert("Dark mode has been enabled", "success")
}

  return (
    <>
      <Navbar title="TextUtils"/>
      <Textbox />
      <Alert alert={alerto}/>
    </>
  );
}

export default App;
