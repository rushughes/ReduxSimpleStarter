import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBBHOnSuwThtNLKusEqD_5RJYWAsm7PdO8';

// create a new component, this component should produce some html

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

// take this component's generated html and put it on the page (in the dom)

ReactDOM.render(<App />, document.querySelector('.container'));
