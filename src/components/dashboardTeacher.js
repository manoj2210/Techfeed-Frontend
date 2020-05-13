import React ,{useState,useEffect} from 'react';
import {get,post} from "../../services/rest_service";
import {useRouter} from "next/router";
import {Table, Td, Th, Thead, Tr} from "react-super-responsive-table";

function TeacherDashboard() {
    const router = useRouter();

    const [isInputSelected, setInputSelected] = useState(false);
    const [announcement, setAnnouncement] = useState("");
    const [title, setTitle] = useState("");
    const [cid, setCid] = useState("");
    const [data, setData] = useState([]);
    const [error, setError] = useState('');
    const [alert, setAlert] = useState('');
    const [tableData, setTableData] = useState([]);
    const [tData, setTData] = useState([]);

    const handleClick = (e) => {
        setInputSelected(!isInputSelected);
    };

    useEffect(() => {
        get('/getData/announcements').then(res => {
            if (!res.error) {
                mapData(res);
                get(`/getData/teaches`).then(async res => {
                        if (!res.error) {
                            if (res.length > 0) {
                                let arr = [];
                                setCid(res[0].cid);
                                for (let x of res) {
                                    arr.push(<option>{x.cid}</option>);
                                }
                                setData(arr);
                            }else {
                                handleError('Please subscribe at least one course');
                                setTimeout(async function (){
                                    await router.push("/settings")
                                },3000);
                            }
                        } else {
                            if(res.status === 401){
                                handleError('Please Login');
                                setTimeout(async function (){
                                    await router.push("/login")
                                },3000);
                            }else {
                                handleError(res.message);
                            }
                        }
                    }
                );
            } else {
                if(res.status === 401){
                    handleError('Please Login');
                    setTimeout(async function (){
                        await router.push("/login")
                    },3000);
                }else {
                    handleError(res.message);
                }
            }
        })

    }, []);


    const mapData = e => {
        if (e.length > 0) {
            setTData(e.map((data, index) => {
                return <Tr className="mb-5  mt-2 border-b border-gray-200">
                    <Td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-800 whitespace-no-wrap">{data[0].title}</p>
                    </Td>
                    <Td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-800 ">{data[0].announcement}</p>
                    </Td>
                    <Td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-800 ">{data[0].time}</p>
                    </Td>
                </Tr>;
            }));
        }
    };

    const handleChange = (e) => {
        setAnnouncement(e.target.value);
    };

    const handleCourseChange = e => {
        setCid(e.target.value);
    };

    const handleTitleChange = e => {
        setTitle(e.target.value);
    };

    const handleError = (e) => {
        setError(e);
        setAlert('');
    };

    const handleAlert = (e) => {
        setError('');
        setAlert(e);
    };

    const handleSubmit = (e) => {
        console.log(announcement);
        post('/update/announcement', JSON.stringify({announcement: announcement, title: title, cid: cid}))
            .then(res => {
                if (!res.error) {
                    handleAlert('Announced !!');
                    setTimeout(async function (){
                        handleAlert('');
                    },3000);
                    get('/getData/announcements').then(r => {
                        if (!r.error) {
                            mapData(r);
                        } else {
                            if(r.status === 401){
                                handleError('Please Login');
                                setTimeout(async function (){
                                    await router.push("/login")
                                },3000);
                            }else {
                                handleError(res.message);
                            }
                        }
                    });
                } else {
                    if(res.status === 401){
                        handleError('Please Login');
                        setTimeout(async function (){
                            await router.push("/login")
                        },3000);
                    }else {
                        handleError(res.message);
                    }
                }
            }).catch();
    };


    return (
        <div>
            <div className="flex flex-col items-left">
                {error ? (
                    <p className="p-3 my-2 text-red-700 bg-red-200">Error: {error}</p>
                ) : null}
                {alert ? (
                    <p className="p-3 my-2 text-green-700 bg-green-200">{alert}</p>
                ) : null}
                <div className="mt-6">
                    <p className="m-6 inline p-2 text-xl text-gray-600">Announcements</p>
                    <button
                        onClick={handleClick}
                        type="button"
                        className="border-solid border-4 border-orange-400 bg-orange-400 p-1 text-white font-medium rounded-md hover:text-gray-600">
                        add
                    </button>
                </div>
                {
                    isInputSelected ?
                        <div className="flex flex-col items-left justify-center">
                            <form className="m-6 p-3">
                                <div className="flex flex-wrap -mx-3 mb-6 justify-center">
                                    <div
                                        className="md:w-1/6 px-1 mb-6 md:mb-0 flex-wrap flex justify-center items-center">
                                        <label className="uppercase text-gray-700 text-xs text-center font-bold">
                                            Title
                                        </label>
                                    </div>
                                    <div className="md:w-5/6 mb-6 md:mb-0">
                                        <textarea onChange={handleTitleChange} className="block px-2 w-full"
                                                  name="title"/>
                                    </div>
                                </div>
                                <div className="flex flex-wrap -mx-3 mb-6 justify-center">
                                    <div
                                        className="md:w-1/6 px-1 mb-6 md:mb-0 flex-wrap flex justify-center items-center">
                                        <label className="uppercase text-gray-700 text-xs text-center font-bold">
                                            Content
                                        </label>
                                    </div>
                                    <div className="md:w-5/6 mb-6 md:mb-0">
                                        <div>
                                            <textarea onChange={handleChange} className="block px-2 w-full" rows="5"
                                                      name="announcement"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-wrap flex justify-center items-start">
                                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                        <label
                                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                            htmlFor="grid-state">
                                            Course
                                        </label>
                                        <div className="relative">
                                            <select
                                                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                value={cid}
                                                onChange={handleCourseChange}
                                                id="college"
                                                name="college"
                                            >
                                                {data}
                                            </select>
                                            <div
                                                className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                                                     viewBox="0 0 20 20">
                                                    <path
                                                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-1/3 px-3 mb-6 md:mb-0">
                                        <button type='button'
                                                onClick={handleSubmit}
                                                className="mt-6 border-solid border-4 border-orange-400 bg-orange-400 p-1 text-white font-medium rounded-md hover:text-gray-600">
                                            submit
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        :
                        null
                }
            </div>
            <div className="mx-auto px-4 sm:px-8 min-h-screen">
                <div className="py-8">
                    <div className="sm:flex sm:items-center sm:px-4 xl:flex-1 xl:justify-between">
                        <div className="py-4 text-center lg:text-left">
                            <h2 className="text-xl font-semibold leading-tight text-gray-900">Announcements</h2>
                        </div>
                    </div>
                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                            <Table className="min-w-full leading-normal">
                                <Thead>
                                    <Tr>
                                        <Th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                                        >
                                            <p className="text-gray-600 whitespace-no-wrap">Title</p>
                                        </Th>
                                        <Th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                                        >
                                            <p className="text-gray-600 whitespace-no-wrap">Homework</p>
                                        </Th>
                                        <Th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                                        >
                                            <p className="text-gray-600 whitespace-no-wrap">Upload time</p>
                                        </Th>

                                    </Tr>
                                </Thead>
                                {tData}
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TeacherDashboard;
