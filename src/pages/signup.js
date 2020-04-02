import React, { useState } from 'react';
import Layout from '../components/layout';

function SignUp() {
  const initialValues = {
    name: '',
    rollNo: '',
    class: '',
    dept: '',
    college: '',
    emailID: '',
    contactNo: '',
    password: '',
    confirmPassword: '',
    error:''
  };

  const [inputs, setInputs] = useState(initialValues);
  const [error, setError] = useState('');

  const handleSubmit=(e)=>{
    console.log("Clicked");
  };

  function handleInputChange(event) {
    event.persist();
    setInputs({
      ...inputs, [event.target.name]: event.target.value
    });
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
              <div class="rounded-full mx-auto h-20 w-20 mb-6 flex flex-col items-center tracking-wide text-gray-700 text-xs font-bold justify-center bg-gray-200 border border-gray-500">
                <img
                    className="w-full h-full rounded-full"
                    src="https://homepages.cae.wisc.edu/~ece533/images/airplane.png"
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
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
                    Confirm Password
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                         id="password"
                         autoComplete="off"
                         type="password"
                         name="confirmPassword"
                         placeholder=""
                         onChange={handleInputChange}
                         value={inputs.confirmPassword}
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                    College
                  </label>
                  <div className="relative">
                    <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="batch">
                      <option>PSG Tech</option>
                      <option selected="selected">IIT Madras</option>
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
                    <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="fee-duration">
                      {/*<option>CSE</option>*/}
                      {/*<option selected="selected">AMCS</option>*/}
                      {/*<option>EEE</option>*/}
                    </select>
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
                    <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="fee-duration">
                      {/*<option>TCS</option>*/}
                      {/*<option selected="selected">SS</option>*/}
                      {/*<option>DS</option>*/}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                    </div>
                  </div>
                  <p className="text-red-500 text-xs italic whitespace-no-wrap">Please select your college</p>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-2">
                <div class="w-1/2 md:w-1/2 ml-auto px-3 text-right">
                  <button type="submit" className="w-full md:w-40 inline-block bg-gray-700 hover:bg-gray-800 text-white py-2 px-4 rounded">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Layout>
  );
}

export default SignUp;
