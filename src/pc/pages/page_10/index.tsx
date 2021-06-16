import React, { useState } from 'react';

const useCus = (val:any) => {
  let [count, setCount] = useState(val);

  const add = (num:any) => {
    setCount(count + num);
  };

  return {count, add}
}

export default ()=>{

  let {count,add} = useCus(10);

  return(
    <div>
      <h1>custerm</h1>
      <h1>{count}</h1>
      <button onClick={()=>{
        add(2)
      }}>add</button>
    </div>
  )
}