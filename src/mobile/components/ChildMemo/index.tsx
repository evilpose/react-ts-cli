import React from 'react';
import { useMemo } from 'react';

const ChildMemo = (props:any) => {
  let get = useMemo(()=>{
    return {c:props.c, n:props.n};
  }, [props.c, props.n])

  return (
    <h2>子组件:{get.c}-----{get.n}</h2>
  )
};

export default ChildMemo;