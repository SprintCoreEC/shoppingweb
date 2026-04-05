import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import Navbar from "./components/WebParts/Navbar";
import OrvilMain from "./views/OrvilMain";

function App() {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<OrvilMain />} />
      </Routes>
    </div>
  );
}

export default function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}
