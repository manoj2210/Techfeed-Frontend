import React,{useEffect,useState} from 'react';
import Layout from '../components/layout';
import {useRouter} from "next/router";
import {get} from "../../services/rest_service";
import StudentDashboard from "../components/dashboardStudent";
import TeacherDashboard from "../components/dashboardTeacher";

function Dashboard(){
    const router = useRouter();
    const [data,setData]=useState('');
    useEffect(() => {
        get(`/getData/userDetails`).then(async res=> {
                if(!res.error){
                    if(res.isStudent){
                        setData(<StudentDashboard res={res}/>);
                    }
                    else {
                        setData(<TeacherDashboard res={res}/>);
                    }
                }
                else {
                    console.log("Unauthorised",res);
                    await router.push('/login');
                }
            }
        );
    }, []);

    return <Layout sideBar={true}>
        {data}
    </Layout>
}
export default Dashboard;
