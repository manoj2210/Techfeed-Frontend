import React,{useEffect,useState} from 'react';
import Layout from '../components/layout';
import {useRouter} from "next/router";
import {get} from "../../services/rest_service";
import TimeTableStudent from "../components/timeTableStudent";
import TimeTableTeacher from "../components/timeTableTeacher";

function TimeTable(){
    const router = useRouter();
    const [data,setData]=useState('');
    useEffect(() => {
        get(`/getData/userDetails`).then(async res=> {
                if(!res.error){
                    if(res.isStudent){
                        setData(<TimeTableStudent res={res}/>);
                    }
                    else {
                        setData(<TimeTableTeacher res={res}/>);
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
export default TimeTable;
