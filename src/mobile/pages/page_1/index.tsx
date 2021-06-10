import React, { useState } from 'react';
import BackHome from '../../components/home';
import Code from '../../components/code';
import code from './code';

const Count = () => {
  const [count, setCount] = useState(0);
  const [obj, setObj] = useState({name:'zhangsan'});
  const [arr, setArr] = useState([1,2,3]);
  const [func] = useState(()=>{
    return { name: 'bu' };
  });
  return (
    <div>
      <BackHome />
      <h1>{obj.name}</h1>
      <button onClick={()=>setObj({name:'lisi'})}>changName</button>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>changCount</button>
      <h1>{arr}</h1>
      <button onClick={()=>setArr([...arr, 4])}>changArr</button>
      <h1>{func.name}</h1>
      <Code>
        {code}
      </Code>
    </div>
  );
}

export default Count;