import React from 'react';
import { useState, useRef } from 'react';
import BackHome from '../../components/home';
import Code from '../../components/code';
import { MyContext } from '../../components/Mycontext';
import Child from '../../components/Child';
import { page_4, mycontextcode, childcode } from './code';

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
      <p>page_4_code</p>
      <Code>
        {page_4}
      </Code>
      <p>MyContext_code</p>
      <Code>
        {mycontextcode}
      </Code>
      <p>childcode_code</p>
      <Code>
        {childcode}
      </Code>
    </>
  )
};

export default Content;
