// Fav arr
var favoritesList = JSON.parse(localStorage.getItem('favorites')) || [];
favoritesList=[
    {
        title: "Interstellar",
        year: 2014,
        rating: 8.7,
        duration: 169,
        genre: ["Adventure", "Drama", "Sci-Fi"],
       
    },
    {
        title: "Oldboy",
        year: 2003,
        rating: 8.3,
        duration: 120,
        genre: ["Action", "Drama", "Mystery"],
      

    }
];

// show favs
function displayFavorites() {
    var favoritesList = JSON.parse(localStorage.getItem('favorites')) || [];

    var favoritesContainer = document.getElementById('favorites-list');
    favoritesContainer.innerHTML = ''; // clean before

    favoritesList.forEach(function(movie) {
        movietit=" ";
        movietit=movie.title;

        var movieHTML = `
        <div class="movie" id="movie-${movie.title}">
        <img src="img/poster/${movie.title}.jpg" alt="Film Afişi">
        <h2>${movie.title}</h2>
        <p>Year: ${movie.year}</p>
        <p>&#x2605; <span class="rating" id="rating-${movie.title}">${movie.rating}</span></p>
        <p>Duration: ${movie.duration} mins</p>
        <p>Genre: ${movie.genre.join(', ')}</p>
        <button class="remove-from-list" onclick="removeFromFavorites('${movie.title}')">Remove</button>
        <button onclick="openRatingDialog('${movie.title}')">Rate </button>
    </div>
    
    <div id="ratingDialog" class="rating-dialog">
        <div class="rating-dialog-content">
            <span onclick="closeRatingDialog()" class="close">&times;</span>
            <p>Rate Movie  (0-10):</p>
            <input type="number" id="newRating" min="0" max="10" step="0.1">
            <button onclick="rateMovie('${movie.title}')"> Rate </button>
            <input type="hidden" id="ratingMovieTitle">

        </div>
    </div>
    
    
        `;
        favoritesContainer.innerHTML += movieHTML;
    });
}

function openRatingDialog(title) {
    var ratingDialog = document.getElementById("ratingDialog");
    ratingDialog.style.display = "block";
    // Yeni bir puan girişi yapılacağı zaman hangi film için olduğunu tutacak gizli bir input alanına film başlığını yazalım
    document.getElementById("ratingMovieTitle").value = title;
    document.getElementById("name").value = title;



}
function closeRatingDialog() {
    var ratingDialog = document.getElementById("ratingDialog");
    ratingDialog.style.display = "none";
}

function rateMovie() {
    var newRating = document.getElementById("newRating").value;
    var title = document.getElementById("ratingMovieTitle").value;

    if (isValidRating(newRating)) {
        // Favoriler listesini al
        var favoritesList = JSON.parse(localStorage.getItem('favorites')) || [];
        
        // find selected film
        var selectedMovieIndex = favoritesList.findIndex(function(movie) {
            return movie.title === title;
        });

        // update new rate
        favoritesList[selectedMovieIndex].rating = parseFloat(newRating);

        //save updated fav list to lacalstorage 
        localStorage.setItem('favorites', JSON.stringify(favoritesList));

        // close rate page
        closeRatingDialog();

        //reload
        location.reload();
    } else {
        alert("Invalid score! Please enter a number between 0 and 10.");
    }
}


function isValidRating(rating) {
    var numericRating = parseFloat(rating);
    return !isNaN(numericRating) && numericRating >= 0 && numericRating <= 10;
}


// remove
function removeFromFavorites(title) {
    var favoritesList = JSON.parse(localStorage.getItem('favorites')) || [];

    // remove from list
    favoritesList = favoritesList.filter(function(movie) {
        return movie.title !== title;
    });

        //save updated fav list to lacalstorage 
        localStorage.setItem('favorites', JSON.stringify(favoritesList));

    // show fav list again
    displayFavorites();
     // show msg
     var msgDiv = document.getElementById('msg');
     msgDiv.innerText = `"${title}" removed from your list.`;
 
}
displayFavorites();
