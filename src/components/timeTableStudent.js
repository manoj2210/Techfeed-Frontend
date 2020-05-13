import React,{useEffect,useState} from 'react';
import Timeline from "../components/timeline";
import {get} from '../../services/rest_service';
import {useRouter} from "next/router";

function TimeTableStudent(){

    const router = useRouter();
    const currentDate = new Date();
    const currentDay = currentDate.getDay() !== 0 ?  currentDate.getDay()-1 : 6;
    const [data,setData]=useState({});
    const [error, setError] = useState('');
    const [alert,setAlert]= useState('');
    const handleError = (e) => {
        setError(e);
        setAlert('');
    };

    const handleAlert = (e) => {
        setError('');
        setAlert(e);
    };

    useEffect(()=>{
        get('/getData/timeTable').then(r=>{
            if(!r.error){
                setData(r.timeTable[currentDay]);
            }else{
                if (r.status === 401) {
                    handleError('Please Login');
                    setTimeout(async function () {
                        await router.push("/login")
                    }, 3000);
                } else {
                    handleError(r.message);
                }
            }
        })
    },[]);

    return(
        <div className="mx-auto px-4 sm:px-8 min-h-screen bg-gray-300">
            {error ? (
                <p className="p-3 my-2 text-red-700 bg-red-200">Error: {error}</p>
            ) : null}
            {alert ? (
                <p className="p-3 my-2 text-green-700 bg-green-200">{alert}</p>
            ) : null}
                <Timeline data={data}/>
        </div>
    );
}


export default TimeTableStudent;


