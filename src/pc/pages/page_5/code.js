let page_5 = 
`import React from 'react';
import { useState } from 'react';
import ChildMemo from '../../components/ChildMemo';

// useMemo 和 useEffect 执行的时间不同，useEffect是componentDidMount 以后执行的,
// 而useMemo是在组件渲染过程中执行的

const Memo = () => {
  let [count, setCount] = useState<number>(0);
  let [num, setNum] = useState<number>(0);

  return(
    <>
      <h3>父组件-useMem</h3>
      <p>{count}-------{num}</p>
      <ChildMemo c={count} n={num}/>
      <button onClick={()=>setCount(count+1)}>change-count</button>
      <p>{num}</p>
      <button onClick={()=>setNum(num+1)}>change-num</button>
    </>
  )
};

export default Memo;
`;

let childcode_code = 
`import React from 'react';
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
`;

export { page_5, childcode_code };