import Navigation from "../components/Header/Navigation";
import UserDashboard from "../components/User/UserDashboard";
import Sidebar from "../components/User/UserSidebar";
import Footer from "../components/Footer/Footer";

const UserSubmissionPage = ({ setAuth, isAuthenticated }) => {

    return (
        <>
            <Navigation setAuth={setAuth} isAuthenticated={isAuthenticated} />
            <div className="page-container">
                <Sidebar activePage={"submission"}/>
                <div className="container-fluid">
                    <UserDashboard />
                </div>
                <Footer />
            </div>
        </>
    )
}

export default UserSubmissionPage