// Calculate the average rating for each movie.
// Find the movie with the highest average rating.
// List movies that have a rating lower than 3.

// Average ratings:
//   Inception: 4.75
//   Titanic: 3.6
//   The Matrix: 5
//   Avatar: 3

// Movie with highest average rating: "The Matrix" (avg: 5)
// Movies with low ratings: ["Avatar"]


function movies(input){

    let one=input.filter((rate)=>rate.ratings)
    
    
}













movies([
    { title: "Inception", director: "Christopher Nolan", releaseYear: 2010, ratings: [5, 4, 5, 5] },
    { title: "Titanic", director: "James Cameron", releaseYear: 1997, ratings: [4, 4, 3, 2, 5] },
    { title: "The Matrix", director: "The Wachowskis", releaseYear: 1999, ratings: [5, 5, 5, 5] },
    { title: "Avatar", director: "James Cameron", releaseYear: 2009, ratings: [3, 2, 4, 3] }
  ])