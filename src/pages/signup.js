import React, { useState } from 'react';
import Layout from '../components/layout';

function SignUp() {
  const initialValues = {
    name: '',
    rollNo: '',
    class: '',
    deparetment: '',
    college: '',
    emailID: '',
    contactNo: '',
    password: '',
    confirmPassword: '',
    error:''
  };

  const [inputs, setInputs] = useState(initialValues);
  const [error, setError] = useState('');
  const [validateStudentName,setVaildationName] = useState(false);
  const [validateRollNo,setValidationRollNo] = useState(false);
  const [validateContactNo,setValidationContactNo] = useState(false);
  const [validatePassword,setValidationPassword] = useState(false);
  const [validateConfirmPassword,setValidationConfirmPassword] = useState(false);
  const [isCollegeSelected,setStateCollege] = useState(false);
  const [isDepartmentSelected,setStateDeparetment] = useState(false);

  const handleSubmit=(e)=>{
    //name validation
    if(initialValues.name===""){
      //console.log("name is empty");
      setVaildationName(true);
    }
    if(initialValues.rollNo===""){
      //console.log("roll no is empty");
      setValidationRollNo(true);
    }
    if(initialValues.contactNo==="" || initialValues.contactNo.length!==10){
      //console.log("contact no is empty");
      setValidationContactNo(true);
    }
    if(initialValues.password==="" || initialValues.password.length!==8){
      //console.log("password is empty");
      setValidationPassword(true);
    }
    if(initialValues.confirmPassword==="" || initialValues.confirmPassword!==initialValues.password){
      //console.log("confirm Password is empty");
      setValidationConfirmPassword(true);
    }
  };


  function handleInputChange(event) {
    event.persist();
    setInputs({
      ...inputs, [event.target.name]: event.target.value
    });
  }

  function handleCollege(event){
        if(!event.target.value){
      //console.log("college changed to null");
      setStateCollege(false);

    }
    else{
      setStateCollege(true);
    }
  }

  function handleDepartment(event){

    if(!event.target.value){
      setStateDeparetment(false);

    }
    else{
      setStateDeparetment(true);
    }
  }
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
              <div className="rounded-full mx-auto h-20 w-20 mb-6 flex flex-col items-center tracking-wide text-gray-700 text-xs font-bold justify-center bg-gray-200 border border-gray-500">
                <img
                    className="w-full h-full rounded-full"
                    src="#"
                    alt="Techfeed logo"
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
                    <p className="p-3 my-2 text-red-700">
                    <em>Please fill the name</em>
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
                    <p className="p-3 my-2 text-red-700">
                    <em>Please fill you roll number</em>
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
                    <p className="p-3 my-2 text-red-700">
                    <em>Please fill your mobile number correctly</em>
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
                    <p className="p-3 my-2 text-red-700">
                    <em>Please fill the password correctly</em>
                    </p>
                    </div>
                    :
                    <div>
                    <p className="p-3 my-2 text-gray-500">
                    <em>Must be 8 characters long</em>
                    </p>
                    </div>
                  }
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
                    <p className="p-3 my-2 text-red-700">
                    <em>Please fill the password correctly</em>
                    </p>
                    </div>
                    :
                    null
                  }
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                    College
                  </label>
                  <div className="relative">
                    <select
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="college"
                    name="college"
                    onChange={handleCollege}>
                      <option > </option>
                      <option>PSG Tech</option>
                      <option>IIT Madras</option>
                      <option>NIT Trichy</option>
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
                    onChange={handleDepartment}
                    >
                          <option> </option>
                          <option>CSE</option>
                          <option>AMCS</option>
                          <option>EEE</option>
                    </select>
                    :
                    <select
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="department"
                    name="department"
                    onChange={handleCollege}
                    >
                          <option value="selected"> </option>
                    </select>
                    }
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                    </div>
                  </div>
                  <p className="text-red-500 text-xs italic whitespace-no-wrap">Please select your college</p>
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
                      name="class">
                            <option value="selected"> </option>
                            <option>TCS</option>
                            <option>SS</option>
                            <option>DS</option>
                      </select>
                      :
                      <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="class"
                      name="class"
                      onChange={handleDepartment}>
                            <option value="selected"> </option>
                      </select>
                    }

                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                    </div>
                  </div>
                  <p className="text-red-500 text-xs italic whitespace-no-wrap">Please select your college</p>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-1/2 md:w-1/2 ml-auto px-3 text-right">
                  <button type="submit" className="w-full md:w-40 inline-block bg-gray-700 hover:bg-gray-800 text-white py-2 px-4 rounded">
                    Submit
                  </button>
                </div>
                 <div className="w-1/2 md:w-1/2 ml-auto px-3 text-right">
                 <a href="#"><em className="text-blue-500">Already have account login</em></a>
                 </div>
              </div>
            </form>
          </div>
        </div>
      </Layout>
  );
}

export default SignUp;
