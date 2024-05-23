let allFilm = [
    {
        image: "interstellar.jpg",
        title: "Interstellar",
        year: 2014,
        rating: 8.7,
        duration: 169,
        genre: ["Adventure", "Drama", "Sci-Fi"]
    },
    {
        image: "oldboy.jpg",
        title: "Oldboy",
        year: 2003,
        rating: 8.3,
        duration: 120,
        genre: ["Action", "Drama", "Mystery"]
    },
    {
        image: "loveactually.jpg",
        title: "Love Actually",
        year: 2003,
        rating: 7.6,
        duration: 135,
        genre: ["Comedy", "Drama", "Romance"]
    },
    {
        image: "district9.jpg",
        title: "District 9",
        year: 2009,
        rating: 7.9,
        duration: 112,
        genre: ["Action", "Sci-Fi", "Thriller"]
    },
    {
        image: "theDarkKnight.jpg",
        title: "The Dark Knight",
        year: 2008,
        rating: 9,
        duration: 152,
        genre: ["Action", "Crime", "Drama"]
    },
    {
        image: "rush.jpg",
        title: "Rush",
        year: 2013,
        rating: 8.1,
        duration: 123,
        genre: ["Action", "Biography", "Drama"]
    },
    {
        image: "LostinTranslation.jpg",
        title: "Lost in Translation",
        year: 2003,
        rating: 7.7,
        duration: 102,
        genre: ["Comedy", "Drama"]
    },
    {
        image: "SilenceoftheLambs.jpg",
        title: "The Silence of the Lambs",
        year: 1991,
        rating: 8.6,
        duration: 118,
        genre: ["Crime", "Drama", "Thriller"]
    },
    {
        image: "WindRiver.jpg",
        title: "Wind River",
        year: 2017,
        rating: 7.7,
        duration: 107,
        genre: ["Crime", "Drama", "Mystery"]
    },
    {
        image: "DarkFigureofCrime.jpg",
        title: "Dark Figure of Crime",
        year: 2018,
        rating: 6.7,
        duration: 110,
        genre: ["Crime", "Drama", "Thriller"]
    },
    {
        image: "Talvar.jpg",
        title: "Talvar",
        year: 2015,
        rating: 8.1,
        duration: 132,
        genre: ["Crime", "Drama", "Mystery"]
    },
    {
        image: "In the Mood for Love.jpg",
        title: "In the Mood for Love",
        year: 2000,
        rating: 8.1,
        duration: 98,
        genre: ["Drama", "Romance"]
    },
    {
        image: "Gladiator.jpg",
        title: "Gladiator",
        year: 2000,
        rating: 8.5,
        duration: 155,
        genre: ["Action", "Adventure", "Drama"]
    },
    {
        image: "No Country for Old Men.jpg",
        title: "No Country for Old Men",
        year: 2007,
        rating: 8.2,
        duration: 122,
        genre: ["Crime", "Drama", "Thriller"]
    },
    {
        image: "The Lord of the Rings.jpg",
        title: "The Lord of the Rings The Fellowship of the Ring",
        year: 2001,
        rating: 8.9,
        duration: 178,
        genre: ["Action", "Adventure", "Drama"]
    },
    {
        image: "The Shining.jpg",
        title: "The Shining",
        year: 1980,
        rating: 8.4,
        duration: 146,
        genre: ["Drama", "Horror"]
    },
    {
        image: "The Return.jpg",
        title: "The Return",
        year: 2003,
        rating: 7.9,
        duration: 110,
        genre: ["Drama"]
    },
    {
        image: "Ratatouille.jpg",
        title: "Ratatouille",
        year: 2007,
        rating: 8.1,
        duration: 111,
        genre: ["Animation", "Adventure", "Comedy"]
    },
    {
        image: "Monsters, Inc..jpg",
        title: "Monsters, Inc.",
        year: 2001,
        rating: 8.1,
        duration: 92,
        genre: ["Animation", "Adventure", "Comedy"]
    },
    {
        image: "Heat.jpg",
        title: "Heat",
        year: 1995,
        rating: 8.3,
        duration: 170,
        genre: ["Action", "Crime", "Drama"]
    },
    {
        image: "The Last Samurai.jpg",
        title: "The Last Samurai",
        year: 2003,
        rating: 7.8,
        duration: 154,
        genre: ["Action", "Drama"]
    },
    {
        image: "Planet of the Apes.jpg",
        title: "Planet of the Apes",
        year: 1968,
        rating: 8,
        duration: 112,
        genre: ["Adventure", "Sci-Fi"]
    },
    {
        image: "Midnight in Paris.jpg",
        title: "Midnight in Paris",
        year: 2011,
        rating: 7.6,
        duration: 94,
        genre: ["Comedy", "Fantasy", "Romance"]
    },
    {
        image: "Elysium.jpg",
        title: "Elysium",
        year: 2013,
        rating: 6.6,
        duration: 109,
        genre: ["Action", "Drama", "Sci-Fi"]
    },
    {
        image: "Slumdog Millionaire.jpg",
        title: "Slumdog Millionaire",
        year: 2008,
        rating: 8,
        duration: 120,
        genre: ["Crime", "Drama", "Romance"]
    },
    {
        image: "Amélie.jpg",
        title: "Amélie",
        year: 2001,
        rating: 8.3,
        duration: 122,
        genre: ["Comedy", "Romance"]
    },
    {
        image: "A Clockwork Orange.jpg",
        title: "A Clockwork Orange",
        year: 1971,
        rating: 8.3,
        duration: 136,
        genre: ["Crime", "Sci-Fi"]
    },
    {
        image: "Mother!.jpg",
        title: "Mother!",
        year: 2017,
        rating: 6.6,
        duration: 121,
        genre: ["Drama", "Horror", "Mystery"]
    },
    {
        image: "Gone Girl.jpg",
        title: "Gone Girl",
        year: 2014,
        rating: 8.1,
        duration: 149,
        genre: ["Drama", "Mystery", "Thriller"]
    },
    {
        image: "The Wind Rises.jpg",
        title: "The Wind Rises",
        year: 2013,
        rating: 7.8,
        duration: 126,
        genre: ["Animation", "Biography", "Drama"]
    },
    {
        image: "The Chaser.jpg",
        title: "The Chaser",
        year: 2008,
        rating: 7.8,
        duration: 125,
        genre: ["Action", "Crime", "Drama"]
    },
    {
        image: "Mr. Nobody.jpg",
        title: "Mr. Nobody",
        year: 2009,
        rating: 7.7,
        duration: 141,
        genre: ["Drama", "Fantasy", "Romance"]
    },
    {
        image: "Arrival.jpg",
        title: "Arrival",
        year: 2016,
        rating: 7.9,
        duration: 116,
        genre: ["Drama", "Mystery", "Sci-Fi"]
    },
    {
        image: "The Damned United.jpg",
        title: "The Damned United",
        year: 2009,
        rating: 7.5,
        duration: 98,
        genre: ["Biography", "Drama", "Sport"]
    },
    {
        image: "Harry Potter.jpg",
        title: "Harry Potter and the Half-Blood Prince",
        year: 2009,
        rating: 7.6,
        duration: 153,
        genre: ["Action", "Adventure", "Family"]
    },
    {
        image: "Green Book.jpg",
        title: "Green Book",
        year: 2018,
        rating: 8.2,
        duration: 130,
        genre: ["Biography", "Comedy", "Drama"]
    },
    {
        image: "The Fountain.jpg",
        title: "The Fountain",
        year: 2006,
        rating: 7.2,
        duration: 97,
        genre: ["Drama", "Mystery", "Romance"]
    },
    {
        image: "The Handmaiden.jpg",
        title: "The Handmaiden",
        year: 2016,
        rating: 8.1,
        duration: 145,
        genre: ["Drama", "Romance", "Thriller"]
    },
    {
        image: "Iron Man.jpg",
        title: "Iron Man",
        year: 2008,
        rating: 7.9,
        duration: 126,
        genre: ["Action", "Adventure", "Sci-Fi"]
    },
    {
        image: "Inflame.jpg",
        title: "Inflame",
        year: 2017,
        rating: 6.4,
        duration: 94,
        genre: ["Drama", "Thriller"]
    },
    {
        image: "The Girl on the Train.jpg",
        title: "The Girl on the Train",
        year: 2016,
        rating: 6.5,
        duration: 112,
        genre: ["Crime", "Drama", "Mystery"]
    },
    {
        image: "Training Day.jpg",
        title: "Training Day",
        year: 2001,
        rating: 7.7,
        duration: 122,
        genre: ["Crime", "Drama", "Thriller"]
    },
    {
        image: "The Book of Eli.jpg",
        title: "The Book of Eli",
        year: 2010,
        rating: 6.8,
        duration: 118,
        genre: ["Action", "Adventure", "Drama"]
    },
    {
        image: "Contact.jpg",
        title: "Contact",
        year: 1997,
        rating: 7.5,
        duration: 150,
        genre: ["Drama", "Mystery", "Sci-Fi"]
    },
    {
        image: "Nocturnal Animals.jpg",
        title: "Nocturnal Animals",
        year: 2016,
        rating: 7.5,
        duration: 116,
        genre: ["Drama", "Thriller"]
    },
    {
        image: "Nightcrawler.jpg",
        title: "Nightcrawler",
        year: 2014,
        rating: 7.8,
        duration: 117,
        genre: ["Crime", "Drama", "Thriller"]
    },
    {
        image: "Avatar.jpg",
        title: "Avatar",
        year: 2009,
        rating: 7.9,
        duration: 162,
        genre: ["Action", "Adventure", "Fantasy"]
    }
];
$(document).ready(function() {
    // show all films
    allFilm.forEach(function(movie) {
        var movieHTML = `
            <div class="movie">
            <img src="img/poster/${movie.title}.jpg" alt="Film Afişi">
                <h2>${movie.title}</h2>
                <p>Year: ${movie.year}</p>
                <p>&#x2605; <span class="rating">${movie.rating}</span></p>
                <p>Duration: ${movie.duration} mins</p>
                <p>Genre: ${movie.genre.join(', ')}</p>
                <button class="add-to-favorites" data-title="${movie.title}">Add</button>
            </div>
        `;
        $('#allList').append(movieHTML);
    });

    //add to favs
    $('.add-to-favorites').click(function() {
        var title = $(this).data('title');
        var favoritesList = JSON.parse(localStorage.getItem('favorites')) || [];
        var selectedMovie = allFilm.find(function(movie) {
            return movie.title === title;
        });
        if (!favoritesList.some(function(movie) {
            return movie.title === selectedMovie.title;
        })) {
            favoritesList.push(selectedMovie);
            $('#msg').text(`"${selectedMovie.title}" is added to your list.`);
        } else {
            $('#msg').text(`"${selectedMovie.title}" is already added to your list.`);
        }
        localStorage.setItem('favorites', JSON.stringify(favoritesList));
    });
});
function searchMovies() {
    var input, filter, movies, movieContainer, movie, title, i;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    movieContainer = document.getElementById("allList");
    movies = movieContainer.getElementsByClassName("movie");
    for (i = 0; i < movies.length; i++) {
        title = movies[i].getElementsByTagName("h2")[0];
        if (title.innerHTML.toUpperCase().indexOf(filter) > -1) {
            movies[i].style.display = "";
        } else {
            movies[i].style.display = "none";
        }
    }
}


