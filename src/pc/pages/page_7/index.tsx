import React from 'react';
import { forwardRef, useRef } from 'react';

const Foreward = forwardRef((props, ref:any)=>{
  return(
    <>
      <h1 ref={ref}>123</h1>
      <h2>456</h2>
    </>
  )
});

const Page_7 = ()=>{
  const h1El = useRef(null);
  return (
    <>
      <Foreward ref={h1El}/>
      <button onClick={()=>{
        console.log(h1El.current);
      }}>获取子组件demo</button>
    </>
  )
};

export default Page_7;