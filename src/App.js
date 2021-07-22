/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {} from 'react-native';
import Navigation from './routes/index';
import {Provider} from 'react-redux';
import store from './redux/store';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </>
  );
};

export {App};
