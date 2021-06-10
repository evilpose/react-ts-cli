import React from 'react';
import './index.css';

const Nav = () => {
  return (
    <div>
      <h1>react-hook</h1>
        <ul>
          <li>1. <a href="/page_1">page1_useState</a></li>
          <li>2. <a href="/page_2">page2_useEffect</a></li>
          <li>3. <a href="/page_3">page3_useRef</a></li>
          <li>4. <a href="/page_4">page4_useContext</a></li>
          <li>5. <a href="/page_5">page5_useMemo</a></li>
          <li>6. <a href="/page_6">page6_useCallback</a></li>
          <li>7. <a href="/page_7">page7_forwardRef</a></li>
          <li>8. <a href="/page_8">page8_useImperativeHandle</a></li>
        </ul>
    </div>
  );
}

export default Nav;