import { Link as LinkNav } from 'react-router-dom'

const Navigation = () => {
    return (
        <>
            <nav id="navbar" className={`navbar navbar-light darken-4 fixed-top`}>
                <div id="title-orbital" className="navbar-brand">
                    <div className="icon orbital-dp" /><LinkNav to="/" className="nav-link">Orbital</LinkNav>
                </div>
                <div id="nav-container-right">
                    <ul id="nav-items">
                    <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="dropdownMenuButton" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Projects</a>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton" style={{marginLeft: "7px"}}>
                                <a className="dropdown-item" href="#"><LinkNav to="/projects" className="nav-link">Orbital 2021</LinkNav></a>
                                <a className="dropdown-item" href="#"><LinkNav to="/projects" className="nav-link">Orbital 2022</LinkNav></a>
                            </div>
                        </li>
                        <li id="about-nav" className="nav-item"><LinkNav to="/staff" className="nav-link">Staff</LinkNav></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navigation