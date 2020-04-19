import React ,{useState} from 'react';
import Layout from '../components/layout';

function TeacherDashboard(){

  const [isInputSelected,setInputSelected]=useState(false)
  const [announcement,setAnnouncement]=useState("")
  function handleClick(e){
    setInputSelected(true)
  }

  function handleChange(e){
    setAnnouncement(e.target.value)
  }

  function handleSubmit(){
    console.log(announcement);
  }
  return (
    <Layout sideBar={true}>
      <div className="flex flex-col items-left" >
        <div className="mt-6">
        <p className="m-6 inline p-2 text-xl text-gray-600">Announcements</p>
        <button
        onClick={handleClick}
        type="submit"
        className="border-solid border-4 border-orange-400 bg-orange-400 p-1 text-white font-medium rounded-md hover:text-gray-600">
        add
        </button>
        </div>

      </div>
      {
        isInputSelected ?
        <div className="flex flex-col items-left">
        <form
        className="m-6 p-3">
         <textarea
         onChange={handleChange}
         className="block" rows = "5" cols = "50" name = "description"></textarea>
         <button
         onClick={handleSubmit}
         className="mt-6 border-solid border-4 border-orange-400 bg-orange-400 p-1 text-white font-medium rounded-md hover:text-gray-600">
         submit
         </button>
         </form>
        </div>
        :

        null
      }
    </Layout>
  );
}

export default TeacherDashboard;
