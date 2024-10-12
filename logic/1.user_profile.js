const user = {
    username: "",
    age: 0,
    movies: ""
};

user.username = prompt("Type your username");
user.age = prompt("Type your age");
user.movies = prompt("Type your favorite movies separated by semicolon");

console.log("Username: ", user.username);
console.log("Age: ", user.age);
console.log("Movies: ", user.movies);

user.movies = user.movies.split(";");

console.log(`The film ${user.movies[Math.floor(Math.random() * user.movies.length)]} is one of my favorites`);