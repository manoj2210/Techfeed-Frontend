import React, { useState,useEffect } from 'react';
import Layout from '../components/layout';
import Link from "next/link";
import fetch from 'isomorphic-unfetch'
import {useRouter} from "next/router";

function SignUp() {
  const initialValues = {
    name: '',
    rollNo: '',
    class: '',
    department: '',
    college: '',
    emailID: '',
    contactNo: '',
    password: '',
    confirmPassword: '',
    error:''
  };

  const router = useRouter();
  //Inputs
  const [inputs, setInputs] = useState(initialValues);
  const [error, setError] = useState('');
  const [colleges,setColleges]=useState([]);
  const [departments,setDepartments]=useState([]);
  const [classes,setClasses]=useState([]);
  //Validation
  const [validateStudentName,setValidationName] = useState(false);
  const [validateRollNo,setValidationRollNo] = useState(false);
  const [validateContactNo,setValidationContactNo] = useState(false);
  const [validateEmailID,setValidationEmailID] = useState(false);
  const [validatePassword,setValidationPassword] = useState(false);
  const [validateConfirmPassword,setValidationConfirmPassword] = useState(false);
  const [isCollegeSelected,setStateCollege] = useState(false);
  const [isDepartmentSelected,setStateDepartment] = useState(false);
  const [validateClass,setValidationClass]=useState(false);

  useEffect(() => {
    fetch(`${process.env.backend_url}/base/getCollege`,{
       crossDomain: true,
       credentials: 'include',
       method: 'get',
     }).then(res=> {
      return res.json();
    }).then(async(r)=>{
      if(!r.error){
        await mapColleges(r);
      }else{
        setError(r.message);
      }
    });
  }, []);

  const mapColleges=e=>{
    setColleges(e.map((data, index) => (
        <option key={index}>{data.Name}</option>
    )));
  };

  const mapDepartments=e=>{
    setDepartments(e.map((data, index) => (
        <option key={index}>{data.Name}</option>
    )));
  };

  const mapClasses=e=>{
    setClasses(e.map((data, index) => (
        <option key={index}>{data.Name}</option>
    )));
  };

  function handleCollegeChange(event) {
    event.persist();
    setInputs({
      ...inputs, [event.target.name]: event.target.value
    });

    let b=JSON.stringify({
      "collegeName": event.target.value
    });
    fetch(`${process.env.backend_url}/base/getDepartment`,{
      crossDomain: true,
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'post',
      body:b
    }).then(res=> {
      return res.json();
    }).then(async(r)=>{
      if(!r.error){
        await mapDepartments(r);
        setStateCollege(true);
        setStateDepartment(false);
        setError(null);
      }else{
        setStateCollege(false);
        setStateDepartment(false);
        setError(r.message);
      }
    });
  }

  function handleDepartmentChange(event) {

    event.persist();
    setInputs({
      ...inputs, [event.target.name]: event.target.value
    });

    let b=JSON.stringify({
      "collegeName":inputs.college,
      "depName": event.target.value
    });

    fetch(`${process.env.backend_url}/base/getClass`,{
      crossDomain: true,
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'post',
      body:b
    }).then(res=> {
      return res.json();
    }).then(async(r)=>{
      if(!r.error){
        await mapClasses(r);
        setStateDepartment(true);
        setError(null);
      }else{
        setError(r.message);
        setStateDepartment(false);
      }
    });
  }


  function handleInputChange(event) {
    event.persist();
    setInputs({
      ...inputs, [event.target.name]: event.target.value
    });
  }


  const validate=(e)=>{
    let v=true;
    if(inputs.name===""){
      //console.log("name is empty");
      setValidationName(true);
      v=false;
    } else {
      setValidationName(false);
    }
    if(inputs.rollNo===""){
      //console.log("roll no is empty");
      setValidationRollNo(true);
      v=false;
    }else {
      setValidationRollNo(false);
    }
    if(inputs.emailID===""){
      //console.log("roll no is empty");
      setValidationEmailID(true);
      v=false;
    }else {
      setValidationEmailID(false);
    }
    if(inputs.contactNo==="" || inputs.contactNo.length!==10){
      //console.log("contact no is empty");
      setValidationContactNo(true);
      v=false;
    }else{
      setValidationContactNo(false);
    }
    if(inputs.password==="" || inputs.password.length<8){
      //console.log("password is empty");
      setValidationPassword(true);
      v=false;
    }else{
      setValidationPassword(false);
    }
    if(inputs.confirmPassword==="" || inputs.confirmPassword!==inputs.password){
      //console.log("confirm Password is empty");
      setValidationConfirmPassword(true);
      v=false;
    }else {
      setValidationConfirmPassword(false);
    }
    if(inputs.class ===""||inputs.class ===" "){
      setValidationClass(true);
      v=false;
    }else {
      setValidationClass(false);
    }
    return v;
  };
  const handleSubmit=(e)=>{
    let v=validate();
    if(v===true){
      fetch(`${process.env.backend_url}/signUp/addStudent`,{
        crossDomain: true,
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'post',
        body:JSON.stringify(inputs)
      }).then(res=> {
        return res.json();
      }).then((r)=>{
        if(!r.error){
          router.push('/login');
        }else{
          setError(r.message);
        }
      });
    }
  };


  return (
      <Layout>
        <div className="mx-auto px-4 sm:px-8 min-h-screen">
          <div className="py-8 w-full max-w-lg mx-auto">
            <div className="flex items-center justify-center">
              <h2 className="text-2xl leading-tight text-gray-900 mb-2">Welcome to Tech Feed</h2>
            </div>
            {error ? (
                <p className="p-3 my-2 text-red-700 bg-red-200">Error: {error}</p>
            ) : null}
            <form className="w-full max-w-lg mx-auto my-4 bg-white p-8 rounded"
            onSubmit={handleSubmit}
            >
              <div className="rounded-full mx-auto h-30 w-20 mb-6 flex flex-col items-center tracking-wide bg-white text-xs font-bold justify-center">
                <img
                    className="w-full h-full bg-white rounded-full"
                    src="/static/Techfeed_Logo.png"
                    alt=""
                />
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                    Student Name
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

                  { validateStudentName ?
                    <div>
                    <p className="my-2 text-xs text-red-700">
                    <em>* Please enter your name</em>
                    </p>
                    </div>
                    :
                    null
                  }

                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                    Roll Number
                  </label>
                  <input className="appearance-none uppercase block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 "
                         id="rollNumber"
                         autoComplete="techfeed-rollNo"
                         autoCapitalize='characters'
                         type="text"
                         name="rollNo"
                         placeholder=""
                         onChange={handleInputChange}
                         value={inputs.rollNo}
                  />
                  { validateRollNo ?
                    <div>
                    <p className="my-2 text-xs text-red-700">
                    <em>* Please enter your roll number</em>
                    </p>
                    </div>
                    :
                    null
                  }
                </div>

              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
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
                  { validateContactNo ?
                    <div>
                    <p className="my-2 text-xs text-red-700">
                    <em>* Please enter a valid contact</em>
                    </p>
                    </div>
                    :
                    null
                  }
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                    Email
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                         id="email"
                         autoComplete="email"
                         type="text"
                         name="emailID"
                         placeholder=""
                         onChange={handleInputChange}
                         value={inputs.emailID}
                  />
                  { validateEmailID ?
                      <div>
                        <p className="my-2 text-xs text-red-700">
                          <em>* Please enter a valid email</em>
                        </p>
                      </div>
                      :
                      null
                  }
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                    Password
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                         id="password"
                         autoComplete="password"
                         type="password"
                         name="password"
                         placeholder=""
                         onChange={handleInputChange}
                         value={inputs.password}
                  />
                  { validatePassword ?
                    <div>
                    <p className="my-2 text-xs text-red-700">
                    <em>Please enter a valid password</em>
                    </p>
                    </div>
                    :
                    null
                  }
                  <div>
                    <p className="my-2 text-xs text-gray-500">
                      <em>Must be 8 characters long</em>
                    </p>
                  </div>
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
                    Confirm Password
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                         id="confirmPassword"
                         autoComplete="off"
                         type="password"
                         name="confirmPassword"
                         placeholder=""
                         onChange={handleInputChange}
                         value={inputs.confirmPassword}
                  />
                  { validateConfirmPassword ?
                    <div>
                    <p className="my-2 text-xs text-red-700">
                    <em>Password doesn't match</em>
                    </p>
                    </div>
                    :
                    null
                  }
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-3">
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                    College
                  </label>
                  <div className="relative">
                    <select
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    value={inputs.college}
                    onChange={handleCollegeChange}
                    id="college"
                    name="college"
                    >
                      <option> </option>
                      {colleges}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                    Department
                  </label>
                  <div className="relative">
                  {  isCollegeSelected ?
                    <select
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="department"
                    name="department"
                    value={inputs.department}
                    onChange={handleDepartmentChange}
                    >
                          <option> </option>
                      {departments}

                    </select>
                    :
                      <label className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                        <option  value="selected"> </option>
                      </label>
                    }
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                    </div>
                  </div>
                  {!isCollegeSelected ?
                      <p className="my-2 text-xs text-red-700">
                        <em>* Please select the college</em>
                      </p>
                      :
                      null
                  }
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                    Class
                  </label>
                  <div className="relative">
                    {
                      isDepartmentSelected ?
                      <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="class"
                      name="class"
                      value={inputs.class}
                      onChange={handleInputChange}
                      >
                            <option> </option>
                        {classes}
                      </select>
                      :
                      <label className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                            <option value="selected"> </option>
                      </label>
                    }

                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                    </div>
                  </div>
                  {!isDepartmentSelected ?
                      <p className="my-2 text-xs text-red-700">
                        <em>* Please select the department</em>
                      </p>
                      :
                      null
                  }
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
                <Link href="/login"><a className="text-blue-500 hover:underline ">Already have account login</a></Link>
              </div>
            </form>
          </div>
        </div>
      </Layout>
  );
}

export default SignUp;
