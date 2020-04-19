import React,{useState,useEffect} from 'react';
import Layout from '../components/layout';
import Timeline from "../components/timeline";
import {get} from '../../services/rest_service';

function Techfeed(){
  const [data,setData]=useState([])
var url="/getData/timeTable";
useEffect(()=>{
  get(url).then(
    res=>{
      if(!res.error){
        console.log("hi")
        data={res}
      }
      else{
        console.log("Unauthorised",res)
      }
    }
  )
})

var currentDate=new Date();
var currentDay=currentDate.getDay();

if(currentDay===1){
  console.log('monday')

}
else if(currentDay===2){
  console.log('tuesday')
}
else if(currentDay===3){
  console.log('wednesday')
}
else if(currentDay===4){
  console.log('thursday')
}
else if(currentDay===5){
  console.log('friday')
}
else if (currentDay===6) {
  console.log('saturday')
}
else{
  console.log('sunday')
}

// const data=[
//     {
//         subject:"Operating System ",
//         class:"M-204",
//         courseCode:"18XT45",
//         time:"8:30-9:20",
//     },
//     {
//         subject:"OS",
//         class:"M-204",
//         courseCode:"18XT45",
//         time:"8:30-9:20",
//     },
//     {
//         subject:"OS",
//         class:"M-204",
//         courseCode:"18XT45",
//         time:"8:30-9:20",
//     },
//     {
//         subject:"OS",
//         class:"M-204",
//         courseCode:"18XT45",
//         time:"8:30-9:20",
//     },
// ];





    return(
    <Layout sideBar={true}>
        <div className="mx-auto px-4 sm:px-8 min-h-screen bg-gray-300">
                <Timeline data={data}/>
        </div>
    </Layout>
    );
}
export default Techfeed;
