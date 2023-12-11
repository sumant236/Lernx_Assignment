import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Route path="/">
        <Layout />
      </Route>
    </BrowserRouter>
  );
}

export default App;
