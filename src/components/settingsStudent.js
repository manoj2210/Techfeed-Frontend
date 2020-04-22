import React, {useEffect,useState } from 'react';
import Layout from './layout';
import {get, post} from "../../services/rest_service";
import {useRouter} from "next/router";
import {Table, Tbody, Td, Th, Thead, Tr} from "react-super-responsive-table";


function SettingsStudent() {
    const router = useRouter();
    const [addCourse,setAddCourse]=useState(false);
    const [tData,setTData]=useState([]);
    const [error, setError] = useState('');
    const [alert,setAlert]= useState('');
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
        get('/getData/courses').then(r=>{
            if(!r.error){
                console.log(r);
                mapData(r);
            }else {
                handleError(r.message);
            }
        })

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
                    </div>
                    {/*{*/}
                    {/*    addCourse*/}
                    {/*        ? AddCourse*/}
                    {/*        : null*/}
                    {/*}*/}

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

export default SettingsStudent;
