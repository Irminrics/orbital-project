import Navigation from "../components/Header/Navigation";
import UserTeam from "../components/User/UserTeam";
import Sidebar from "../components/User/UserSidebar";
import Footer from "../components/Footer/Footer";

const UserTeamPage = ({ setAuth, isAuthenticated }) => {

    return (
        <>
            <Navigation setAuth={setAuth} isAuthenticated={isAuthenticated} />
            <div className="page-container">
                <Sidebar activePage={"team"}/>
                <div className="container-fluid">
                    <UserTeam />
                </div>
                <Footer />
            </div>
        </>
    )
}

export default UserTeamPage