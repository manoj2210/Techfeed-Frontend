import React,{useEffect} from 'react';
import Layout from '../components/layout';
import {useRouter} from "next/router";
import {get} from "../../services/rest_service";

function Index(props){
  const router = useRouter();

  useEffect( () => {
      get(`/getData/userDetails`).then(res=>{
      if(!res.error){
           router.push('/dashboard');
      }
      else {
          console.log(res);
           router.push('/login');
      }}
      )
  }, []);

  return <div/>
}

Index.getInitialProps=async ctx=>{
    return {res: await get(`/getData/userDetails`)};
};

export default Index;


