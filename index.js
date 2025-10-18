//URL API return film list (json)
const FILM_API = "https://ghibliapi.vercel.app/films"

// when finish loading automatically call loadFilms()
window.onload = function(){
    loadFilms();
};

async function loadFilms() {
    try {
        //let user know movie loading
        document.getElementById('movieList').innerHTML = '<p>Loading...</p>'
        //Call API using fetch, await to wait results
        const response = await fetch(FILM_API);
        if (!response.ok) throw new Error("Cannot load ?_?"); //Or no
        //Convert response to json
        const data = await response.json();
        //Call renderFilms()
        renderFilms(data)
    } catch(error) {
        //if fetch happens when wifi-error
        document.getElementById('movieList').innerHTML = '<p>Cannot load API data ?_?</p>'
    }
}

function renderFilms(films){
    const html = films.map(phim =>
        `<div class="movie-card">
            <img src="${phim.image}" alt="${phim.title}">
            <h3>${phim.title}</h3>
            <h4>${phim.original_title}</h4>
            <p><strong>Director:</strong> ${phim.director}</p>
            <p><strong>Rating:</strong> ${phim.rt_score}</p>
        </div>`
    ).join('')
    document.getElementById('movieList').innerHTML = html;
}