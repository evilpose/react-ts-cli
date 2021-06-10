let page_6 = 
`import React from 'react';
import { useState, useCallback } from 'react';
import BackHome from '../../components/home';

// useCallback 避免组件重复渲染，提高性能
// 和 useMemo 同样用的缓存技术，不同的是 useCallback 缓存的是个函数

const Page_6 = () => {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(0);

  let callback = useCallback(()=>{
    console.log(count);
    return count;
  },[]);
  
  return(
    <>
      <BackHome />
      <h3>状态：count: {count}</h3>
      <h3>callback: {callback()}</h3>
      <button onClick={()=>{
        setCount(count+1)
      }}>chang-count</button>
      <h3>num: {num}</h3>
      <button onClick={()=>{
        setNum(num+1)
      }}>chang-num</button>
    </>
  )
  
};

export default Page_6;`

export default page_6;