import React, {useEffect} from 'react';
import Layout from '../components/layout';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import {post} from "../../services/rest_service";
import Link from "next/link";
import {useRouter} from "next/router";

export default function Chapters(props) {
    let data;
    const router=useRouter();
    useEffect(() => {
        if (!!props.serverRender.error) {
            router.push("/resources").then().catch();
        }
    }, []);


    if(props.serverRender.length>0){
        data = props.serverRender.map((dat, index) => {
            return <Tr className="mb-5  mt-2 border-b border-gray-200">
                <Td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-800 whitespace-no-wrap">CO {dat.number}</p>
                </Td>
                <Td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-800 ">{dat.name}</p>
                </Td>
                <Td className="px-5 py-5 border-b border-gray-200 bg-white text-sm ">
                    <Link href={{ pathname: '/materials', query: { cid: props.cid, name: dat.name }}} >
                        <button type='button' className="w-full inline-block bg-gray-700 hover:bg-gray-800 text-white py-2 px-2 rounded">
                            View
                        </button>
                    </Link>
                </Td>
            </Tr>
        });
    }
    return (
        <Layout sideBar={true}>
            <div className="mx-auto px-4 sm:px-8 min-h-screen">
                <div className="py-8">
                    <div className="sm:flex sm:items-center sm:px-4 xl:flex-1 xl:justify-between">
                        <div className="py-4 text-center lg:text-left">
                            <h2 className="text-xl font-semibold leading-tight text-gray-900">{props.cid}</h2>
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
                                            <p className="text-gray-600 whitespace-no-wrap">Course Outcome</p>
                                        </Th>
                                        <Th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                                        >
                                            <p className="text-gray-600 whitespace-no-wrap">Chapter Name</p>
                                        </Th>
                                        <Th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                                        >
                                            <p className="text-gray-600 whitespace-no-wrap">Materials</p>
                                        </Th>

                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {data}
                                </Tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </Layout >

    );
}

Chapters.getInitialProps = async ({query}) => {
    return {serverRender: await post('/getData/chapters',JSON.stringify({cid: query.cid})),cid:query.cid};
};