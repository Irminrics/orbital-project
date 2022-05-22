import '../css/bootstrap/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import '../css/homepage.css';

import Navigation from "../components/Header/Navigation";
import Footer from "../components/Footer/Footer";

const StaffPage = ({ setAuth, isAuthenticated }) => {
    return (
        <>
            <Navigation setAuth={setAuth} isAuthenticated={isAuthenticated} />
            <div className="page-container">
                <Footer />
                <div className='testDiv'></div>
            </div>
        </>
    )
}

export default StaffPage