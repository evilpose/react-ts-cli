let js = 
`  import React, { useState } from 'react';
  import BackHome from '../../components/home';

  const Count = () => {
    const [count, setCount] = useState(0);
    const [obj, setObj] = useState({name:'zhangsan'});
    const [arr, setArr] = useState([1,2,3]);
    const [func] = useState(()=>{
      return { name: 'bu' };
    });
    const a = '<h1>{obj.name}</h1>'
    return (
      <div className="App">
        <h1>{obj.name}</h1>
        <button onClick={()=>setObj({name:'lisi'})}>changName</button>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>changCount</button>
        <h1>{arr}</h1>
        <button onClick={()=>setArr([...arr, 4])}>changArr</button>
        <h1>{func.name}</h1>
        <BackHome />
      </div>
    );
  }

  export default Count;`

export default js;