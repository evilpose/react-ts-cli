import React, { useContext } from 'react';
import { MyContext } from '../../components/Mycontext';

const Child = () => {
  let count:any = useContext(MyContext);
  return (
    <h3>子组件: {count}</h3>
  )
};

export default Child;