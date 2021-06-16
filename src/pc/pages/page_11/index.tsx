import { stat } from 'fs';
import React, { useReducer } from 'react';

/**
 * 1. useReducer 就是个函数
 * 2. useReducer() 是个函数，有三个参数，第一个参数reducer 第二个参数是初始值 第三个参数是init
 * 3. useReducer() 返回值是一个数组，第一个是 state, 第二个 dispatch
 * 4. const [state, dispatch] = useReducer(reducer, 初始值)
 * 
 * 
 * 结合 useContext 和 createContext 就可变为 redux 效果
 */

export default () => {

  const [state, dispatch] = useReducer((state:any, action:any)=>{
    switch(action.type){
      case "setname":
        return {
          ...state,
          name: action.name
        }
      case "setage":
        return {
          ...state,
          age: action.age
        } 
      default:
        return state;
    }
  },{name:'张三', age:18})

  return (
    <div>
      <h1>useReducer</h1>
      <h1>{state.name} --- {state.age}</h1>
      <button onClick={()=>{
        dispatch({
          type: "setname",
          name: "李四"
        })
      }}>setName</button>
      <button onClick={()=>{
        dispatch({
          type: "setage",
          age: "81"
        })
      }}>setAge</button>
    </div>
  )
}