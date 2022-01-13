import React from 'react';
import logo from './logo.svg';
//import './App.css';
import PhoneForm from './components/PhoneForm';
import { useCallback, useMemo, useEffect, useRef, useState } from "react";
import { setEnvironmentData } from 'worker_threads';
import PhoneInfo from './components/PhoneInfo';
import PhoneInfoList from './components/PhoneInfoList';
import { info } from 'console';

function App() {

  //let id = 0;
  //const id = useRef(0);
  //const information : any[] = [];
  const [information, setInformation] = useState([
    {id :'', name : '', phone : ''}
  ]);

  const [id, setId] = useState(1);
  
  const handleCreate = (data:any) => {
    //console.log(data);
    //console.log("handleCreate before : " + id)

    setInformation(information.concat({
      ...data,
      id : id
    }));
    
    //id = id++
    //console.log("handleCreate after : " + id)
    setId(id+1);

 }

 const handleRemove = (id : any) => {
  setInformation(information.filter(
    (info : any ) => (info.id !== id)
  ));
 }
 

 const handleUpdate = (id: any, data : any) => {
  //console.log(data)
  //id, data : 어떻게 바꿀지?
  /*
  arr.map(callbackFunction(currentValue, index, array), thisArg);
  즉, callbackFunction을 실행한 결과를 이용해 새로운 배열을 만들어 내는 함수입니다.

  callback function을 작성할 때 맨 앞의 인자는 현재 배열(arr) 내의 값들을 의미하며, 
  두 번째 인자는 현재 배열 내 값의 인덱스를 의미하고, 
  마지막 인자는 현재 배열을 의미합니다.

  thisArg는 callbackFunction 안에서 사용할 this 레퍼런스를 의미합니다.
  */

   setInformation(information.map(
    (info, index, array) => {
      console.log(info +", " + index +", " + array)

      if(info.id === id){
          return {
            id : id,
            ...data
          }
      }
      return info;
    }
  ))
    //console.log(information[id])
 }
  
  return (
    
    <div>
       <PhoneForm onCreate={handleCreate}/>
       {JSON.stringify(information)}
       <PhoneInfoList 
       data={information}
       onRemove={handleRemove}
       onUpdate={handleUpdate}/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          
          Toy Project Start!
        </a>
      </header>
    </div>
  );
}

export default App;
