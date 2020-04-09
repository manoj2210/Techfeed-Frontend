import React, {useEffect,useState } from 'react';
import Layout from '../components/layout';
import {get} from "../../services/rest_service";
import StudentProfile from "../components/profileStudent"
import TeacherProfile from "../components/profileTeacher"


function Profile() {
    const [data,setData]=useState('');
    useEffect(() => {
        get(`/getData/userDetails`).then(res=> {
                if(!res.error){
                    if(res.isStudent){
                        setData(<StudentProfile res={res}/>);
                    }
                    else {
                        setData(<TeacherProfile res={res}/>);
                    }
                }
                else {
                    console.log("Unauthorised",res);
                }
            }
        );
    }, []);



    return (
        <Layout sideBar={true}>
            {data}
        </Layout>

    );
}

export default Profile;
