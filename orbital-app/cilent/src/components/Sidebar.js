import { useState, useEffect } from 'react';

import '../css/sidebar.css';
import '../css/admin.css';

function getOrdinalNum(n) {
    return n + (n > 0 ? ['th', 'st', 'nd', 'rd'][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10] : '');
}


const Sidebar = () => {
    const [date, setDate] = useState(new Date());

    var today = new Date()

    useEffect(() => {
        setInterval(() => setDate(new Date()), 1000);
    }, []);



    return (
        <>
            <div className="sidebar sidebar-fixed position-fixed">
                <div className="time">
                    <h1 className="animated fadeInLeft admin-time" style={{ fontWeight: 500, fontSize: '70px', textAlign: 'center', color: '#918C8C' }}>
                        {date.toLocaleString('en-US', {
                            hour: 'numeric',
                            minute: 'numeric',
                            hour12: false,
                        })}
                    </h1>
                    <p className="animated fadeInRight admin-date text-center">
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
                <div className="list-group list-group-flush">
                    <a className="list-group-item active waves-effect white-text">
                        <i className="fa fa-pie-chart mr-3" />Dashboard
                    </a>
                    <a className="list-group-item list-group-item-action waves-effect">
                        <i className="fa fa-user mr-3" />Users</a>
                    <a className="list-group-item list-group-item-action waves-effect">
                        <i className="fa fa-table mr-3" />Projects</a>
                </div>
            </div>
        </>
    )
}

export default Sidebar