import React ,{useState} from 'react';
import Layout from '../components/layout';

function TeacherResource(){

  const [isinputOptionSelected,setInputOptionSelected]=useState(false)
  const [inputOption,setInputOption]=useState("")
  const [isInputLink,setInputLink]=useState(false)
  function handleClick(){
    setInputOptionSelected(true)
  }

  function handleChange(e){
    if(e.target.value==="link"){
      setInputOption("link")
    }
    else if(e.target.value==="file"){
      setInputOption("file")
    }
  }

  function handleSubmit(){
    if(inputOption==="link"){
      setInputLink(true)
      console.log("link");
    }
    else{
      console.log("file");
    }
  }
  return (
    <Layout sideBar={true}>
    <div className="flex flex-col items-left" >
      <div className="mt-6">
      <p className="m-6 inline p-2 text-xl text-gray-600">Resources</p>
      <button
      onClick={handleClick}
      type="submit"
      className="border-solid border-4 border-orange-400 bg-orange-400 px-1 text-white font-medium rounded-md hover:text-gray-600">
      add
      </button>
      </div>
    </div>
    {
      isinputOptionSelected ?
      <div className="flex flex-col items-left">
      <form
      className="m-6 block"
      >
      <input
      onChange={handleChange}
      className="m-4"
      type="radio"
      id="link"
      name="resources"
      value="link" />
      <label className="text-gray-600 hover:text-green-600"htmlFor="link">upload as link</label><br / >
      <input
      onChange={handleChange}
      className="m-4"
      type="radio"
      id="file"
      name="resources"
      value="file"/>
      <label className="text-gray-600 hover:text-green-600"htmlFor="file">upload from local system</label><br />
      <button
      onClick={handleSubmit}
      type="submit"
      className="block m-6 border-solid border-4 border-orange-400 bg-orange-400 px-1 text-white font-medium rounded-md hover:text-gray-600">
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

export default TeacherResource;
