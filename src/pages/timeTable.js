import React from 'react';
import Layout from '../components/layout';
import Timeline from "../components/timeline";


const data=[
    {
        subject:"Operating System ",
        class:"M-204",
        courseCode:"18XT45",
        time:"8:30-9:20",
    },
    {
        subject:"OS",
        class:"M-204",
        courseCode:"18XT45",
        time:"8:30-9:20",
    },
    {
        subject:"OS",
        class:"M-204",
        courseCode:"18XT45",
        time:"8:30-9:20",
    },
    {
        subject:"OS",
        class:"M-204",
        courseCode:"18XT45",
        time:"8:30-9:20",
    },
];
function Techfeed(){

    return(
    <Layout sideBar={true}>
        <div className="mx-auto px-4 sm:px-8 min-h-screen bg-gray-300">
                <Timeline data={data}/>
        </div>
    </Layout>
    );
}
export default Techfeed;

