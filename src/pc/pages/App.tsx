import React from 'react';
import Nav from '../components/nav'
import './App.css';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import Page_1 from './page_1';
import Page_2 from './page_2';
import Page_3 from './page_3';
import Page_4 from './page_4';
import Page_5 from './page_5';
import Page_6 from './page_6';
import Page_7 from './page_7';
import Page_8 from './page_8';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Nav} />
        <Route path="/page_1" component={Page_1} />
        <Route path="/page_2" component={Page_2} />
        <Route path="/page_3" component={Page_3} />
        <Route path="/page_4" component={Page_4} />
        <Route path="/page_5" component={Page_5} />
        <Route path="/page_6" component={Page_6} />
        <Route path="/page_7" component={Page_7} />
        <Route path="/page_8" component={Page_8} />
      </Router>
    </div>
  );
}

export default App;
