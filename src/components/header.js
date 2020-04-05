import Link from "next/link";
import React from "react";

function Header(props) {
    let menu;
    if(props.toggleSidebar){
        menu=<button className="flex items-center justify-center p-2 mx-2 " onClick={props.toggleSidebar}>
            <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="fill-current h-4 w-4">
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
            </svg>
        </button>
    }
    return (
        <header className="top-bar-container flex border-b items-center justify-between shadow">
            <div className="w-1/3 container mx-auto flex flex-wrap items-center md:pb-0">
                <div className="w-1/2 pl-2 md:pl-0 p-4">
                    <div className="flex flex-wrap">
                        {menu}
                    </div>
                </div>
            </div>
            <div className="w-1/3 container mx-auto flex flex-wrap items-center justify-center my-2 md:pb-0">
                <a className="text-gray-800 text-base no-underline hover:underline font-bold" href="/">
                        <div className="h-16 flex flex-col items-center tracking-wide bg-white text-xs font-bold justify-center">
                            <img
                                className="h-full bg-white rounded-full"
                                src="/static/Techfeed_Logo.png"
                                alt=""
                            />
                        </div>
                </a>
            </div>
            <div className="w-1/3">
            </div>
        </header>

    );
}

export default Header;
