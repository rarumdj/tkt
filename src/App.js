import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import { PageRoutes } from "./utils/route";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>{PageRoutes}</Route>
    </Routes>
  );
}

export default App;
