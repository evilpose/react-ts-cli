let page_4 =
`import React from 'react';
import { useState, useRef } from 'react';
import BackHome from '../../components/home';
import Code from '../../components/code';
import { MyContext } from '../../components/Mycontext';
import Child from '../../components/Child';

const Content = () => {
  let [count, setCount] = useState(0);
  const inputEl:any = useRef(null);

  return(
    <>
      <BackHome />
      <MyContext.Provider value={count}>
        <Child />
      </MyContext.Provider>
      父组件：<input type="text" ref={inputEl}/>&nbsp;
      <button onClick={()=>{
        setCount(inputEl.current.value);
      }}>send input to Child</button>
    </>
  )
};

export default Content;`;

let mycontextcode = 
`import { createContext } from 'react';
export let MyContext = createContext(0);`;

let childcode = 
`import React, { useContext } from 'react';
import { MyContext } from '../../components/Mycontext';

export default () => {
  let count:any = useContext(MyContext);
  return (
    <h3>子组件: {count}</h3>
  )
};`

export { page_4, mycontextcode, childcode };