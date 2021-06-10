import React, { forwardRef, useRef, useImperativeHandle, useState } from 'react';

const Imperative = forwardRef((props, refa)=>{
  const inputRef:any = useRef();
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(0);

  useImperativeHandle(refa, ()=>(
    {
      name: "zhangsan",
      focus: ()=> {
        inputRef.current.focus();
      },
      count
    }
  ), [num]);

  return (
    <>
      <h3>count---{count}</h3>
      <h3>num---{num}</h3>
      <input type='text' ref={inputRef}/>
      <button onClick={()=>setCount(count+1)}>setCount</button>
      <button onClick={()=>setNum(num+1)}>setNum</button>
    </>
  )
});

const Page_8 = () =>{
  const el:any = useRef();
  return(
    <>
      <Imperative ref={el}/>
      <button onClick={()=>{
        console.log(el);
        el.current.focus();
      }}>获取子组件的自定义方法或者属性</button>
    </>
  )
};

export default Page_8;