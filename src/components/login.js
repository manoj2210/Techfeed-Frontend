import React, { useState } from 'react';
import { login } from '../../services/login_service';


function Login() {
   const initialValues = {
      username: '',
      password: '',
      grant_type: 'password'
   };
   const [inputs, setInputs] = useState(initialValues);
   const [error, setError] = useState('');

   const handleSubmit = async e => {
      e.preventDefault();
      // const res = await login(inputs);
      // if (!!res.error) setError(res.error_description);
   };

   const handleInputChange = e => {
      e.persist();
      setInputs({
         ...inputs,
         [e.target.name]: e.target.value
      });
   };
   return (
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
                          autoComplete="techFeed-username"
                          type="text"
                          name="username"
                          placeholder=""
                          onChange={handleInputChange}
                          value={inputs.email}
                      />
                   </div>
                   <div className="mb-6">
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
                          autoComplete="techFeed-password"
                          placeholder=""
                          name="password"
                          onChange={handleInputChange}
                          value={inputs.password}
                      />
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
                           Sign In
                        </button>
                   </div>
                </form>
             </div>
          </div>

   );
}

export default Login;
