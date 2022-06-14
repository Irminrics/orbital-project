import Navigation from "../components/Header/Navigation";
import UserDashboard from "../components/User/User-Dashboard";

const DashboardPage = ({ setAuth, isAuthenticated }) => {

    return (
        <>
            <Navigation setAuth={setAuth} isAuthenticated={isAuthenticated} />
            <h1>User Page</h1>
            <UserDashboard />
        </>
    )
}

export default DashboardPage