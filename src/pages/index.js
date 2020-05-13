import React,{useEffect} from 'react';
import {useRouter} from "next/router";
import Layout from "../components/layout";
import {get} from "../../services/rest_service";

function Index(){
  const router = useRouter();

  useEffect( () => {
      get(`/getData/userDetails`).then(async res => {
              if (!res.status) {
                  await router.push('/dashboard');
              } else {
                  await router.push('/login');
              }
          }
      );
  }, []);

  return <Layout/>
}

export default Index;


