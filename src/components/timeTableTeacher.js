import React from 'react';
import Timeline from "../components/timeline";
import {get} from '../../services/rest_service';


function TimeTableTeacher(props){

    const data=[
        {
            subject:"Operating System",
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

    return(
        <div className="mx-auto px-4 sm:px-8 min-h-screen bg-gray-300">
                <Timeline data={data}/>
        </div>
    );
}

TimeTableTeacher.getInitialProps=async ctx =>{
    return {serverRender: await get('/getData/timeTable')};
};

export default TimeTableTeacher;


