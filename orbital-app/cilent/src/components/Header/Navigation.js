import { Link as LinkNav } from 'react-router-dom'

function refreshPage() {
    setTimeout(()=>{
        window.location.reload(false);
    }, 1);
}

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
                            <a className="nav-link dropdown-toggle" id="dropdownMenuButton" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Projects</a>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton" style={{ marginLeft: "7px" }}>
                                <LinkNav to={`/projects/vostok`} className="dropdown-item" onClick={refreshPage}>Vostok</LinkNav>
                                <LinkNav to={`/projects/gemini`} className="dropdown-item" onClick={refreshPage}>Gemini</LinkNav>
                                <LinkNav to={`/projects/apollo11`} className="dropdown-item" onClick={refreshPage}>Apollo 11</LinkNav>
                                <LinkNav to={`/projects/artemis`} className="dropdown-item" onClick={refreshPage}>Artemis</LinkNav>
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