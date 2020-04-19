import React,{useMemo,useState} from 'react';
import Layout from '../components/layout';
import FilePicker from '../components/filepicker';

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
    <Layout sideBar={true}>
        <div className="flex flex-col items-center">
          <div className="w-full md:w-1/2 my-6 ml-48">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
              choose Course
            </label>
            <div className="relative">
              <select
              onChange={handleCourse}
              className="w-1/2 rounded-md p-3"
              id="course"
              name="course"
              >
                <option > </option>
                <option>networks</option>
                <option>os</option>
              </select>
            </div>
          </div>
          <div className="w-full md:w-1/2  my-6 ml-48">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
              choose unit
            </label>
            <div className="relative">
              {
                isCourseSelected ?

                <select
                onChange={handleUnit}
                className="w-1/2 rounded-md p-3"
                id="unit"
                name="unit"
                >
                  <option> </option>
                  <option>unit 1</option>
                  <option>unit 2</option>
                  <option>book</option>
                </select>
                :

                <select
                className="w-1/2 rounded-md p-3"
                onChange={handleUnit}
                id="unit"
                name="unit"
                >
                  <option > </option>
                </select>

              }
            </div>
          </div>

          {
            isUnitSelected ?
            <FilePicker />
            :
            null
          }
        </div>

    </Layout>
  );
}

export default TeacherUploadResource;
