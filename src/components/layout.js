import Header from "./header";
import Footer from "./footer";
import "../styles/index.css";
import Head from 'next/head';
import Sidebar from "../components/sideBar";
import React,{useState} from 'react';

const pages = [
    {
        name: "Dashboard",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                   className=" h-4 w-4">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>,
        path: "/dashboard",
    },
    {
        name: "Time Table",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                   className=" h-4 w-4">
            <circle cx="12" cy="12" r="10"/>
            <polyline points="12 6 12 12 16 14"/>
        </svg>,
        path: "/timeTable",
    },
    {
        name: "Profile",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                   className=" h-4 w-4">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
        </svg>,
        path: "/profile",
    },
    {
        name: "Resources",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                   fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                   strokeLinejoin="round" className="w-4 h-4 ">
                <ellipse cx="12" cy="5" rx="9" ry="3"/>
                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
        </svg>,
        path: "/resources",
    },
    {
        name:"Settings",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                   className="w-4 h-4 ">
            <circle cx="12" cy="12" r="3"/>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
        </svg>,
        path: "/settings",
    }
];

function Layout(props) {
    const toggleSidebar = ()=>{
        setSidebar(!sidebarIsShown);
    };
    const [sidebarIsShown,setSidebar]=useState(true);
    let data;
    if(props.sideBar){
        data=
            <div className="app">
                <Header toggleSidebar={toggleSidebar}/>
                <main className="flex bg-gray-100">
                <Sidebar sidebarIsShown={sidebarIsShown} pages={pages}/>
                    <div className="body-container flex flex-col items-start justify-start flex-1 overflow-y-auto p-1">
                        <div className="min-h-full min-w-full max-w-full">
                        {props.children}
                        </div>
                    </div>
            </main>
            </div>;
    }
    else {
        data=<div><Header/>
            <main className="bg-gray-200">
                <div className="container w-full mx-auto pt-20"/>
                {props.children}
            </main>
            <Footer />
        </div>;
    }
    return (
        <div className="flex flex-col min-h-screen font-sans leading-normal tracking-normal" suppressHydrationWarning={true}>
            <Head>
                <title>TechFeed</title>
                <link rel="shortcut icon" href="/static/Techfeed_Logo.png" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            {data}
        </div>
    );
}

export default Layout;
