import React from 'react';
import Layout from '../components/layout';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

export default function Resources(props) {
    return (
        <Layout sideBar={true}>
            <div className="mx-auto px-4 sm:px-8 min-h-screen">
                <div className="py-8">
                    <div className="sm:flex sm:items-center sm:px-4 xl:flex-1 xl:justify-between">
                        <div className="py-4 text-center lg:text-left">
                            <h2 className="text-xl font-semibold leading-tight text-gray-900">Course Name</h2>
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
                                    <Th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                                    >
                                        <p className="text-gray-600 whitespace-no-wrap">Faculty</p>
                                    </Th>
                                    <Th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                                    >
                                        <p className="text-gray-600 whitespace-no-wrap">Resources</p>
                                    </Th>

                                </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr className="mb-5  mt-2 border-b border-gray-200">
                                        <Td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p className="text-gray-800 whitespace-no-wrap">18XT45</p>
                                        </Td>
                                        <Td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p className="text-gray-800 ">Networks and Data Communication</p>
                                        </Td>
                                        <Td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p className="text-gray-800 ">Krithika</p>
                                        </Td>
                                        <Td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                                            <button type="button"
                                                    className="w-full inline-block bg-gray-700 hover:bg-gray-800 text-white py-2 px-2 rounded"
                                            >
                                            View
                                            </button>
                                        </Td>
                                    </Tr>
                                    <Tr className="mb-5 border-b border-gray-200">
                                        <Td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p className="text-gray-800 whitespace-no-wrap">18XT45</p>
                                        </Td>
                                        <Td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p className="text-gray-800 ">Networks and Data Communication</p>
                                        </Td>
                                        <Td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p className="text-gray-800 ">Krithika</p>
                                        </Td>
                                        <Td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                                            <button type="button"
                                                    className="w-full inline-block bg-gray-700 hover:bg-gray-800 text-white py-2 px-2 rounded"
                                            >
                                                View
                                            </button>
                                        </Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </Layout >

    );
}