import React, {useEffect, useState} from 'react';
import {login_call} from '../../services/rest_service';
import Layout from '../components/layout';
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import {useRouter} from "next/router";

function Login() {
   const router = useRouter();

   const styles = ["cursor-pointer bg-gray-400 hover:bg-gray-300  rounded focus:outline-none focus:shadow-outline m-0 flex-1 text-center w-1/2 transition duration-300", "cursor-pointer border-none bg-gray m-0 flex-1 text-center w-1/2 transition duration-300"];

   const [studentIndex,setStudentIndex]=useState(0);
   const [teacherIndex,setTeacherIndex]=useState(1);
   const [userId,setUserId]=useState('Roll Number');
   const [fetchDetails,setFetchDetails]=useState('student');
   function handleTabChange(e){
      if(e.target.id==='Teacher'){
         setUserId('Email ID');
         setTeacherIndex(0);
         setStudentIndex(1);
         setFetchDetails('teacher');
         setInputs(initialValues);
      }
      else{
         setUserId('Roll Number');
         setStudentIndex(0);
         setTeacherIndex(1);
         setFetchDetails('teacher');
         setInputs(initialValues);
      }
   }
   const initialValues = {
      userName: '',
      password: '',
      collegeName: '',
   };
   const [inputs, setInputs] = useState(initialValues);
   const [error, setError] = useState('');
   const [alert,setAlert]=useState('');
   const [colleges,setColleges]=useState([]);

   const handleSubmit = async e => {
      e.preventDefault();
      const res = await login_call('/oauth/token',inputs,fetchDetails);
      if (!!res.error){
         if(res.status===401) {
            handleError(res.message);
         }
         else {
            //Push to Sign Up - No users
            handleError(res.message);
         }
      }
      else {
         handleAlert("Login Success");
         await router.push('/');
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
            handleError(r.message);
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
   const handleError = (e) => {
      setError(e);
      setAlert('');
   };

   const handleAlert = (e) => {
      setError('');
      setAlert(e);
   };
   return (
       <Layout>
          <div className="mx-auto px-4 sm:px-8 min-h-screen">
             <div className="py-8 w-full max-w-xs mx-auto">
                <div>
                   <h2 className="text-2xl leading-tight text-gray-900 mb-6">Login</h2>
                </div>
                {error ? (
                    <p className="p-3 my-2 text-red-700 bg-red-200">Error: {error}</p>
                ) : null}
                {alert ? (
                    <p className="p-3 my-2 text-green-700 bg-green-200">{alert}</p>
                ) : null}
                <div className="header flex">
                   <div
                       className={styles[studentIndex]}
                   >
                      <h2
                          onClick={handleTabChange}
                          className="m-0 pt-2 pb-2 text-xl leading-tight text-gray-800"
                          id='Student'
                      >Student</h2>
                   </div>
                   <div
                       className={styles[teacherIndex]}
                   >
                      <h2
                          onClick={handleTabChange}
                          className="m-0 pt-2 pb-2 text-xl leading-tight text-gray-800"
                          id='Teacher'>
                         Teacher</h2>
                   </div>
                </div>
                <form
                    className="m-0 bg-white shadow-md rounded-b px-8 py-6 pb-8"
                    onSubmit={handleSubmit}
                >

                   <div className="mb-4">
                      <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="username"
                      >
                         {userId}
                      </label>
                      <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="username"
                          autoComplete="techfeed-username"
                          type="text"
                          name="userName"
                          placeholder=""
                          onChange={handleInputChange}
                          value={inputs.userName}
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
                         Login
                      </button>
                   </div>
                   <div className="flex items-center justify-center w-full md:full mt-5">
                      <Link href="/signup"><a className="text-blue-500 hover:underline ">New User - SignUp</a></Link>
                   </div>
                </form>
             </div>
          </div>
       </Layout>
   );
}

export default Login;
