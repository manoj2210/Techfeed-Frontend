import React, { Component } from 'react';
import {useRouter} from "next/router";

function Sidebar (props) {
    const router = useRouter();
        let Button=({page})=>{
          if(page.path===router.pathname){
              return (
                  <div>
                  <button onClick={function () {router.push(page.path)}}
                          className="w-full flex flex-wrap h-12 inline-block bg-gray-700 hover:bg-gray-800 text-white px-2 rounded">
                      <div className="pl-5 pt-1">
                      <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="fill-current h-4 w-4">
                          <title>Menu</title>
                          <path d="M18.121,9.88l-7.832-7.836c-0.155-0.158-0.428-0.155-0.584,0L1.842,9.913c-0.262,0.263-0.073,0.705,0.292,0.705h2.069v7.042c0,0.227,0.187,0.414,0.414,0.414h3.725c0.228,0,0.414-0.188,0.414-0.414v-3.313h2.483v3.313c0,0.227,0.187,0.414,0.413,0.414h3.726c0.229,0,0.414-0.188,0.414-0.414v-7.042h2.068h0.004C18.331,10.617,18.389,10.146,18.121,9.88 M14.963,17.245h-2.896v-3.313c0-0.229-0.186-0.415-0.414-0.415H8.342c-0.228,0-0.414,0.187-0.414,0.415v3.313H5.032v-6.628h9.931V17.245z M3.133,9.79l6.864-6.868l6.867,6.868H3.133z"/>
                      </svg>
                      </div>
                      <span className="px-3">{page.name}</span>
                  </button>
                  </div>
              );
          }
          else{
                return (<div>
                     <button onClick={function () {router.push(page.path)}}
                             className="w-full flex flex-wrap h-12 inline-block bg-gray-100 hover:bg-gray-300 text-gray-800 px-2 rounded">
                         <div className="pl-5 pt-1">
                             <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="fill-current h-4 w-4">
                                 <title>Menu</title>
                                 <path d="M18.121,9.88l-7.832-7.836c-0.155-0.158-0.428-0.155-0.584,0L1.842,9.913c-0.262,0.263-0.073,0.705,0.292,0.705h2.069v7.042c0,0.227,0.187,0.414,0.414,0.414h3.725c0.228,0,0.414-0.188,0.414-0.414v-3.313h2.483v3.313c0,0.227,0.187,0.414,0.413,0.414h3.726c0.229,0,0.414-0.188,0.414-0.414v-7.042h2.068h0.004C18.331,10.617,18.389,10.146,18.121,9.88 M14.963,17.245h-2.896v-3.313c0-0.229-0.186-0.415-0.414-0.415H8.342c-0.228,0-0.414,0.187-0.414,0.415v3.313H5.032v-6.628h9.931V17.245z M3.133,9.79l6.864-6.868l6.867,6.868H3.133z"/>
                             </svg>
                         </div>
                         <span className="px-3">{page.name}</span>
                     </button>
                 </div> );
         }
        };
        let LinkItem = ({page}) => (
            <li>
                <div className="my-2">
                    <Button page={page}/>
                </div>
            </li>
        );
        return (
            <nav className={"sidebar-container border-r overflow-y-auto lg:w-1/5 absolute sm:relative bg-cover bg-no-repeat bg-top bg-gray-100 z-10 " + (props.sidebarIsShown ? "hidden sm:flex" : "flex sm:hidden")} >
                <ul className="list-reset flex-1 mx-2 z-10">
                    {props.pages.map((page, index)=><LinkItem page={page} key={index}/>)}
                </ul>
            </nav>
        );

}


export default Sidebar;