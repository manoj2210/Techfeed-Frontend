import React, { useState,useEffect } from 'react';
import Link from "next/link";
import {post,get} from "../../services/rest_service";
import {useRouter} from "next/router";

function Profile(props) {
    const initialValues = {
        name: '',
        rollNo: '',
        college: '',
        emailID: '',
        contactNo: '',
    };

    const router = useRouter();
    //Inputs
    const [inputs, setInputs] = useState(initialValues);
    const [error, setError] = useState('');
    const [alert,setAlert]= useState('');

    const validationValues={
        name: false,
        contactNo: false,
    };
    //Validation
    const [validation,setValidation] = useState(validationValues);

    function handleValidationChange(event,state) {
        setValidation({
            ...validation, event: state
        });
    }

    const validate=(e)=>{
        let v=true;
        if(inputs.name!== ""){
            handleValidationChange('name',false);
        } else{
            handleValidationChange('name',true);
            v=false;
        }
        if(inputs.contactNo !== "" && inputs.contactNo.length ===10){
            handleValidationChange('contactNo',false);
        } else{
            handleValidationChange('contactNo',true);
            v=false;
        }
        return v;
    };

    const handleSubmit=(e)=>{
        let v=validate();
        if (v===true){
            post('/update/userDetails',JSON.stringify(inputs)).then((r) => {
                    if (!r.error) {
                        get(`/getData/userDetails`).then(res=> {
                                if (!res.error) {
                                    setInputs(res.details);
                                }
                                else{
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
                        handleAlert("Successfully Updated");
                        setTimeout(async function (){
                            handleAlert('');
                        },3000);
                    } else {
                        if(r.status === 401){
                            handleError('Please Login');
                            setTimeout(async function (){
                                await router.push("/login")
                            },3000);
                        }else {
                            handleError(r.message);
                        }
                    }
                }
            );
        }
    };

    const handleError = (e) => {
        setError(e);
        setAlert('');
    };

    const handleAlert = (e) => {
        setError('');
        setAlert(e);
    };


    useEffect(() => {
        if (!props.res.error) {
            setInputs(props.res.details);

        }
        else{
            if(props.res.status === 401){
                handleError('Please Login');
                setTimeout(async function (){
                    await router.push("/login")
                },3000);
            }else {
                handleError(props.res.message);
            }
        }
    }, []);


    function handleInputChange(event) {
        event.persist();
        setInputs({
            ...inputs, [event.target.name]: event.target.value
        });
    }



    return (
        <div className="mx-auto px-4 sm:px-8 min-h-screen">
            <div className="py-8 w-full max-w-lg mx-auto">
                <div className="flex">
                    <h2 className="text-2xl leading-tight text-gray-900 mb-2">Profile</h2>
                </div>
                {error ? (
                    <p className="p-3 my-2 text-red-700 bg-red-200">Error: {error}</p>
                ) : null}
                {alert ? (
                    <p className="p-3 my-2 text-green-700 bg-green-200">{alert}</p>
                ) : null}
                <form className="w-full max-w-lg mx-auto my-4 bg-white p-8 rounded"
                >
                    <div className="rounded-full mx-auto h-30 w-20 mb-6 flex flex-col items-center tracking-wide bg-white text-xs font-bold justify-center">
                        <img
                            className="w-full h-full bg-white rounded-full"
                            src="/static/Techfeed_Logo.png"
                            alt="Upload ur pic"
                        />
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                Teacher Name
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                   id="name"
                                   autoComplete="name"
                                   type="text"
                                   name="name"
                                   placeholder=""
                                   onChange={handleInputChange}
                                   value={inputs.name}
                            />

                            { validation.name ?
                                <div>
                                    <p className="my-2 text-xs text-red-700">
                                        <em>* Please enter your name</em>
                                    </p>
                                </div>
                                :
                                null
                            }

                        </div>
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                Contact Number
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                   id="contactNumber"
                                   autoComplete="tel"
                                   type="number"
                                   name="contactNo"
                                   placeholder=""
                                   onChange={handleInputChange}
                                   value={inputs.contactNo}
                            />
                            { validation.contactNo ?
                                <div>
                                    <p className="my-2 text-xs text-red-700">
                                        <em>* Please enter a valid contact</em>
                                    </p>
                                </div>
                                :
                                null
                            }
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                Email
                            </label>
                            <label className="appearance-none uppercase block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 "
                            >{inputs.emailID}</label>
                        </div>
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                College
                            </label>
                            <div className="relative">
                                <label className="appearance-none uppercase block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 "
                                >{inputs.college}</label>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap mb-6">
                        <div className=" w-1/2 md:w-1/2 ml-auto mr-auto px-8">
                            <button type="button" className="w-full md:w-40 inline-block bg-gray-700 hover:bg-gray-800 text-white py-2 px-4 rounded"
                                    onClick={handleSubmit}
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center justify-center w-full md:full ">
                        <Link href="/password"><a className="text-blue-500 hover:underline ">Update Password</a></Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Profile;
