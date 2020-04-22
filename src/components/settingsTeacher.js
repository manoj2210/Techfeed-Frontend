import React, {useEffect,useState } from 'react';
import Layout from './layout';
import {get, post} from "../../services/rest_service";
import {useRouter} from "next/router";
import {Table, Tbody, Td, Th, Thead, Tr} from "react-super-responsive-table";


function SettingsTeacher() {
    const router = useRouter();
    const [addCourse,setAddCourse]=useState(false);
    const [tData,setTData]=useState([]);
    const [error, setError] = useState('');
    const [alert,setAlert]= useState('');
    const [courses,setCourses]=useState([]);
    const [selCourse,setSelCourse]=useState('');

    const handleError = (e) => {
        setError(e);
        setAlert('');
    };

    const handleChange=e=>{
        setSelCourse(e.target.value);
    };
    const handleAlert = (e) => {
        setError('');
        setAlert(e);
    };

    useEffect(() => {
        get('/getData/teaches').then(res => {
            if (!res.error) {
                setSelCourse(res[0].cid);
                mapData(res);
                get('/getData/base/courses').then(r=>{
                    if(!r.error){
                        let arr=[];
                        for(let x of r){
                            arr.push(<option>{x.cid}</option>);
                        }
                        setCourses(arr);
                    }else {
                        handleError(r.message);
                    }
                })
            }else {
                handleError(res.message);
            }
        });
    },[]);

    const mapData=e=>{
        if(e.length>0){
            setTData(e.map((data,index)=>{
                return <Tr className="mb-5  mt-2 border-b border-gray-200">
                    <Td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-800 whitespace-no-wrap text-center">{data.cid}</p>
                    </Td>
                </Tr>;
            }));
        }
    };

    const handleSubmit=e=>{
        post('/update/teaches',JSON.stringify({cid:selCourse})).then(
            r=>{
                if(!r.error){
                    handleAlert("Added");
                    get('/getData/teaches').then(res => {
                        if (!res.error) {
                            mapData(res);
                        } else {
                            handleError(r.message);
                        }
                    });
                }else {
                    handleError(r.message);
                }
            }
        )
    };

    let AddCourse=<form className="w-full max-w-lg mx-auto my-8 bg-white p-4 rounded"
    >
        <div className="flex flex-wrap -mx-3 mb-3">
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                Course ID
            </label>
            <div className="relative">
                <select
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    value={selCourse}
                    onChange={handleChange}
                    id="selCourse"
                    name="selCourse"
                >
                    {courses}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
            </div>
        </div>
            <div className="flex flex-wrap justify-end w-full mt-6 md:w-1/3">
                <button type="button" className="w-full md:w-20 inline-block bg-gray-700 hover:bg-gray-800 text-white py-2 px-4 rounded"
                    onClick={handleSubmit}
                >
                    Add
                </button>
            </div>
    </div>
    </form>;




    const handleAddCourse=e=>{
        setAddCourse(!addCourse);
    };


    return (
            <div className="mx-auto px-4 sm:px-4 min-h-screen">
                {error ? (
                    <p className="p-3 my-2 text-red-700 bg-red-200">Error: {error}</p>
                ) : null}
                {alert ? (
                    <p className="p-3 my-2 text-green-700 bg-green-200">{alert}</p>
                ) : null}
                <div className="py-8 w-full max-w-lg mx-auto">
                    <div>
                        <h2 className="text-2xl leading-tight text-gray-900 mb-2">Courses</h2>
                        <div className="flex flex-wrap justify-end ">
                            <button
                                onClick={handleAddCourse}
                                type="submit"
                                className="border-solid border-4 border-orange-400 bg-orange-400 p-1 m-2 text-white font-medium rounded-md hover:text-gray-600">
                                Add a Course
                            </button>
                        </div>
                    </div>
                    {
                        addCourse
                            ? AddCourse
                            : null
                    }

                    <form className="w-full max-w-lg mx-auto my-4 bg-white p-4 rounded"
                    >
                        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                                <Table className="min-w-full leading-normal">
                                    <Thead>
                                        <Tr >
                                            {/*<Th*/}
                                            {/*    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"*/}
                                            {/*>*/}
                                            {/*    <p className="text-gray-600 whitespace-no-wrap ">Select</p>*/}
                                            {/*</Th>*/}
                                            <Th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                                            >
                                                <p className="text-gray-600 whitespace-no-wrap text-center">Course ID</p>
                                            </Th>
                                            {/*<Th*/}
                                            {/*    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"*/}
                                            {/*>*/}
                                            {/*    <p className="text-gray-600 whitespace-no-wrap ">Course Name</p>*/}
                                            {/*</Th>*/}
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        {tData}
                                    </Tbody>
                                </Table>
                            </div>
                        </div>
                        {/*<div className="flex flex-wrap justify-end ">*/}
                        {/*    <button type="button" className="w-full md:w-40 inline-block bg-gray-700 hover:bg-gray-800 text-white py-2 px-4 rounded"*/}
                        {/*    >*/}
                        {/*        Remove Selected*/}
                        {/*    </button>*/}
                        {/*</div>*/}
                    </form>
                </div>
            </div>
    );
}

export default SettingsTeacher;
