import React, {useEffect,useState } from 'react';
import Layout from '../components/layout';
import {get} from "../../services/rest_service";
import {useRouter} from "next/router";
import StudentResources from "../components/studentResources";
import TeacherResources from "../components/teacherResource";


function Profile() {
    const router = useRouter();
    const [data,setData]=useState('');
    useEffect(() => {
        get(`/getData/userDetails`).then(async res=> {
                if(!res.error){
                    if(res.isStudent){
                        setData(<StudentResources res={res}/>);
                    }
                    else {
                        setData(<TeacherResources res={res}/>);
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
