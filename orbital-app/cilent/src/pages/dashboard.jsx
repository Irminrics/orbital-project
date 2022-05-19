import { useState, useEffect } from "react";
import Navigation from "../components/Header/Navigation";
import Footer from "../components/Footer/Footer";



const DashboardPage = ({setAuth, isAuthenticated}) => {

    return (
        <>
        <Navigation setAuth={setAuth} isAuthenticated={isAuthenticated} />
        admin
        </>
    )
}

export default DashboardPage