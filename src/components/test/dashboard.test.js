import React from 'react';
import ReactDOM from 'react-dom';

import {shallow} from 'enzyme'
import {Dashboard} from '../dashboard';

it('Dashboard Component renders without crashing', () => {
  shallow(<Dashboard />)
});

