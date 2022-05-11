import '../css/bootstrap/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import '../css/homepage.css';
import { PieChart } from 'react-minimal-pie-chart';


import Navigation from "../components/Header/Navigation";
import Footer from "../components/Footer/Footer";

const ProjectsPage = () => {
    const myData = [
        { title: 'Artemis', value: 10, color: '#E38627' },
        { title: 'Apollo 11', value: 56, color: '#C13C37' },
        { title: 'Project Gemini', value: 29, color: '#6A2135' },
        { title: 'Vostok', value: 5, color: 'black' },
    ];


    return (
        <>
            <Navigation />
            <PieChart
                className='piechart'
                data={myData}
                viewBoxSize={[400, 400]}
                lineWidth={50}
            />;
            <Footer />
        </>
    )
}

export default ProjectsPage