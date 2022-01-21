import React, { Fragment } from 'react';
import logo from './logo.svg';
//import './App.css';
import PhoneForm from './components/PhoneForm';
import { useCallback, useMemo, useEffect, useRef, useState } from "react";
import { setEnvironmentData } from 'worker_threads';
import PhoneInfo from './components/PhoneInfo';
import PhoneInfoList from './components/PhoneInfoList';
import { info } from 'console';
import CoinTracker from './components/CoinTracker';
import MovieApp from './components/MovieApp';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from './routes/Detail';
function KmToMiles() {
  return (
    <div>
      <h3>KM 2 M</h3>
    </div>
  )
}

function MinutesToHours() {

  const [minutes, setMinutes] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const minutesChange = (e: any) => {
    //console.log(e.target.value)
    setMinutes(e.target.value);
  }

  const minutesReset = () => {
    setMinutes(0);
  }

  const onFlipped = () => {
    minutesReset();
    setFlipped(current => !current);
  }

  return (
    <div>
      <div>
        <input placeholder='Minutes' type="number"
          value={flipped ? minutes * 60 : minutes}
          onChange={minutesChange}
          disabled={flipped}
        />
        <h4>You want to convert {minutes}</h4>
        <input placeholder='Hours' type="number"
          value={flipped ? minutes : Math.round(minutes / 60)}
          onChange={minutesChange}
          disabled={!flipped}
        />
      </div>
      <button onClick={minutesReset}>Reset</button>
      <button onClick={onFlipped}>{flipped ? "Turnback" : "Invert"}</button>
    </div>

  )
}

function Btn({ name }: any) {
  return (
    <button style={{
      backgroundColor: "tomato",
      color: "white",
      padding: "10px 20px",
      border: 0,
      borderRadius: 10
    }}>

      {name}
    </button>
  )
}

function App() {

  //let id = 0;
  //const id = useRef(0);
  //const information : any[] = [];
  const [information, setInformation] = useState([
    { id: '0', name: '홍길동', phone: '010-0000-0001' },
    { id: '1', name: '김민준', phone: '010-0000-0002' },
    { id: '2', name: '김벨로퍼트', phone: '010-0000-0003' }
  ]);

  const [id, setId] = useState(3);

  const [keyword, setKeyword] = useState("");

  const handleCreate = (data: any) => {
    //console.log(data);
    //console.log("handleCreate before : " + id)

    setInformation(information.concat({
      ...data,
      id: id
    }));

    //id = id++
    //console.log("handleCreate after : " + id)
    setId(id + 1);

  }

  const handleRemove = (id: any) => {
    setInformation(information.filter(
      (info: any) => (info.id !== id)
    ));
  }


  const handleUpdate = (id: any, data: any) => {
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
        console.log(info + ", " + index + ", " + array)

        if (info.id === id) {
          return {
            id: id,
            ...data
          }
        }
        return info;
      }
    ))
    //console.log(information[id])
  }

  const handleChange = (e: any) => {
    setKeyword(e.target.value)
  }
  let [counter, setCounter] = useState(0);
  const span = document.querySelector("span");
  const handleClick = () => {
    //setCounter(counter+1);
    setCounter((current) => current + 1);
  }

  const [index, setIndex] = useState("xx");
  const convertSelect = (e: any) => {
    setIndex(e.target.value)
  }
  let index_component;
  if (index === "0") {
    index_component = <MinutesToHours />;
  } else if (index === "1") {
    index_component = <KmToMiles />;
  } else {
    index_component = null;
  }
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MovieApp />} />
        <Route path='/movie/:id'element={<Detail/>}/>
      </Routes>
    </Router>
    
      /*<div>
      <MovieApp />
      <CoinTracker />
      <div>
        <Btn name={"SaveChanges"}></Btn>
        <Btn name={"Continue"}></Btn>
        <h1>Super Converter</h1>
        <select value={index} onChange={convertSelect}>
          <option value="xx">select your unint</option>
          <option value="0">Minutes & Hours</option>
          <option value="1">Km & Miles</option>
        </select>
        {index_component}
       
        <span>Total clicks: {counter}</span>
        <button onClick={handleClick}>Click me</button>
      </div>
      <PhoneForm onCreate={handleCreate} />
      {JSON.stringify(information)}
      <input
        value={keyword}
        onChange={handleChange}
        placeholder='검색...' />
      <PhoneInfoList
        data={information.filter(
          (info) => (info.name.indexOf(keyword) > -1)
        )}
        onRemove={handleRemove}
        onUpdate={handleUpdate} />
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
        </div>*/
  );
}

export default App;
