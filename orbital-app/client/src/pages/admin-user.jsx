import Navigation from "../components/Header/Navigation";
import Footer from "../components/Footer/Footer";
import Sidebar from "../components/Sidebar";

import UserList from "../components/Admin/UserList";

const AdminUserPage = ({ setAuth, isAuthenticated }) => {

    return (
        <>
            <Navigation setAuth={setAuth} isAuthenticated={isAuthenticated} />
            <div className="page-container">
                <Sidebar activePage={"user"}/>
                <div className="container-fluid">
                    <UserList />
                </div>
                <Footer />
            </div>
        </>
    )
}

export default AdminUserPage