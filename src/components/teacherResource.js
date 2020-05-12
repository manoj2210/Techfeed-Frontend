import React ,{useState} from 'react';
import TeacherUploadResource from "./teacherUploadResource";

function TeacherResource(){

  const [isCourseSelected,setCourse]=useState(false);
  const [isUnitSelected,setUnit]=useState(false);

  const [matName,setMatName]=useState('');
  const [chapName,setChapName]=useState('');
  const [chapNo,setChapNo]=useState(0);
  const [link,setLink]=useState('');

  function handleCourse(){
    setCourse(function(prev){
      return !prev
    })
  }

  function handleUnit(){
    setUnit(function(prev){
      return !prev
    })
  }

  function handleMatName(e){
    setMatName(e.target.value)
  }

  function handleChapNumber(e){
    setChapNo(e.target.value)
  }

  function handleChapName(e){
    setChapName(e.target.value)
  }

  function handleLink(e){
    setLink(e.target.value)
  }

  function handleSubmit(){
    console.log(link,matName,chapNo,chapName);
  }
  return (
    <div className="p-3">
      <div className="flex flex-col items-center" >
      <div className="flex items-left flex-wrap mt-6">
        <p className=" p-2 text-xl text-gray-800 tracking-wide">Upload Resource</p>
      </div>
      <div className="p-3">
              <div className="p-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                  Choose Course
                </label>
                <div className="relative">
                  <select
                      className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      onChange={handleCourse}
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
              <div className="p-3">
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
                          <option>unit 3</option>
                          <option>unit 4</option>
                          <option>unit 5</option>
                          <option>Entire book</option>
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
            <div>
              <form className="w-full max-w-lg mx-auto my-0  p-4 rounded">
                <div className="w-full items-center justify-center flex flex-col">
                <label className="uppercase tracking-wide text-gray-700 text-sm font-medium " htmlFor="grid-first-name">
                 Textbook Name
                </label>
                <input className="w-3/4 bg-gray-200 rounded p-2 m-4 border-gray-700 focus:bg-white focus:border-gray-500"
                       id="name"
                       autoComplete="name"
                       type="text"
                       name="matName"
                       placeholder=""
                       onChange={handleMatName}
                />
              </div>
              <div className="w-full items-center justify-center flex flex-col">
                <label className="uppercase tracking-wide text-gray-700 text-sm font-medium" htmlFor="grid-first-name">
                 Unit Number
                </label>
                <input className="w-3/4 bg-gray-200 rounded p-2 m-4 border-gray-700 focus:bg-white focus:border-gray-500"
                       id="cid"
                       autoComplete="name"
                       type="number"
                       name="cid"
                       placeholder=""
                       onChange={handleChapNumber}
                />
              </div>
              <div className="w-full items-center justify-center flex flex-col">
                <label className="uppercase tracking-wide text-gray-700 text-sm font-medium " htmlFor="grid-first-name">
                 Chapter Name
                </label>
                <input className="w-3/4 bg-gray-200 rounded p-2 m-4 border-gray-700 focus:bg-white focus:border-gray-500"
                       id="chapName"
                       autoComplete="name"
                       type="text"
                       name="chapName"
                       placeholder=""
                       onChange={handleChapName}
                />
              </div>
              <div className="w-full items-center justify-center flex flex-col">
                <label className="uppercase tracking-wide text-gray-700 text-sm font-medium " htmlFor="grid-first-name">
                  Link
                </label>
                <input className="w-3/4 bg-gray-200 rounded p-2 m-4 border-gray-700 focus:bg-white focus:border-gray-500"
                       id="link"
                       autoComplete="name"
                       type="text"
                       name="link"
                       placeholder=""
                       onChange={handleLink}
                />
              </div>
              </form>
            </div>
            :
            null
        }
        {
          isUnitSelected ?
          <div>
          <button 
          type="button" 
          className="w-full md:w-20 m-4 inline-block bg-gray-700 hover:bg-gray-800 text-white py-2 px-2 rounded"
           onClick={handleSubmit}>
            Upload
            </button>
          </div>
          :
          null
        }
    </div>
    </div>
  );
}

export default TeacherResource;
