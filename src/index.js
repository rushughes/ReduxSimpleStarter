import React from 'react';
import ReactDOM from 'react-dom';

// create a new component, this component should produce some html

const App = function () {
  return <div>poop</div>;
};

// take this component's generated html and put it on the page (in the dom)

ReactDOM.render(<App />, document.querySelector('.container'));
