import React from 'react';
import { render } from 'react-dom';
import Generation from './component/Generation';
import Dragon from './component/Dragon';

import './index.css';

render(
  <div>
    <h2>Dragon Stack</h2>
    <Generation />
    <Dragon />
  </div>,
  document.getElementById('root')
);