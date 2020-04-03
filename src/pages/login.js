import React, {useEffect, useState} from 'react';
import {login_call} from '../../services/rest_service';
import Layout from '../components/layout';
import Router from 'next/router';
import fetch from "isomorphic-unfetch";

function Login() {
   const initialValues = {
      rollNo: '',
      password: '',
      collegeName: '',
   };
   const [inputs, setInputs] = useState(initialValues);
   const [error, setError] = useState('');
   const [colleges,setColleges]=useState([]);

   const handleSubmit = async e => {
      e.preventDefault();
      const res = await login_call('/oauth/token',inputs,'student');
      if (!!res.error){
         if(res.status===401) {
            setError(res.message);
         }
         else {
            //Push to Sign Up - No users
            setError(res.message);
         }
      }
      else {
         console.log("Login Success");
      }
   };

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

   const handleInputChange = e => {
      e.persist();
      setInputs({
         ...inputs,
         [e.target.name]: e.target.value
      });
   };
   return (
       <Layout>
          <div className="mx-auto px-4 sm:px-8 min-h-screen">
             <div className="py-8 w-full max-w-xs mx-auto">
                <div>
                   <h2 className="text-xl leading-tight text-gray-900">Login</h2>
                </div>
                {error ? (
                    <p className="p-3 my-2 text-red-700 bg-red-200">Error: {error}</p>
                ) : null}
                <form
                    className="bg-white shadow-md rounded px-8 py-6 pb-8 my-4"
                    onSubmit={handleSubmit}
                >
                   <div className="mb-4">
                      <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="username"
                      >
                         Username
                      </label>
                      <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="username"
                          autoComplete="techfeed-username"
                          type="text"
                          name="rollNo"
                          placeholder=""
                          onChange={handleInputChange}
                          value={inputs.rollNo}
                      />
                   </div>
                   <div className="mb-3">
                      <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="password"
                      >
                         Password
                      </label>
                      <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                          id="password"
                          type="password"
                          autoComplete="techfeed-password"
                          placeholder=""
                          name="password"
                          onChange={handleInputChange}
                          value={inputs.password}
                      />
                   </div>
                   <div className="mb-6">
                      <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="password"
                      >
                         College
                      </label>
                      <div className="relative">
                         <select
                             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                             value={inputs.collegeName}
                             onChange={handleInputChange}
                             id="collegeName"
                             name="collegeName"
                         >
                            <option> </option>
                            {colleges}
                         </select>
                         <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 mb-3 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                         </div>
                      </div>
                   </div>
                   <div className="flex items-center justify-between">
                      <a
                          className="inline-block align-baseline font-bold text-sm text-gray-500 hover:text-gray-800"
                          href="#"
                      >
                         Forgot Password?
                      </a>
                      <button
                          className="bg-orange-500 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                          type="submit"
                      >
                         Login In
                      </button>
                   </div>
                </form>
             </div>
          </div>
       </Layout>
   );
}

export default Login;