// var moviesContainer = document.getElementById('allList');

// allFilm.forEach(function(movie) {
//     var movieHTML = `
//         <div class="movie">
//             <img src="img/bcki.jpg" alt="Film Afişi">
//             <h2>${movie.title}</h2>
//             <p>Year: ${movie.year}</p>
//             <p>&#x2605; <span class="rating">${movie.rating}</span></p>
//             <p>Duration: ${movie.duration} mins</p>
//             <p>Genre: ${movie.genre.join(', ')}</p>
//             <button class="add-to-favorites" onclick="addToFavorites('${movie.title}')">Add</button></div>
//     `;
//     moviesContainer.innerHTML += movieHTML;
// });

// /// Favorilere ekleme işlevi
// function addToFavorites(title) {
//     // Favoriler listesini al
//     var favoritesList = JSON.parse(localStorage.getItem('favorites')) || [];

//     // Eklenmek istenen filmi bul
//     var selectedMovie = allFilm.find(function(movie) {
//         return movie.title === title;
//     });

//     // Eğer film favoriler listesinde yoksa ekle
//     if (!favoritesList.some(function(movie) {
//         return movie.title === selectedMovie.title;
//     })) {
//         favoritesList.push(selectedMovie);
//         // Favori eklendi mesajını göster
//         var msgDiv = document.getElementById('msg');
//         msgDiv.innerText = `"${selectedMovie.title}" is addded to your list.`;
//     } else {
//         // Film zaten favoriler listesinde olduğu için uyarı mesajı göster
//         var msgDiv = document.getElementById('msg');
//         msgDiv.innerText = `"${selectedMovie.title}" is already added to your list.`;
//     }

//     // Güncellenmiş favoriler listesini localStorage'e kaydet
//     localStorage.setItem('favorites', JSON.stringify(favoritesList));
// }








