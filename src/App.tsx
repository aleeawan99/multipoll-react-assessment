import React from 'react';
import { Provider } from 'react-redux'

import { store } from './store'
import { Carousel } from './components';
import { steps } from './data/steps';

import './App.css';

function App() {
  return (
    <Provider store={store()}>
      <div className='App'>
        <Carousel steps={steps} />
      </div>
    </Provider>
  );
}

export default App;
