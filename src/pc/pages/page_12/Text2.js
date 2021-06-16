import React, { useContext } from 'react';
import { MyContext } from './Reducer';

export default () => {
  let {state, dispatch} = useContext(MyContext);

  return (
    <div>
    <h1>Text2组件</h1>
    <h1>名字：{state.name}， 年龄：{state.age}</h1>
    <button onClick={()=>{
      dispatch({
        type: 'setname',
        name: 'Text2'
      })
    }}>setName</button>
    <button onClick={()=>{
      dispatch({
        type: 'setage',
        age: 'Text2'
      })
    }}>setAge</button>
    </div>
  )
}