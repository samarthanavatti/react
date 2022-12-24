const heading = React.createElement(
  'h1',
  {
    title: 'label',
    id: 'heading'
  },
  'Welcome to React!'
);
const heading2 = React.createElement(
  'h2',
  {
    title: 'label',
    id: 'heading2'
  },
  'Lets start learing...'
);

const container = React.createElement('div', { id: 'container' }, [
  heading,
  heading2
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(container);
