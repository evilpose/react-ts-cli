let js = `
import React from "react";
import { useRef } from "react";

const Ref = () => {
  const inputEl:any = useRef();
  const save = useRef({value:'123'});

  return (
    <>
      <h3>useRef</h3>
      <input type="text" ref={inputEl}/>
      <button onClick={()=>{
        console.log(inputEl);
        console.log(inputEl.current.value);
        save.current.value = inputEl.current.value;
        console.log(save.current.value);
      }}>获取ref</button>
    </>
  )
};

export default Ref;`

export default js;