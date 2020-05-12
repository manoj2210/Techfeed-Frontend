import React, {useEffect,useState } from 'react';
import fetch from 'isomorphic-unfetch'

fetch('https://us-central1-techfeed2k18-cd013.cloudfunctions.net/getData', {
     method: 'POST',
     headers: {
       Accept: 'application/json',
       'Content-Type': 'application/json',
     }
