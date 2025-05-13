import "./App.css";
import Header from "./components/Header/Header";
import { Button } from "./components/ui/button";
import Router from "../Router";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Header />
      <Router />
      <Navbar />
    </>
  );
}

export default App;
