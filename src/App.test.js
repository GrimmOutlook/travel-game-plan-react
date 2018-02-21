import React from 'react';
import ReactDOM from 'react-dom';
// import {Provider} from 'react-redux';
// import {BrowserRouter as Router} from 'react-router-dom';
import {shallow} from 'enzyme'
// import store from './store';
import {App} from './App';

// import registerServiceWorker from './registerServiceWorker';

it('App Component renders without crashing', () => {
  // sign in with a dummy JWT
  shallow(<App />)
});
