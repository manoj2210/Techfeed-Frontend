import React from 'react';
import Layout from '../components/layout';

function Signup(){
  return <div className="mx-auto px-4 sm:px-8 min-h-screen">
  <div>
     <h2 className="text-xl leading-tight text-gray-900">Signup</h2>
  </div>
  <form className="bg-white shadow-md rounded px-8 py-6 pb-8 my-4">
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-16 md:w-64 px-3 mb-6 md:mb-0">
      <label
       className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="firstname">
        First Name
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
       id="firstname"
       type="text"/>
      <p class="text-red-500 text-xs italic">Please fill out this field.</p>
    </div>

    <div class="w-full md:w-64 px-3">
      <label
      className="block text-gray-700 text-sm font-bold mb-2"
      htmlfor="lastname" >
        Last Name
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="lastname"
      type="text" />
    </div>
  </div>

  <div class="flex flex-wrap -mx-3 mb-6 w-full md:w-64">

  <div class="w-full ms:w-1/2 px-3">
    <label
    className="block text-gray-700 text-sm font-bold mb-2"
    htmlfor="rollno" >
      Rollno
    </label>
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="rollno"
    type="text" />
   </div>

    <div class="w-full px-3">
      <label
      className="block text-gray-700 text-sm font-bold mb-2"
      htmlfor="password" >
        Password
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="password"
      type="password" />
      <p class="text-gray-600 text-xs italic">Must be 8 characters long</p>
    </div>
  </div>

  <div class="flex flex-wrap -mx-3 mb-2">
    <div class="w-full md:w-64 px-3 mb-6 md:mb-0">
      <label
      className="block text-gray-700 text-sm font-bold mb-2"
      for="grid-city">
        City
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="grid-city"
      type="text" />
    </div>
    <div class="w-full md:w-64 px-3 mb-6 md:mb-0">
      <label
      className="block text-gray-700 text-sm font-bold mb-2"
      for="grid-state">
        State
      </label>
      <div class="relative">
        <select
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="grid-state">
          <option>New Mexico</option>
          <option>Missouri</option>
          <option>Texas</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <div class="w-full md:w-64 px-3 mb-6 md:mb-0">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="grid-zip">
        Zip
      </label>
      <input   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
       id="grid-zip" type="text"  />
    </div>
  </div>
</form>
</div>
}

export default Signup;
