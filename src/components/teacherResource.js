import React ,{useState} from 'react';
import TeacherUploadResource from "./teacherUploadResource";

function TeacherResource(){

  const [isInputOptionSelected,setInputOptionSelected]=useState(false)
  const [inputOption,setInputOption]=useState("");
  const [isInputLink,setInputLink]=useState(false);
  const [isSelected,setSelected]=useState(false);
  function handleClick(){
    setInputOptionSelected(true);
  }

   const handleChange=(e)=>{
    if(e.target.value==="link"){
      setInputOption("link");
    }
    else if(e.target.value==="file"){
      setInputOption("file");
    }
  };

  const handleSubmit=(e)=>{
    if(inputOption==="link"){
      setInputLink(true);
      console.log("link");
      setSelected(true);
    }
    else if(inputOption === "file"){
      console.log("file");
      setSelected(true);
    }
  };
  return (
    <div>
    <div className="flex flex-col items-center" >
      <div className="flex items-left flex-wrap mt-6">
        <p className="inline p-2 text-xl text-gray-800">Resources</p>
        <button
          onClick={handleClick}
          type="submit"
          className="border-solid border-4 border-orange-400 bg-orange-400 px-1 text-white font-medium rounded-md hover:text-gray-600">
            add
        </button>
      </div>
    </div>
    {
      isInputOptionSelected ?
      <div className="flex flex-col items-center">
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
        <label className="text-gray-600 hover:text-green-600"htmlFor="link">upload as link</label><br />
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
        type="button"
        className="block m-6 border-solid border-4 border-orange-400 bg-orange-400 px-1 text-white font-medium rounded-md hover:text-gray-600">
          submit
        </button>
        </form>
      </div>
      :
      null
    }
      {
        isSelected ? <TeacherUploadResource/> :null
      }
    </div>
  );
}

export default TeacherResource;
