import React,{useMemo,useState} from 'react';
import Dropzone,{useDropzone} from 'react-dropzone'

const baseStyle = {
flex: 1,
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
padding: '20px',
borderWidth: 2,
borderRadius: 2,
borderColor: '#cccaca ',
borderStyle: 'dashed',
backgroundColor: '#fafafa',
color: '#bdbdbd',
outline: 'none',
transition: 'border .24s ease-in-out'
};

const activeStyle = {
  borderColor: '#2196f3'
};

const acceptStyle = {
  borderColor: '#00e676'
};

const rejectStyle = {
  borderColor: '#ff1744'
};

function FilePicker(){

  const [isUploaded,setIsUploaded]=useState(false)
  const [isSubmited,setIsSubmited]=useState(false);
  const [fileName,setFileName]=useState("");
  const [validFileSize,setValidFileSize]=useState(true)

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone();

  const style = useMemo(() => ({
    ...baseStyle,
    ...(isDragActive ? activeStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isDragActive,
    isDragReject
  ]);

  function handleOnDrop(acceptedFiles,rejectedFiles){
    if(acceptedFiles.length>0){
      if(acceptedFiles[0].size<1000000){
        setValidFileSize(true)
        console.log(acceptedFiles[0]);
        setIsUploaded(true)
        setFileName(acceptedFiles[0].name)
        const reader=new FileReader()
        reader.onload=function(){
          console.log(reader.result);
        }
        reader.readAsArrayBuffer(acceptedFiles[0])
      }
      else{
        console.log("invalid");
        setIsUploaded(false)
        setValidFileSize(false)
      }

      }


  }

    function handleOnSubmit(e){
      if(e.target.name==="submit"){

        console.log("submitted");
      }
      else if(e.target.name="cancel"){
        console.log("canceled");
      }
    }
    return (
    <div className="w-full md:w-1/2 my-6 mx-auto">
    <div className="text-center">
    <Dropzone onDrop={handleOnDrop} multiple={false}>
   {({getRootProps, getInputProps}) => (
    <div {...getRootProps({style})}>
      <input{...getInputProps()} />
      <p>Drag and drop files or click to select files</p>
    </div>
   )}
</Dropzone>
</div>
  {
    isUploaded ?
    <div className="text-center" >
    <p className="text-sm leading-tight text-gray-500 mt-6 mb-6"><em>{fileName} is uploaded succesfully.</em></p>
    <div >
    <button
    onClick={handleOnSubmit}
    type="submit"
    name="submit"
    className=" mx-2 justify-center bg-green-500 hover:bg-green-700 text-white font-semibold py-1 px-2 rounded focus:outline-none focus:shadow-outline">
    submit
    </button>
    <button
    onClick={handleOnSubmit}
    type="submit"
    name="cancel"
    className="bg-gray-500 hover:bg-gray-700 text-white font-semibold py-1 px-2 rounded focus:outline-none focus:shadow-outline">
    cancel
    </button>
    </div>
    </div>
    :
    null
  }
  {
    validFileSize ?
    null
    :
    <div>
    <p className="my-2 text-md text-red-700"><em>file size limit exceeded</em></p>
    </div>
  }
    </div> );
}
export default FilePicker;
