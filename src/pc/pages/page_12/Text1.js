import React, { useContext } from 'react';
import { MyContext } from './Reducer';

export default () => {
  let {state, dispatch} = useContext(MyContext);
  return (
    <div>
      <h1>Text1组件</h1>
      <h1>名字：{state.name}， 年龄：{state.age}</h1>
      <button onClick={()=>{
        dispatch({
          type: 'setname',
          name: 'Text1'
        })
      }}>setName</button>
      <button onClick={()=>{
        dispatch({
          type: 'setage',
          age: 'Text1'
        })
      }}>setAge</button>
    </div>
  )
}