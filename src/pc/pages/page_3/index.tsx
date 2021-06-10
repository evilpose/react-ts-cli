import React from "react";
import { useRef } from "react";
import BackHome from '../../components/home';
import Code from '../../components/code';
import code from './code';

const Ref = () => {
  const inputEl:any = useRef();
  const save = useRef({value:'123'});

  return (
    <>
      <BackHome />
      <h3>useRef</h3>
      <input type="text" ref={inputEl}/>
      <button onClick={()=>{
        console.log(inputEl);
        console.log(inputEl.current.value);
        save.current.value = inputEl.current.value;
        console.log(save.current.value);
      }}>获取ref</button>
      <Code>
        {code}
      </Code>
    </>
  )
};

export default Ref;