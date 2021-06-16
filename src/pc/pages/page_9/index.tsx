import React, { useLayoutEffect, useEffect, useState } from 'react';

/**
 * useLayoutEffect 和 useEffect 作用一样，在组件生成的过程中，可以做一些操作
 * 不同的是，执行的时间不同，useEffect 是在 componentDidMount 以后执行的，
 * useLayoutEffect 在浏览器执行绘制执行执行的（会阻塞组件挂载，慎用）
 */

const LayoutEffect = () => {

  const [count, setCount] = useState(0);

  useEffect(()=>{
    console.log('useEffect');
    return () => {
      console.log('useEffect-return');
    }
  })

  useLayoutEffect(()=>{
    console.log('useLayoutEffect');
    return () => {
      console.log('useLayoutEffect-return');
    }
  })

  return (
    <>
      <h1>useLayoutEffect</h1>
      <h1>{count}</h1>
      <button onClick={()=>{
        setCount(count+1)
      }}>useLayoutEffect-useEffect</button>
    </>
  )
};

export default LayoutEffect;