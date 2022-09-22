import React, { Component } from 'react';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';

const ToDo = (props) => {

  return(
    <div className='w-[70%] mx-auto shadow-[0_2px_10px_2px_rgba(0,0,0,0.5)] p-4 rounded-lg '>
      <div className='flex justify-between mb-4'>
        <h2 className='font-bold text-lg'>{props.name}</h2>
        <h2>{props.date}</h2>
      </div>
      <p className='text-justify'>{props.text}</p>
    </div>
  )
}

const App = () => {

  let [data, setData] = useState([]);
  let [name, setName] = useState("");
  let [text, setText] = useState("");

  let handleAdd = () => {
    let day = new Date().getDay()
    let month = new Date().getMonth()
    let year = new Date().getFullYear()
    let date = `${day}/${month}/${year}`

    let tmp = {};
    tmp["name"] = name;
    tmp["text"] = text;
    tmp["date"] = date;
    tmp["id"] = uuidv4();
    console.log(tmp.date)
    setData([...data, tmp]);
    setName("");
    setText("");
  };

  return(
    <div className="w-[80%] mx-auto py-[2em] font-mono">

      <div className="flex flex-col gap-4 mt-4">
        <input
          value={name}
          type="text"
          placeholder="What's your name?"
          onChange={(e) => setName(e.target.value)}
          className="px-4 py-2 border rounded-md text-black outline-none"
        />

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="What's on your mind ?"
          className="px-4 py-2 border rounded-md h-28 text-black outline-none"
        />

        <button
          onClick={handleAdd}
          className="px-4 py-2 border rounded-md hover:text-white hover:bg-blue-500 mb-4"
        >
          POST
        </button>
      </div>

      <div className="flex flex-col gap-4 mt-8">
        {data.map((item) => (
          <ToDo key={item.id} name={item.name} text={item.text} date={item.date} />
        ))}
      </div>

    </div>
  )
}

export default App;
