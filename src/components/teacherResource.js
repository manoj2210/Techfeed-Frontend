import React, {useEffect, useState} from 'react';
import {get, post} from "../../services/rest_service";
import {useRouter} from "next/router";

function TeacherResource(){

  const router=useRouter();

  const [isCourseSelected,setCourseSelected]=useState(false);
  const [isUnitSelected,setUnitSelected]=useState(false);

  const [courses,setCourses]=useState([]);

  const [error, setError] = useState('');
  const [alert,setAlert]= useState('');

  const [course,setCourse]=useState('');
  const [unit,setUnit]=useState('');
  const [matName,setMatName]=useState('');
  const [chapName,setChapName]=useState('');
  const [link,setLink]=useState('');

  const handleError = (e) => {
    setError(e);
    setAlert('');
  };

  const handleAlert = (e) => {
    setError('');
    setAlert(e);
  };

  useEffect(() => {
    get('/getData/teaches').then(res => {
      if (!res.error) {
        if(res.length>0) {
            setCourse(res[0].cid);
            setCourseSelected(true);
            let arr = [];
            for (let x of res) {
              arr.push(<option>{x.cid}</option>);
            }
            setCourses(arr);
            setError('');
        }else {
          handleError('Please subscribe at least one course');
          setTimeout(async function (){
            await router.push("/settings")
          },3000);
        }
      }else {
        if(res.status === 401){
          handleError('Please Login');
          setTimeout(async function (){
            await router.push("/login")
          },3000);
        }else {
          handleError(res.message);
        }
      }
    });
  },[]);

  function handleCourse(e){
    setCourseSelected(e.target.value)
    setCourse(e.target.value);
  }

  function handleUnit(e){
    setUnitSelected(e.target.value);
    setUnit(e.target.value);
  }
  function handleMatName(e){
    setMatName(e.target.value)
  }

  function handleChapName(e){
    setChapName(e.target.value)
  }

  function handleLink(e){
    setLink(e.target.value)
  }

  const handleSubmit=(e)=>{
    console.log(link,matName,chapName,courses,course,unit);
    if(link===''||matName===''||chapName===''||course===''||unit===''){
      handleError('Please Enter All fields');
      return
    }
    post('/update/materials',JSON.stringify({
      link:link,
      matName:matName,
      chapName:chapName,
      cid:course,
      co:unit === 'Entire book' ? 0 : parseInt(unit)
    })).then(r =>{
          if(!r.error) {
            handleAlert('Successfully Added');
            setTimeout( function () {
              handleAlert('');
            }, 3000);
          } else {
            if (r.status === 401) {
              handleError('Please Login');
              setTimeout(async function () {
                await router.push("/login")
              }, 3000);
            } else {
              handleError(r.message);
            }
    }
        }
    )
  }
  return (
      <div className="mx-auto px-4 sm:px-4 min-h-screen">
        {error ? (
            <p className="p-3 my-2 text-red-700 bg-red-200">Error: {error}</p>
        ) : null}
        {alert ? (
            <p className="p-3 my-2 text-green-700 bg-green-200">{alert}</p>
        ) : null}
      <div className="flex flex-col items-left" >
      <div className="flex items-left flex-wrap mt-6">
        <p className=" p-2 text-xl text-gray-800 tracking-wide">Upload Resource</p>
      </div>
      <div className="p-3 flex flex-wrap">
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
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
                    {courses}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                  Choose CO
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
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
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
            <div className='my-4 flex flex-wrap bg-white p-4 rounded-lg border-4'>
                <div className="w-full md:w-1/2 items-left flex flex-col">
                <label className="mx-4 uppercase tracking-wide text-gray-700 text-sm font-medium" >
                 Textbook Name
                </label>
                <input className="bg-gray-200 rounded p-2 m-4  border-gray-700 focus:bg-white focus:border-gray-500"
                       id="name"
                       type="text"
                       name="matName"
                       placeholder=""
                       onChange={handleMatName}
                />
              </div>
              <div className="w-full md:w-1/2 items-left flex flex-col flex-wrap">
                <label className="mx-4 uppercase tracking-wide text-gray-700 text-sm font-medium" >
                 Chapter Name
                </label>
                <input className="bg-gray-200 rounded p-2 m-4 border-gray-700 focus:bg-white focus:border-gray-500"
                       id="chapName"
                       type="text"
                       name="chapName"
                       placeholder=""
                       onChange={handleChapName}
                />
              </div>
              <div className="w-full md:w-1/2 items-left flex flex-col flex-wrap">
                <label className="mx-4 uppercase tracking-wide text-gray-700 text-sm font-medium" >
                  Link
                </label>
                <input className="bg-gray-200 rounded p-2 m-4 border-gray-700 focus:bg-white focus:border-gray-500"
                       id="link"
                       type="text"
                       name="link"
                       placeholder=""
                       onChange={handleLink}
                />
              </div>
            </div>
            :
            null
        }
      </div>
        {
          isUnitSelected ?
          <div className="flex flex-wrap items-center">
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
  );
}

export default TeacherResource;
