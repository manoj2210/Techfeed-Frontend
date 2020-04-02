import React,{useState} from 'react';
import Layout from '../components/layout';



function Signup(){
  const initialValues={
    firstName:'',
    lastName:'',
    rollno:'',
    class:'',
    dept:'',
    college:'',
    email:'',
    phno:'',
    pswd:'',
    cnfrmPswd:''
  };

  const [inputs,setInputs]=useState(initialValues);

  function handleInputChange(event){
    // console.log(event.target.name);
     event.persist();
    setInputs({
      ...inputs,[event.target.name]: event.target.value
    });
  }
  return <div className="m-auto px-4 sm:px-8 min-h-screen text-center">
  <div>
     <h2 className="text-xl leading-tight text-gray-900 mb-5">Welcome to Techfeed</h2>
  </div>
  <div className="bg-white shadow-md rounded px-8 py-6 pb-8 text-center">
  <form >
  <div className="md:flex md:flex-wrap-mx-3 mb-6 justify-center block">

    <div className="w-64 px-3 mb-6 md:mb-0 mx-auto sm:mx-auto md:mx-0">
      <label
       className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="firstname">
        First Name
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
       id="firstname"
       name="firstName"
       onChange={handleInputChange}
       type="text"/>
      <p className="text-red-500 text-xs italic">Please fill out this field.</p>
    </div>

    <div className="w-64 px-3 mb-6 md:mb-0 mx-auto sm:mx-auto md:mx-0">
      <label
      className="block text-gray-700 text-sm font-bold mb-2"
      htmlFor="lastname" >
        Last Name
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="lastname"
      name="lastName"
      onChange={handleInputChange}
      type="text" />
    </div>
  </div>

  <div className="md:flex md:flex-wrap-mx-3 mb-6 justify-center block">

  <div className="w-64 px-3 mb-6 md:mb-0 mx-auto sm:mx-auto md:mx-0">
    <label
    className="block text-gray-700 text-sm font-bold mb-2"
    htmlFor="rollno" >
      Roll number
    </label>
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="rollno"
      name="rollno"
      onChange={handleInputChange}
    type="text" />
   </div>
   <div className="w-64 px-3 mb-6 md:mb-0 mx-auto sm:mx-auto md:mx-0">
     <label
     className="block text-gray-700 text-sm font-bold mb-2"
     htmlFor="class" >
       Class
     </label>
     <input
       className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
       id="class"
       name="class"
       onChange={handleInputChange}
     type="text" />
    </div>

  </div>
  <div className="md:flex md:flex-wrap-mx-3 mb-6 justify-center block">

  <div className="w-64 px-3 mb-6 md:mb-0 mx-auto sm:mx-auto md:mx-0">
    <label
    className="block text-gray-700 text-sm font-bold mb-2"
    htmlFor="dept" >
      Department
    </label>
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="dept"
      name="dept"
      onChange={handleInputChange}
    type="text" />
   </div>
   <div className="w-64 px-3 mb-6 md:mb-0 mx-auto sm:mx-auto md:mx-0">
     <label
     className="block text-gray-700 text-sm font-bold mb-2"
     htmlFor="college" >
       College
     </label>
     <input
       className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
       id="college"
       name="college"
       onChange={handleInputChange}
     type="text" />
    </div>

  </div>
  <div className="md:flex md:flex-wrap-mx-3 mb-6 justify-center block">

  <div className="w-64 px-3 mb-6 md:mb-0 mx-auto sm:mx-auto md:mx-0">
    <label
    className="block text-gray-700 text-sm font-bold mb-2"
    htmlFor="email" >
      Email
    </label>
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="email"
      name="email"
      onChange={handleInputChange}
    type="email" />
   </div>
   <div className="w-64 px-3 mb-6 md:mb-0 mx-auto sm:mx-auto md:mx-0">
     <label
     className="block text-gray-700 text-sm font-bold mb-2"
     htmlFor="phno" >
       Phone number
     </label>
     <input
       className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
       id="phno"
       onChange={handleInputChange}
       name="phno"
       pattern="[0-9]{10}" required
     type="tel" />
    </div>

  </div>
  <div className="md:flex md:flex-wrap-mx-3 mb-6 justify-center block">
  <div className="w-64 px-3 mb-6 md:mb-0 mx-auto sm:mx-auto md:mx-0">
    <label
    className="block text-gray-700 text-sm font-bold mb-2"
    htmlFor="password" >
      Password
    </label>
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="password"
      onChange={handleInputChange}
      name="pswd"
    type="password" />
    <p className="text-gray-600 text-xs italic">Must be 8 characters long</p>
    </div>
    <div className="w-64 px-3 mb-6 md:mb-0 mx-auto sm:mx-auto md:mx-0">
      <label
      className="block text-gray-700 text-sm font-bold mb-2"
      htmlFor="Confirmpassword" >
        Confirm Password
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="Confirmpassword"
        name="cnfrmPswd"
        onChange={handleInputChange}
      type="password" />
      <p className="text-gray-600 text-xs italic">Must be 8 characters long</p>
  </div>
  </div>
  <div>
  <button
      className="bg-orange-500 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      type="submit"
  >
     Sign Up
  </button>
  </div>
</form>
</div>
</div>
}

export default Signup;
