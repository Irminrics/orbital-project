import '../css/sidebar.css';
import '../css/admin.css';


const Sidebar = () => {
    return (
        <>
            <div className="sidebar sidebar-fixed position-fixed">
                <div className="time">
                    <h1 className="animated fadeInLeft admin-time" style={{ fontWeight: 500, fontSize: '70px', textAlign: 'center', color: '#918C8C' }}>02:30</h1>
                    <p className="animated fadeInRight admin-date text-center">Friday, May 20th 2022</p>
                </div>
                <div className="list-group list-group-flush">
                    <a href="AdminDashBoard.aspx" className="list-group-item active waves-effect">
                        <i className="fa fa-pie-chart mr-3" />Dashboard
                    </a>
                    <a href="AdminUserInfo.aspx" className="list-group-item list-group-item-action waves-effect">
                        <i className="fa fa-user mr-3" />Users</a>
                    <a href="AdminFacilitiesSchedule.aspx" className="list-group-item list-group-item-action waves-effect">
                        <i className="fa fa-table mr-3" />Projects</a>
                </div>
            </div>
        </>
    )
}

export default Sidebar