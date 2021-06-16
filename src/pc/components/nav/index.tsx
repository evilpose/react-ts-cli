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
          <li>9. <a href="/page_9">page9_useEffect</a></li>
          <li>10. <a href="/page_10">page10_useCusterm</a></li>
          <li>11. <a href="/page_11">page11_useReducer</a></li>
          <li>12. <a href="/page_12">page12_useRedux</a></li>
        </ul>
    </div>
  );
}

export default Nav;