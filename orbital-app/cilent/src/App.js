// eslint-disable-next-line
import { BrowserRouter as Router, Routes, Route, Switch, Link, Redirect } from "react-router-dom";
import { useState, useEffect } from "react";
import MainPage from "./pages/main";
import StaffPage from "./pages/staff";
import ProjectsPage from "./pages/projects";
import AdminPage from "./pages/admin-dashboard";
import DashboardPage from "./pages/dashboard";
import AdminUserPage from "./pages/admin-user";
import AdminProjectPage from "./pages/admin-project";


function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [name, setName] = useState("");

  const setAuth = boolean => {
    setIsAuthenticated(boolean);
  }

  async function isAuth() {
    try {
      const response = await fetch("http://localhost:3001/auth/verify", {
        method: "GET",
        headers: { token: localStorage.token },
      })

      const parseRes = await response.json();

      parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false)

    } catch (err) {
      console.error(err.message);
    }
  }

  async function getName() {
    try {
      const response = await fetch("http://localhost:3001/users/me", {
        method: "GET",
        headers: { token: localStorage.token }
      });

      const parseRes = await response.json();

      setName(parseRes.userid)

    } catch (err) {
      console.error(err.message);
    }
  }


  useEffect(() => {
    isAuth();
    getName();
  });


  return (
    <Router>
      <Routes>
        <Route exact path='/' element={!isAuthenticated ? (<MainPage setAuth={setAuth} />) : (name === "admin") ? (<AdminPage setAuth={setAuth} isAuthenticated={isAuthenticated} />) : (<DashboardPage setAuth={setAuth} isAuthenticated={isAuthenticated} />)} />
        <Route exact path='/staff' element={<StaffPage setAuth={setAuth} isAuthenticated={isAuthenticated} />} />
        <Route exact path='/projects/:achievement' element={<ProjectsPage setAuth={setAuth} isAuthenticated={isAuthenticated} />} />
        <Route exact path='/dashboard' element={!isAuthenticated ? <MainPage setAuth={setAuth} /> : name === "admin" ? <AdminPage setAuth={setAuth} isAuthenticated={isAuthenticated} /> : <DashboardPage setAuth={setAuth} isAuthenticated={isAuthenticated} />} />
        <Route exact path='/admin' element={!isAuthenticated ? <MainPage setAuth={setAuth} /> : name === "admin" ? <AdminPage setAuth={setAuth} isAuthenticated={isAuthenticated} /> : <DashboardPage setAuth={setAuth} isAuthenticated={isAuthenticated} />} />
        <Route exact path='/admin/users' element={!isAuthenticated ? <MainPage setAuth={setAuth} /> : name === "admin" ? <AdminUserPage setAuth={setAuth} isAuthenticated={isAuthenticated} /> : <DashboardPage setAuth={setAuth} isAuthenticated={isAuthenticated} />} />
        <Route exact path='/admin/projects' element={!isAuthenticated ? <MainPage setAuth={setAuth} /> : name === "admin" ? <AdminProjectPage setAuth={setAuth} isAuthenticated={isAuthenticated} /> : <DashboardPage setAuth={setAuth} isAuthenticated={isAuthenticated} />} />

      </Routes>
    </Router>
  )
}

export default App;