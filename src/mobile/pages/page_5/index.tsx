import React from 'react';
import { useState } from 'react';
import ChildMemo from '../../components/ChildMemo';
import Code from '../../components/code';
import { page_5, childcode_code } from './code';
import BackHome from '../../components/home';

// useMemo 和 useEffect 执行的时间不同，useEffect是componentDidMount 以后执行的,
// 而useMemo是在组件渲染过程中执行的

const Memo = () => {
  let [count, setCount] = useState<number>(0);
  let [num, setNum] = useState<number>(0);

  return(
    <>
      <BackHome />
      <h3>父组件-useMem</h3>
      <p>{count}-------{num}</p>
      <ChildMemo c={count} n={num}/>
      <button onClick={()=>setCount(count+1)}>change-count</button>
      <p>{num}</p>
      <button onClick={()=>setNum(num+1)}>change-num</button>
      <Code>
        {page_5}
      </Code>
      <p>childcode_code</p>
      <Code>
        {childcode_code}
      </Code>
    </>
  )
};

export default Memo;