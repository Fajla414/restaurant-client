import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import Body from './pages/Body/Body/Body';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Body />
    </BrowserRouter>
  );
};

export default App;