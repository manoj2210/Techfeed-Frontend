import React, {useEffect,useState } from 'react';
import Layout from '../components/layout';
import {get} from "../../services/rest_service";
import StudentProfile from "../components/profileStudent"
import TeacherProfile from "../components/profileTeacher"
import {useRouter} from "next/router";


function Profile() {
    const router = useRouter();
    const [data,setData]=useState('');
    useEffect(() => {
        get(`/getData/userDetails`).then(async res=> {
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
                    await router.push('/login');
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
