import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
    </Routes>
  );
}

export default App;
