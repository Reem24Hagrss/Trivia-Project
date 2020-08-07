import React from 'react';
import {BrowserRouter ,Route } from 'react-router-dom';
import Header from './components/Header'
import QuestionView from './components/QuestionView'
import QuizView from './components/QuizView'
import FormView from './components/FormView'
import './App.css';

function App() {
  return (
    <BrowserRouter className="App">
      <Header />
      <Route exact path='/' component={QuestionView} />
      <Route path='/add' component={FormView} />
      <Route path='/play' component={QuizView} />
    </BrowserRouter>
  );
}

export default App;
