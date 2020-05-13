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
                    if (res.status === 401) {
                        setTimeout(async function () {
                            await router.push("/login")
                        }, 100);
                    }
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
