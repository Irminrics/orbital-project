import Navigation from "../components/Header/Navigation";

const DashboardPage = ({setAuth, isAuthenticated}) => {

    return (
        <>
        <Navigation setAuth={setAuth} isAuthenticated={isAuthenticated} />
        admin
        </>
    )
}

export default DashboardPage