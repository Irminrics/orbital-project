import { useState, useEffect } from 'react';
import { Link as LinkNav } from 'react-router-dom'

import '../../css/sidebar.css';
import '../../css/admin.css';

function getOrdinalNum(n) {
    return n + (n > 0 ? ['th', 'st', 'nd', 'rd'][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10] : '');
}


const Sidebar = ({ activePage }) => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        setInterval(() => setDate(new Date()), 1000);
    }, []);

    return (
        <>
            <div className="sidebar sidebar-fixed position-fixed">
                <div className="time">
                    <h1 className="admin-time" style={{ fontWeight: 500, fontSize: '70px', textAlign: 'center', color: '#918C8C' }}>
                        {date.toLocaleString('en-US', {
                            hour: 'numeric',
                            minute: 'numeric',
                            hour12: false,
                        })}
                    </h1>
                    <p className="admin-date text-center">
                        {date.toLocaleString('en-US', {
                            weekday: 'long',
                        })}
                        ,&nbsp;
                        {date.toLocaleString('en-US', {
                            month: 'long',
                        })}
                        &nbsp;
                        {getOrdinalNum(date.getDate())}
                        &nbsp;
                        {date.toLocaleString('en-US', {
                            year: 'numeric',
                        })}
                    </p>
                </div>
                <SidebarNav activePage={activePage} />
            </div>
        </>
    )
}


const SidebarNav = ({ activePage }) => {
    if (activePage === "dashboard") {
        return (
            <div className="list-group list-group-flush">
                <LinkNav to={`/user`} className="list-group-item active white-text">
                    <i className="fa fa-chart-line mr-3" />Dashboard
                </LinkNav>
                <LinkNav to={`/user/team`} className="list-group-item list-group-item-action">
                    <i className="fa fa-user mr-3" />Team
                </LinkNav>
                <LinkNav to={`/user/submission`} className="list-group-item list-group-item-action">
                    <i className="fa fa-table mr-3" />Submissions
                </LinkNav>
            </div>
        )
    } else if (activePage === "team") {
        return (
            <div className="list-group list-group-flush">
                <LinkNav to={`/user`} className="list-group-item list-group-item-action ">
                    <i className="fa fa-chart-line mr-3" />Dashboard
                </LinkNav>
                <LinkNav to={`/user/team`} className="list-group-item active white-text">
                    <i className="fa fa-user mr-3" />Team
                </LinkNav>
                <LinkNav to={`/user/submission`} className="list-group-item list-group-item-action">
                    <i className="fa fa-table mr-3" />Submissions
                </LinkNav>
            </div>
        )
    } else {
        return (
            <div className="list-group list-group-flush">
                <LinkNav to={`/user`} className="list-group-item list-group-item-action">
                    <i className="fa fa-chart-line mr-3" />Dashboard
                </LinkNav>
                <LinkNav to={`/user/team`} className="list-group-item list-group-item-action">
                    <i className="fa fa-user mr-3" />Team
                </LinkNav>
                <LinkNav to={`/user/submission`} className="list-group-item active waves-effect white-text">
                    <i className="fa fa-table mr-3" />Submissions
                </LinkNav>
            </div>
        )
    }
}

export default Sidebar