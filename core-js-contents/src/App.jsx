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
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <NavBar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/call" Component={Call} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
