import React,{useMemo,useState} from 'react';
import Layout from './layout';
import FilePicker from './filepicker';

function TeacherUploadResource(){

  const [isCourseSelected,setCourseSelected]=useState(false);
  const [isUnitSelected,setUnitSelected]=useState(false);

  function handleCourse(e){
    if(!e.target.value){
      setCourseSelected(false)
    }
    else{
      setCourseSelected(true)
    }
  }

  function handleUnit(e){
    if(e.target.value!=="null"){
      setUnitSelected(function(prev){
        return !prev
      })
    }
  }
  return (
      <div className="mx-auto px-4 sm:px-8 min-h-screen">
        <div className="py-8 w-full max-w-lg mx-auto">
          <div className="flex">
            <h2 className="text-2xl leading-tight text-gray-900 mb-2">Upload Resources</h2>
          </div>
          <form className="w-full max-w-lg mx-auto my-4 bg-white p-8 rounded"
          >
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                  Choose Course
                </label>
                <div className="relative">
                  <select
                      className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      onChange={handleCourse}
                      // value={}
                      id="course"
                      name="course"
                  >
                    <option> </option>
                    <option>networks</option>
                    <option>os</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                  Choose Unit
                </label>
                <div className="relative">
                  {
                    isCourseSelected ?
                    <div>
                        <select
                            onChange={handleUnit}
                            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="unit"
                            name="unit"
                        >
                          <option> </option>
                          <option>unit 1</option>
                          <option>unit 2</option>
                          <option>book</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                    </div>
                        :
                    <div>
                        <select
                            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            onChange={handleUnit}
                            id="unit"
                            name="unit"
                        >
                          <option > </option>
                        </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                      </div>
                    </div>
                  }
                </div>
              </div>
            </div>

            {
              isUnitSelected ?
                  <div className="py-4">
                    <FilePicker />
                  </div>
                    :
                    null
            }
          </form>
        </div>
      </div>
  );
}

export default TeacherUploadResource;
