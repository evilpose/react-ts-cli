import React from 'react';
import { useState, useEffect } from 'react';
import BackHome from '../../components/home';
import Code from '../../components/code';
import code from './code';

const Page2 = () => {
  const [tag, setTag] = useState(true);

  return (
    <>
      <BackHome />
      <br/>
      <div>
        <button onClick={()=>setTag(true)}>tag1</button>&nbsp;<button onClick={()=>setTag(false)}>tag2</button>
      </div>
      {
        tag ? <Tag1 /> : <Tag2 />
      }
      <Code>
        {code}
      </Code>
      <br/>
    </>
  )
};

const Tag1 = ()=>{
  const [count, setCount] = useState(0);
  const [countTag, setCountTag] = useState(0);

  useEffect(()=>{
    return ()=>{
      console.log('componentWillUnmont');
    };
  },[count]);

  return (
    <div>
      <h1>tag1</h1>
      <h2>effect{count}</h2>
      <button onClick={()=>setCount(count+1)}>change-count</button>
      <h2>effect{countTag}</h2>
      <button onClick={()=>setCountTag(countTag+1)}>change-countTag</button>
    </div>
  )
};

const Tag2 = ()=>{
  return (
    <div>
      <h1>tag2</h1>
    </div>
  )
};

export default Page2;