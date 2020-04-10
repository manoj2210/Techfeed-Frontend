import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function Timeline(props) {

    let data=props.data.map((data,index)=>{
        return (<VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            date={<span className="mx-3 font-medium text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-black">{data.time}</span>}
            iconStyle={{ background: 'rgb(71, 75, 84)' }}
        >
            <div>
            <div className="flex w-full justify-center items-center">
                <div className="flex w-1/3 justify-center items-center">
                <a className="px-2 py-1 bg-gray-700 hover:bg-gray-800 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-green-100 rounded" href="#">{data.courseCode}</a>
                </div>
            </div>
            <div className="flex w-full justify-center items-center">
                <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-700 text-center font-light">{data.subject}</p>
            </div>
                <div className="flex w-full justify-center items-center">
                    <div className="flex w-1/3 justify-center items-center">
                        <p className="px-2 py-1 bg-gray-600 whitespace-no-wrap text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-100 rounded">{data.class}</p>
                    </div>
                </div>
                <div className="flex w-full justify-between items-center mt-4">
                    <div className="flex w-1/2 items-center">
                        <a className="flex w-full items-center" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                 fill="none" stroke="#2D3648" strokeWidth="2" strokeLinecap="round"
                                 strokeLinejoin="round" className="w-1/9 ">
                                <ellipse cx="12" cy="5" rx="9" ry="3"/>
                                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
                                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
                            </svg>
                            <span className="ml-2 w-2/3 font-light text-xs sm:text-sm md:text-base lg:text-base xl:text-base text-gray-600">Resources</span>
                        </a>
                    </div>
                    <div className={"flex w-1/2 items-center"} >
                        <a className="flex w-full items-center justify-end" href="#">

                            <span className="w-2/3 mr-1 text-right font-light text-xs sm:text-sm md:text-base lg:text-base xl:text-base  text-gray-600">Messages</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#2D3648"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-1/9 "
                            >
                                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </VerticalTimelineElement>);

    });


    return(
        <VerticalTimeline>
            {data}
        </VerticalTimeline>
    );
}
