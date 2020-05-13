import React,{useEffect,useState} from 'react';
import Layout from '../components/layout';
import {useRouter} from "next/router";
import {get} from "../../services/rest_service";
import SettingsStudent from "../components/settingsStudent";
import SettingsTeacher from "../components/settingsTeacher";

function Settings(){
    const router = useRouter();
    const [data,setData]=useState('');
    useEffect(() => {
        get(`/getData/userDetails`).then(async res=> {
                if(!res.error){
                    if(res.isStudent){
                        console.log("Hi");
                        setData(<SettingsStudent res={res}/>);
                    }
                    else {
                        setData(<SettingsTeacher res={res}/>);
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

    return <Layout sideBar={true}>
        {data}
    </Layout>
}
export default Settings;
