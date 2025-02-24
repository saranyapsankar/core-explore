import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { lazy, useState, Suspense } from "react";
import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  const [count, setCount] = useState(0);
  const Home = lazy(() => import("./components/Home"));
  const Call = lazy(() => import("./components/Call"));
  return (
    <Router basename="/core-explore/core-js-contents">
      <Suspense fallback={<div>Loading...</div>}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/call" element={<Call />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
