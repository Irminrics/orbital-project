import Navigation from "../components/Header/Navigation";
import Footer from "../components/Footer/Footer";
import Sidebar from "../components/Sidebar";
import AdminDashBoard from "../components/Admin/Admin-Dashboard";

const AdminDashBoardPage = ({ setAuth, isAuthenticated }) => {

    return (
        <>
            <Navigation setAuth={setAuth} isAuthenticated={isAuthenticated} />
            <div className="page-container">
                <Sidebar activePage={"dashboard"}/>
                <div className="container-fluid">
                    <AdminDashBoard />
                </div>
                <Footer />
            </div>
        </>
    )
}

export default AdminDashBoardPage