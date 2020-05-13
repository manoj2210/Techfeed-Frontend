import React, {useState} from 'react';
import Layout from '../components/layout';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import {get} from "../../services/rest_service";
import Link from "next/link";
import {useRouter} from "next/router";

const {useEffect} = require("react");

 function StudentResources(props) {

     const router = useRouter();
     const [data,setData]=useState('');
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
        get('/getData/courses').then(
            r=>{
                if(!r.error){
                    map(r);
                }
                else {
                    if (r.status === 401) {
                        handleError('Please Login');
                        setTimeout(async function () {
                            await router.push("/login")
                        }, 3000);
                    } else {
                        handleError(r.message);
                    }
                }
            }
        );
    },[]);


    const map=e=>{
         setData( e.map((dat, index) => {
            return <Tr className="mb-5  mt-2 border-b border-gray-200">
                <Td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-800 whitespace-no-wrap">{dat.cid}</p>
                </Td>
                <Td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-800 ">{dat.name}</p>
                </Td>
                <Td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <Link href={{ pathname: '/chapters', query: { cid: dat.cid }}} >
                        <button type='button' className="w-full inline-block bg-gray-700 hover:bg-gray-800 text-white py-2 px-2 rounded">
                        View
                        </button>
                    </Link>
                </Td>
            </Tr>
        }));
    };
    return (

            <div className="mx-auto px-4 sm:px-8 min-h-screen">
                {error ? (
                    <p className="p-3 my-2 text-red-700 bg-red-200">Error: {error}</p>
                ) : null}
                {alert ? (
                    <p className="p-3 my-2 text-green-700 bg-green-200">{alert}</p>
                ) : null}
                <div className="py-8">
                    <div className="sm:flex sm:items-center sm:px-4 xl:flex-1 xl:justify-between">
                        <div className="py-4 text-center lg:text-left">
                            <h2 className="text-xl font-semibold leading-tight text-gray-900">{props.res.details.class}</h2>
                        </div>
                    </div>
                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                            <Table className="min-w-full leading-normal">
                                <Thead>
                                <Tr >
                                    <Th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                                    >
                                        <p className="text-gray-600 whitespace-no-wrap">Course ID</p>
                                    </Th>
                                    <Th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                                    >
                                        <p className="text-gray-600 whitespace-no-wrap">Course Name</p>
                                    </Th>
                                    {/*<Th*/}
                                    {/*    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"*/}
                                    {/*>*/}
                                    {/*    <p className="text-gray-600 whitespace-no-wrap">Faculty</p>*/}
                                    {/*</Th>*/}
                                    <Th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                                    >
                                        <p className="text-gray-600 whitespace-no-wrap">Resources</p>
                                    </Th>

                                </Tr>
                                </Thead>
                                {data}
                            </Table>
                        </div>
                    </div>
                </div>
            </div>


    );
}

// StudentResources.getInitialProps=async ctx =>{
//     return {serverRender: await get('/getData/courses'),details: await get('/getData/userDetails')};
// };

export default StudentResources;