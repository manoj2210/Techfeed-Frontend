import React, { useState,useEffect } from 'react';
import StudentSignup from '../components/studentSignup';
import TeacherSignup from '../components/teacherSignup';
import Layout from '../components/layout';
import Link from "next/link";
import fetch from 'isomorphic-unfetch'
import {useRouter} from "next/router";

function SignUp() {

  const styles = ["cursor-pointer bg-gray-400 hover:bg-gray-300  rounded focus:outline-none focus:shadow-outline m-0 flex-1 text-center w-1/2 transition duration-300", "cursor-pointer border-none bg-gray m-0 flex-1 text-center w-1/2 transition duration-300"];
  const [studentIndex,setStudentIndex]=useState(0);
  const [teacherIndex,setTeacherIndex]=useState(1);
  const [fetchDetails,setFetchDetails]=useState('addStudent');
  const [inputs, setInputs] = useState({
    name: '',
    rollNo: '',
    class: '',
    department: '',
    college: '',
    emailID: '',
    contactNo: '',
    password: '',
    confirmPassword: '',
  });
  function handleTabChange(e){
    if(e.target.id==='Teacher'){
      setTeacherIndex(0);
      setFetchDetails('addTeacher');
      setStudentIndex(1);
      setInputs({
        name: '',
        college: '',
        emailID: '',
        contactNo: '',
        password: '',
        confirmPassword: '',
      });
    }
    else{
      setStudentIndex(0);
      setTeacherIndex(1);
      setFetchDetails('addStudent');
      setInputs({
        name: '',
        rollNo: '',
        class: '',
        department: '',
        college: '',
        emailID: '',
        contactNo: '',
        password: '',
        confirmPassword: '',
      });
    }
  }
  const router = useRouter();
  //Inputs

  const [error, setError] = useState('');
  const [alert,setAlert]=useState('');
  const [colleges,setColleges]=useState([]);
  const [departments,setDepartments]=useState([]);
  const [classes,setClasses]=useState([]);
  //Validation
  const [validateStudentName,setValidationName] = useState(false);
  const [validateRollNo,setValidationRollNo] = useState(false);
  const [validateContactNo,setValidationContactNo] = useState(false);
  const [validateEmailID,setValidationEmailID] = useState(false);
  const [validatePassword,setValidationPassword] = useState(false);
  const [validateConfirmPassword,setValidationConfirmPassword] = useState(false);
  const [isCollegeSelected,setStateCollege] = useState(false);
  const [isDepartmentSelected,setStateDepartment] = useState(false);
  const [validateClass,setValidationClass]=useState(false);

  useEffect(() => {
    fetch(`${process.env.backend_url}/base/getCollege`,{
      crossDomain: true,
      credentials: 'include',
      method: 'get',
    }).then(res=> {
      return res.json();
    }).then(async(r)=>{
      if(!r.error){
        await mapColleges(r);
      }else{
        handleError(r.message);
      }
    });
  }, []);

  const mapColleges=e=>{
    setColleges(e.map((data, index) => (
        <option key={index}>{data.Name}</option>
    )));
  };

  const mapDepartments=e=>{
    setDepartments(e.map((data, index) => (
        <option key={index}>{data.Name}</option>
    )));
  };

  const mapClasses=e=>{
    setClasses(e.map((data, index) => (
        <option key={index}>{data.Name}</option>
    )));
  };

  function handleCollegeChange(event) {
    event.persist();
    setInputs({
      ...inputs, [event.target.name]: event.target.value
    });

    let b=JSON.stringify({
      "collegeName": event.target.value
    });
    fetch(`${process.env.backend_url}/base/getDepartment`,{
      crossDomain: true,
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'post',
      body:b
    }).then(res=> {
      return res.json();
    }).then(async(r)=>{
      if(!r.error){
        await mapDepartments(r);
        setStateCollege(true);
        setStateDepartment(false);
        handleError(null);
      }else{
        setStateCollege(false);
        setStateDepartment(false);
      }
    });
  }

  function handleDepartmentChange(event) {

    event.persist();
    setInputs({
      ...inputs, [event.target.name]: event.target.value
    });

    let b=JSON.stringify({
      "collegeName":inputs.college,
      "depName": event.target.value
    });

    fetch(`${process.env.backend_url}/base/getClass`,{
      crossDomain: true,
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'post',
      body:b
    }).then(res=> {
      return res.json();
    }).then(async(r)=>{
      if(!r.error){
        await mapClasses(r);
        setStateDepartment(true);
        handleError(null);
      }else{
        setStateDepartment(false);
      }
    });
  }


  function handleInputChange(event) {
    //console.log(event.target.value);
    event.persist();
    setInputs({
      ...inputs, [event.target.name]: event.target.value
    });
  }


  const validate=(e)=>{
    let v=true;
    if(inputs.name===""){
      //console.log("name is empty");
      setValidationName(true);
      v=false;
    } else {
      setValidationName(false);
    }
    if(inputs.rollNo===""){
      //console.log("roll no is empty");
      setValidationRollNo(true);
      v=false;
    }else {
      setValidationRollNo(false);
    }
    if(inputs.emailID===""){
      //console.log("roll no is empty");
      setValidationEmailID(true);
      v=false;
    }else {
      setValidationEmailID(false);
    }
    if(inputs.contactNo==="" || inputs.contactNo.length!==10){
      //console.log("contact no is empty");
      setValidationContactNo(true);
      v=false;
    }else{
      setValidationContactNo(false);
    }
    if(inputs.password==="" || inputs.password.length<8){
      //console.log("password is empty");
      setValidationPassword(true);
      v=false;
    }else{
      setValidationPassword(false);
    }
    if(inputs.confirmPassword==="" || inputs.confirmPassword!==inputs.password){
      //console.log("confirm Password is empty");
      setValidationConfirmPassword(true);
      v=false;
    }else {
      setValidationConfirmPassword(false);
    }
    if(inputs.class ===""||inputs.class ===" "){
      setValidationClass(true);
      v=false;
    }else {
      setValidationClass(false);
    }
    return v;
  };
  const handleSubmit=(e)=>{
    let v=validate();
    if(v===true){
      fetch(`${process.env.backend_url}/signUp/${fetchDetails}`,{
        crossDomain: true,
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'post',
        body:JSON.stringify(inputs)
      }).then(res=> {
        return res.json();
      }).then(async (r)=>{
        if(!r.error){
          await router.push('/login');
        }else {
          if (r.error === 'Duplicate Entry')
            handleError("Account already Available!");
          else
            handleError(r.error);
        }
      });
    }
  };

  const handleError = (e) => {
    setError(e);
    setAlert('');
  };

  const handleAlert = (e) => {
    setError('');
    setAlert(e);
  };


  return (<Layout>
        <div className="mx-auto px-4 sm:px-8 min-h-screen">
          <div className="py-8 w-full max-w-lg mx-auto">
            <div className="flex items-center justify-center">
              <h2 className="text-2xl leading-tight text-gray-900 mb-6 font-semibold">Welcome to Tech Feed</h2>
            </div>
            { error ? (
                <p className="p-3 my-2 text-red-700 bg-red-200">Error: {error}</p>
            ) : null}
            {alert ? (
                <p className="p-3 my-2 text-green-700 bg-green-200">{alert}</p>
            ) : null}
            <div className="header flex">
              <div
                  className={styles[studentIndex]}
              >
                <h2
                    onClick={handleTabChange}
                    className="m-2 pt-2 pb-2 text-xl leading-tight text-gray-900 font-medium"
                    id='Student'
                >Student</h2>
              </div>
              <div
                  className={styles[teacherIndex]}
              >
                <h2
                    onClick={handleTabChange}
                    className="m-2 pt-2 pb-2 text-xl leading-tight text-gray-900 font-medium"
                    id='Teacher'>
                  Teacher</h2>
              </div>
            </div>
            { !studentIndex ? <StudentSignup
                    onSubmit={handleSubmit}
                    onChange={handleInputChange}
                    studentInput={inputs}
                    onCollegeChange={handleCollegeChange}
                    colleges={colleges}
                    onDepartmentChange={handleDepartmentChange}
                    departments={departments}
                    classes={classes}
                    onClick={handleSubmit}
                    validateStudentName={validateStudentName}
                    validateRollNo={validateRollNo}
                    validateContactNo={validateContactNo}
                    validateEmailID={validateEmailID}
                    validatePassword={validatePassword}
                    validateConfirmPassword={validateConfirmPassword}
                    isCollegeSelected={isCollegeSelected}
                    isDepartmentSelected={isDepartmentSelected}
                />
                :
                <TeacherSignup
                    onSubmit={handleSubmit}
                    onChange={handleInputChange}
                    teacherInput={inputs}
                    onCollegeChange={handleCollegeChange}
                    colleges={colleges}
                    onClick={handleSubmit}
                    validateStudentName={validateStudentName}
                    validateContactNo={validateContactNo}
                    validateEmailID={validateEmailID}
                    validatePassword={validatePassword}
                    validateConfirmPassword={validateConfirmPassword}
                />}
          </div>
        </div>
      </Layout>
  );
}

export default SignUp;
