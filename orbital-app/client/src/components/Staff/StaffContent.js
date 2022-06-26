import profile from "../../images/profile.jpg"
import '../../css/staffpage.css';
import { useRef } from 'react';

const StaffContent = ({ staffName, staffEmail, staffGithub, staffWebsite, staffLinkedin, staffTitle }) => {
    const thisref = useRef("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css");
    return (
        <>
            <link rel="stylesheet" href={thisref.current}></link>
            <div className="staff float-left m-5">
                <div className="card">
                    <div class="our-team">
                        <div class="picture">
                            <img class="img-fluid" src={profile}></img>
                        </div>
                        <div class="team-content">
                            <h3 class="name">{staffName}</h3>
                            <h4 class="title">{staffTitle}</h4>
                        </div>
                        <ul class="social">
                            <li><a href={"mailto:"+staffEmail} target="_blank" class="fa-solid fa-envelope" aria-hidden="true"></a></li>
                            <li><a href={staffGithub} target="_blank" class="fa-brands fa-github" aria-hidden="true"></a></li>
                            <li><a href={staffWebsite} target="_blank" class="fa-solid fa-globe" aria-hidden="true"></a></li>
                            <li><a href={staffLinkedin} target="_blank" class="fa-brands fa-linkedin" aria-hidden="true"></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}       
        

export default StaffContent