import '../css/bootstrap/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import '../css/homepage.css';

import Navigation from "../components/Header/Navigation";
import Login from "../components/Login";
import Footer from "../components/Footer/Footer";


const MainPage = () => {
    return (
        <>
        <Navigation/>
        <Login/>
        <Footer/>
        </>
    )
}

export default MainPage