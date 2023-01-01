import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement(
  'h1',
  {
    id: 'heading1',
    class: 'heading',
  },
  'This is a react app with parcel bundler'
);

const heading2 = React.createElement(
  'h2',
  {
    id: 'heading2',
    class: 'heading2',
  },
  'Parcel is the beast'
);

const container = React.createElement(
  'div',
  {
    id: 'container',
  },
  [heading, heading2]
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(container);
