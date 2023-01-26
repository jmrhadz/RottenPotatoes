import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MovieList from './components/movie-list'
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import MovieService from './live-coding-OOP'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MovieService/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
