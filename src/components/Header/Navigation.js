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
                        <li id="about-nav" className="nav-item"><LinkNav to="/staff" className="nav-link">Staff</LinkNav></li>
                        <li id="contact-nav" className="nav-item"><LinkNav to="/projects" className="nav-link">Projects</LinkNav></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navigation