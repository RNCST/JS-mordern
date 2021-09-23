

// OMDB API Open Movie Database
// http://www.omdbapi.com/ 
// key efdad671

// Query String =~= 검색 String.
// 주소?속성=값&속성=값
// https://www.omdbapi.com/?apikey=efdad671&s=frozen

// axios Promise based HTTP client for the browser and node.js
// https://github.com/axios/axios

import axios from 'axios'

function fetchMovies() {
  axios
  .get('https://www.omdbapi.com/?apikey=efdad671&s=avengers')
  .then(res => {
    console.log(res);
    const h2El = document.querySelector('h2');
    const imgEl =  document.querySelector('img');
    h2El.textContent = res.data.Search[0].Title
    imgEl.src = res.data.Search[0].Poster;
    console.log(res.data.Search.length);
  })
}

fetchMovies();
