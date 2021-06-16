import React, {createContext, useReducer} from 'react';

export const MyContext = createContext();

const reducer = (state, action) => {
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
};

const data = { name: 'zhangsan', age: 18 };

export const Reducer = (props) => {
  let [state, dispatch] = useReducer(reducer, data);
  return (
    <MyContext.Provider value={{state, dispatch}}>
      {props.children}
    </MyContext.Provider>
  )
}