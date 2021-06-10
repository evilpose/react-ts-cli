import React from 'react';
import './index.css';

const Code = (props:any) => {
  return (
    <div className="code">
      <pre>
        <code>
          {props.children}
        </code>
      </pre>
    </div>
  );
}

export default Code;