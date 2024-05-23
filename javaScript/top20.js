let top20 = [
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
        image: "Love Actually.jpg",
        title: "Love Actually",
        year: 2003,
        rating: 7.6,
        duration: 135,
        genre: ["Comedy", "Drama", "Romance"]
    },
    {
        image: "District 9.jpg",
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
        image: "MoodforLove.jpg",
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
        image: "The Lord of the Rings The Fellowship of the Ring.jpg",
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
    }
];
$(document).ready(function() {
    // Tüm filmleri göster
    top20.forEach(function(movie) {
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
        $('#top').append(movieHTML);
    });

    // Favorilere ekleme işlevi
    $('.add-to-favorites').click(function() {
        var title = $(this).data('title');
        var favoritesList = JSON.parse(localStorage.getItem('favorites')) || [];
        var selectedMovie = top20.find(function(movie) {
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
$('#searchInput').on('input', function() {
    var searchText = $(this).val().toUpperCase();
    $('.movie').each(function() {
        var title = $(this).find('h2').text().toUpperCase();
        if (title.includes(searchText)) {
            $(this).show();
        } else {
            $(this).hide();
        }
    });
});
