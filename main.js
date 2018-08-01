import React from 'react';
import ReactDOM from 'react-dom';
import File1 from './client/views/file1.jsx';
import {HashRouter, Route, Link} from 'react-router-dom';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducers from './redux/reducers/allReducers.js';


const store = createStore(allReducers);


ReactDOM.render(
  <Provider store={store}>
  <HashRouter>
    <div>
      <Route exact path='/' component={File1} />
    </div>
</HashRouter>
</Provider>,
document.getElementById('app')
);
