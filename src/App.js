// eslint-disable-next-line
import { BrowserRouter as Router, Routes, Route, Switch, Link, Redirect } from "react-router-dom";
import MainPage from "./pages/main";
import StaffPage from "./pages/staff";
import ProjectsPage from "./pages/projects";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<MainPage />} />
        <Route exact path='/staff' element={<StaffPage />} />
        <Route exact path='/projects' element={<ProjectsPage />} />
      </Routes>
    </Router>
  )
}

export default App;