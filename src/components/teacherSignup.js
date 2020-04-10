import React from 'react';
import Layout from '../components/layout';
import Link from "next/link";

function  TeacherSignup(props){
  return (
      <div>

          <form className="w-full max-w-lg mx-auto my-0 bg-white p-8 rounded"
          onSubmit={props.onSubmit}
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
                  Name
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                       id="name"
                       autoComplete="name"
                       type="text"
                       name="name"
                       placeholder=""
                       onChange={props.onChange}
                       value={props.teacherInput.name}
                />

                { props.validateStudentName ?
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
                  COLLEGE
                </label>
                <div className="relative">
                  <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  value={props.teacherInput.college}
                  onChange={props.onCollegeChange}
                  id="college"
                  name="college"
                  >
                    <option> </option>
                    {props.colleges}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                  </div>
                </div>
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
                       onChange={props.onChange}
                       value={props.teacherInput.contactNo}
                />
                { props.validateContactNo ?
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
                       onChange={props.onChange}
                       value={props.teacherInput.emailID}
                />
                { props.validateEmailID ?
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
                       onChange={props.onChange}
                       value={props.teacherInput.password}
                />
                { props.validatePassword ?
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
                       onChange={props.onChange}
                       value={props.teacherInput.confirmPassword}
                />
                { props.validateConfirmPassword ?
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
            <div className="flex flex-wrap mb-6">
              <div className=" w-1/2 md:w-1/2 ml-auto mr-auto px-8">
                <button type="button" className="w-full md:w-40 inline-block bg-gray-700 hover:bg-gray-800 text-white py-2 px-4 rounded"
                  onClick={props.onClick}
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
  );
}

export default TeacherSignup;
