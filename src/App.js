import { useState } from "react";
import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar"
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000)
  }

  const removeBodyClasses = () =>{
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-warning");
  }

  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add(`bg-${cls}`);
    showAlert(`${cls} has been enabled`,`${cls}`);
    setMode( `${cls}`);
    // if (mode === 'light') {
    //   setMode("dark")
    //   document.body.style.backgroundColor = "#042743"
    //   showAlert("Dark Mode has been enabled", `${cls}`)
    // } else {
    //   setMode("light")
    //   document.body.style.backgroundColor = "white"
    //   showAlert("Light Mode has been enabled", `${cls}`)
    // }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        {/* <Navbar /> */}
        <div className="container my-3">
          <Switch>
            <Route exact path="/about.js">
              <About mode={mode}/>
            </Route>
            <Route exact path="/">
              <TextForm heading="Enter you text To analyze below" mode={mode} showAlert={showAlert} />
            </Route>
          </Switch>

        </div>
      </Router>
    </>

  );
}

export default App;
