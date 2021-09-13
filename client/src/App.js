import "./App.css";
import Navbar from "./app/components/Navbar";
import { BrowserRouter } from "react-router-dom";
import Router from "./app/router/Router";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { autoLogin } from "./app/actions/userActions";
import Footer from "./app/components/Footer";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(autoLogin());
  }, [dispatch]);

  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Router />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
