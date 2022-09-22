import React, {Button} from 'react';
import http from "../http-common";
import axios from 'axios';
import HomeDataService from '../services/home.service';


export const TestServerButton = () => {
  const goFetchHomeDirect = async () => {
    const response = await axios.get('http://localhost:8000/');
    console.log('directly using axios')
    console.log(response);
  }

  const goFetchHomeIndirect = async () => {
    const response = await http.get('/');
    console.log('calling http-common')
    console.log(response);
  }

  const goFetchHomeUsingService = async () => {
    const response = await HomeDataService.sayHiToServer();
    console.log('calling home service')
    console.log(response);
  }

  const sayHiToHomeWithName = () => {
    console.log('with name')
    HomeDataService.sayHiToServerWithName()
      .then(response => console.log(response))
      .catch(error => console.error(error))
  }

  return(
    <div>
      <button onClick={goFetchHomeDirect}>Click to Connect!</button>
      <button onClick={goFetchHomeIndirect}>This is an indirect button!</button>
      <button onClick={goFetchHomeUsingService}>This is calling Home Service!</button>
      <button onClick={sayHiToHomeWithName}>This is calling Home with a name</button>
    </div> 
  )
}

export default TestServerButton;