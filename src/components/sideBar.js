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
                          {page.icon}
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
                             {page.icon}
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