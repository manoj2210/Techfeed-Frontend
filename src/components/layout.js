import Header from "./header";
import Footer from "./footer";
import "../styles/index.css";
import Head from 'next/head';
import Sidebar from "../components/sideBar";
import React,{useState} from 'react';

const pages = [
    {
        name: "Dashboard",
        iconClass: "fa fa-home",
        path: "/",
    },
    {
        name: "Login",
        iconClass: "fas fa-user",
        path: "/login",
    },
    {
        name: "Sign Up",
        iconClass: "fas fa-bell",
        path: "/signUp",
    },
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
                <link rel="shortcut icon" href="/static/favicon.ico" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            {data}
        </div>
    );
}

export default Layout;
