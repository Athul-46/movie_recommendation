var movieDatabase = [
    {
        "title": "The Shawshank Redemption",
        "genre": ["Drama"],
        "year": 1994,
        "rating": 9.3,
        "language": "English",
        "director": "Frank Darabont",
        "cast": ["Tim Robbins", "Morgan Freeman"],
        "mood": "Thoughtful",
        "poster": "https://m.media-amazon.com/images/I/51NiGlapXlL._AC_.jpg"
    },
    {
        "title": "Inception",
        "genre": ["Action", "Sci-Fi", "Thriller"],
        "year": 2010,
        "rating": 8.8,
        "language": "English",
        "director": "Christopher Nolan",
        "cast": ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
        "mood": "Excited",
        "poster": "https://m.media-amazon.com/images/I/510tKZRoXYL._AC_.jpg"
    },
    {
        "title": "Interstellar",
        "genre": ["Adventure", "Drama", "Sci-Fi"],
        "year": 2014,
        "rating": 8.6,
        "language": "English",
        "director": "Christopher Nolan",
        "cast": ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
        "mood": "Adventurous",
        "poster": "https://m.media-amazon.com/images/I/81c91gViu0L._SL1500_.jpg"
    },
    {
        "title": "The Godfather",
        "genre": ["Crime", "Drama"],
        "year": 1972,
        "rating": 9.2,
        "language": "English",
        "director": "Francis Ford Coppola",
        "cast": ["Marlon Brando", "Al Pacino", "James Caan"],
        "mood": "Serious",
        "poster": "https://m.media-amazon.com/images/I/51b5YG6Y1rL._AC_.jpg"
    },
    {
        "title": "Pulp Fiction",
        "genre": ["Crime", "Drama"],
        "year": 1994,
        "rating": 8.9,
        "language": "English",
        "director": "Quentin Tarantino",
        "cast": ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
        "mood": "Thrilling",
        "poster": "https://m.media-amazon.com/images/I/81c91gViu0L._SL1500_.jpg"
    },
    {
        "title": "The Dark Knight",
        "genre": ["Action", "Crime", "Drama"],
        "year": 2008,
        "rating": 9.0,
        "language": "English",
        "director": "Christopher Nolan",
        "cast": ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
        "mood": "Intense",
        "poster": "https://m.media-amazon.com/images/I/81c91gViu0L._SL1500_.jpg"
    },
    {
        "title": "Fight Club",
        "genre": ["Drama"],
        "year": 1999,
        "rating": 8.8,
        "language": "English",
        "director": "David Fincher",
        "cast": ["Brad Pitt", "Edward Norton", "Meat Loaf"],
        "mood": "Rebellious",
        "poster": "https://m.media-amazon.com/images/I/81c91gViu0L._SL1500_.jpg"
    },
    {
        "title": "Forrest Gump",
        "genre": ["Drama", "Romance"],
        "year": 1994,
        "rating": 8.8,
        "language": "English",
        "director": "Robert Zemeckis",
        "cast": ["Tom Hanks", "Robin Wright", "Gary Sinise"],
        "mood": "Heartwarming",
        "poster": "https://m.media-amazon.com/images/I/51b5YG6Y1rL._AC_.jpg"
    },
    {
        "title": "The Matrix",
        "genre": ["Action", "Sci-Fi"],
        "year": 1999,
        "rating": 8.7,
        "language": "English",
        "director": "The Wachowskis",
        "cast": ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
        "mood": "Mind-Bending",
        "poster": "https://m.media-amazon.com/images/I/81c91gViu0L._SL1500_.jpg"
    },
    {
        "title": "Gladiator",
        "genre": ["Action", "Adventure", "Drama"],
        "year": 2000,
        "rating": 8.5,
        "language": "English",
        "director": "Ridley Scott",
        "cast": ["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen"],
        "mood": "Epic",
        "poster": "https://m.media-amazon.com/images/I/81c91gViu0L._SL1500_.jpg"
    },
    {
        "title": "La La Land",
        "genre": ["Comedy", "Drama", "Music"],
        "year": 2016,
        "rating": 8.0,
        "language": "English",
        "director": "Damien Chazelle",
        "cast": ["Ryan Gosling", "Emma Stone", "John Legend"],
        "mood": "Romantic",
        "poster": "https://m.media-amazon.com/images/I/81c91gViu0L._SL1500_.jpg"
    },
    {
        "title": "Titanic",
        "genre": ["Drama", "Romance"],
        "year": 1997,
        "rating": 7.8,
        "language": "English",
        "director": "James Cameron",
        "cast": ["Leonardo DiCaprio", "Kate Winslet", "Billy Zane"],
        "mood": "Emotional",
        "poster": "https://m.media-amazon.com/images/I/81c91gViu0L._SL1500_.jpg"
    },
    {
        "title": "The Avengers",
        "genre": ["Action", "Adventure", "Sci-Fi"],
        "year": 2012,
        "rating": 8.0,
        "language": "English",
        "director": "Joss Whedon",
        "cast": ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo"],
        "mood": "Exciting",
        "poster": "https://m.media-amazon.com/images/I/81c91gViu0L._SL1500_.jpg"
    },
    {
        "title": "Avengers: Endgame",
        "genre": ["Action", "Adventure", "Drama"],
        "year": 2019,
        "rating": 8.4,
        "language": "English",
        "director": "Anthony Russo, Joe Russo",
        "cast": ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo"],
        "mood": "Epic",
        "poster": "https://m.media-amazon.com/images/I/81c91gViu0L._SL1500_.jpg"
    },
    {
        "title": "Joker",
        "genre": ["Crime", "Drama", "Thriller"],
        "year": 2019,
        "rating": 8.5,
        "language": "English",
        "director": "Todd Phillips",
        "cast": ["Joaquin Phoenix", "Robert De Niro", "Zazie Beetz"],
        "mood": "Dark",
        "poster": "https://m.media-amazon.com/images/I/81c91gViu0L._SL1500_.jpg"
    },
    {
        "title": "Parasite",
        "genre": ["Comedy", "Drama", "Thriller"],
        "year": 2019,
        "rating": 8.6,
        "language": "Korean",
        "director": "Bong Joon Ho",
        "cast": ["Kang-ho Song", "Sun-kyun Lee", "Yeo-jeong Jo"],
        "mood": "Intriguing",
        "poster": "https://m.media-amazon.com/images/I/81c91gViu0L._SL1500_.jpg"
    },
    {
        "title": "3 Idiots",
        "genre": ["Comedy", "Drama"],
        "year": 2009,
        "rating": 8.4,
        "language": "Hindi",
        "director": "Rajkumar Hirani",
        "cast": ["Aamir Khan", "Madhavan", "Sharman Joshi"],
        "mood": "Inspiring",
        "poster": "https://m.media-amazon.com/images/I/81c91gViu0L._SL1500_.jpg"
    },
    {
        "title": "Dilwale Dulhania Le Jayenge",
        "genre": ["Drama", "Romance"],
        "year": 1995,
        "rating": 8.1,
        "language": "Hindi",
        "director": "Aditya Chopra",
        "cast": ["Shah Rukh Khan", "Kajol", "Amrish Puri"],
        "mood": "Romantic",
        "poster": "https://m.media-amazon.com/images/I/51b5YG6Y1rL._AC_.jpg"
    },
    {
        "title": "The Lion King",
        "genre": ["Animation", "Adventure", "Drama"],
        "year": 1994,
        "rating": 8.5,
        "language": "English",
        "director": "Roger Allers, Rob Minkoff",
        "cast": ["Matthew Broderick", "Jeremy Irons", "James Earl Jones"],
        "mood": "Heartwarming",
        "poster": "https://m.media-amazon.com/images/I/81c91gViu0L._SL1500_.jpg"
    },
    {
        "title": "Black Swan",
        "genre": ["Drama", "Thriller"],
        "year": 2010,
        "rating": 8.0,
        "language": "English",
        "director": "Darren Aronofsky",
        "cast": ["Natalie Portman", "Mila Kunis", "Vincent Cassel"],
        "mood": "Intense",
        "poster": "https://m.media-amazon.com/images/I/81c91gViu0L._SL1500_.jpg"
    },
    {
        "title": "The Prestige",
        "genre": ["Drama", "Mystery", "Sci-Fi"],
        "year": 2006,
        "rating": 8.5,
        "language": "English",
        "director": "Christopher Nolan",
        "cast": ["Christian Bale", "Hugh Jackman", "Scarlett Johansson"],
        "mood": "Mysterious",
        "poster": "https://m.media-amazon.com/images/I/81c91gViu0L._SL1500_.jpg"
    },
    {
        "title": "Dangal",
        "genre": ["Biography", "Drama", "Sport"],
        "year": 2016,
        "rating": 8.4,
        "language": "Hindi",
        "director": "Nitesh Tiwari",
        "cast": ["Aamir Khan", "Sakshi Tanwar", "Fatima Sana Shaikh"],
        "mood": "Inspirational",
        "poster": "https://m.media-amazon.com/images/I/81c91gViu0L._SL1500_.jpg"
    },
    {
        "title": "Mad Max: Fury Road",
        "genre": ["Action", "Adventure", "Sci-Fi"],
        "year": 2015,
        "rating": 8.1,
        "language": "English",
        "director": "George Miller",
        "cast": ["Tom Hardy", "Charlize Theron", "Nicholas Hoult"],
        "mood": "Adrenaline-Fueled",
        "poster": "https://m.media-amazon.com/images/I/81c91gViu0L._SL1500_.jpg"
    },
    {
        "title": "La Haine",
        "genre": ["Crime", "Drama"],
        "year": 1995,
        "rating": 8.1,
        "language": "French",
        "director": "Mathieu Kassovitz",
        "cast": ["Vincent Cassel", "Hubert Koundé", "Saïd Taghmaoui"],
        "mood": "Intense",
        "poster": "https://m.media-amazon.com/images/I/81c91gViu0L._SL1500_.jpg"
    },
    {
        "title": "Se7en",
        "genre": ["Crime", "Drama", "Mystery"],
        "year": 1995,
        "rating": 8.6,
        "language": "English",
        "director": "David Fincher",
        "cast": ["Morgan Freeman", "Brad Pitt", "Kevin Spacey"],
        "mood": "Dark",
        "poster": "https://m.media-amazon.com/images/I/81c91gViu0L._SL1500_.jpg"
    },
    {
        "title": "Whiplash",
        "genre": ["Drama", "Music"],
        "year": 2014,
        "rating": 8.5,
        "language": "English",
        "director": "Damien Chazelle",
        "cast": ["Miles Teller", "J.K. Simmons", "Melissa Benoist"],
        "mood": "Intense",
        "poster": "https://m.media-amazon.com/images/I/81c91gViu0L._SL1500_.jpg"
    },
    {
        "title": "Bajrangi Bhaijaan",
        "genre": ["Adventure", "Drama"],
        "year": 2015,
        "rating": 8.0,
        "language": "Hindi",
        "director": "Kabir Khan",
        "cast": ["Salman Khan", "Harshaali Malhotra", "Kareena Kapoor"],
        "mood": "Heartwarming",
        "poster": "https://m.media-amazon.com/images/I/81c91gViu0L._SL1500_.jpg"
    },
    {
        "title": "The Grand Budapest Hotel",
        "genre": ["Adventure", "Comedy", "Crime"],
        "year": 2014,
        "rating": 8.1,
        "language": "English",
        "director": "Wes Anderson",
        "cast": ["Ralph Fiennes", "F. Murray Abraham", "Mathieu Amalric"],
        "mood": "Whimsical",
        "poster": "https://m.media-amazon.com/images/I/81c91gViu0L._SL1500_.jpg"
    },
    {
        "title": "Your Name",
        "genre": ["Animation", "Drama", "Fantasy"],
        "year": 2016,
        "rating": 8.4,
        "language": "Japanese",
        "director": "Makoto Shinkai",
        "cast": ["Ryunosuke Kamiki", "Mone Kamishiraishi", "Ryoko Shinohara"],
        "mood": "Emotional",
        "poster": "https://m.media-amazon.com/images/I/81c91gViu0L._SL1500_.jpg"
    },
    {
        "title": "Coco",
        "genre": ["Animation", "Adventure", "Family"],
        "year": 2017,
        "rating": 8.4,
        "language": "English",
        "director": "Lee Unkrich, Adrian Molina",
        "cast": ["Anthony Gonzalez", "Gael García Bernal", "Benjamin Bratt"],
        "mood": "Heartwarming",
        "poster": "https://m.media-amazon.com/images/I/81c91gViu0L._SL1500_.jpg"
    },
    {
        "title": "The Intouchables",
        "genre": ["Biography", "Comedy", "Drama"],
        "year": 2011,
        "rating": 8.5,
        "language": "French",
        "director": "Olivier Nakache, Éric Toledano",
        "cast": ["François Cluzet", "Omar Sy", "Anne Le Ny"],
        "mood": "Inspirational",
        "poster": "https://m.media-amazon.com/images/I/81c91gViu0L._SL1500_.jpg"
    },
    {
        "title": "Oldboy",
        "genre": ["Action", "Drama", "Mystery"],
        "year": 2003,
        "rating": 8.4,
        "language": "Korean",
        "director": "Park Chan-wook",
        "cast": ["Min-sik Choi", "Ji-tae Yu", "Hye-jeong Kang"],
        "mood": "Thrilling",
        "poster": "https://m.media-amazon.com/images/I/81c91gViu0L._SL1500_.jpg"
    },
    {
        "title": "The Hangover",
        "genre": ["Comedy"],
        "year": 2009,
        "rating": 7.7,
        "language": "English",
        "director": "Todd Phillips",
        "cast": ["Bradley Cooper", "Ed Helms", "Zach Galifianakis"],
        "mood": "Funny",
        "poster": "https://m.media-amazon.com/images/I/81c91gViu0L._SL1500_.jpg"
    },
    {
        "title": "Zindagi Na Milegi Dobara",
        "genre": ["Adventure", "Drama", "Romance"],
        "year": 2011,
        "rating": 8.1,
        "language": "Hindi",
        "director": "Zoya Akhtar",
        "cast": ["Hrithik Roshan", "Farhan Akhtar", "Abhay Deol"],
        "mood": "Adventurous",
        "poster": "https://m.media-amazon.com/images/I/81c91gViu0L._SL1500_.jpg"
    },
    {
        "title": "Inside Out",
        "genre": ["Animation", "Adventure", "Comedy"],
        "year": 2015,
        "rating": 8.2,
        "language": "English",
        "director": "Pete Docter, Ronnie del Carmen",
        "cast": ["Amy Poehler", "Phyllis Smith", "Richard Kind"],
        "mood": "Emotional",
        "poster": "https://m.media-amazon.com/images/I/81c91gViu0L._SL1500_.jpg"
    },
    {
        "title": "Slumdog Millionaire",
        "genre": ["Drama", "Romance"],
        "year": 2008,
        "rating": 8.0,
        "language": "Hindi",
        "director": "Danny Boyle",
        "cast": ["Dev Patel", "Freida Pinto", "Anil Kapoor"],
        "mood": "Inspirational",
        "poster": "https://m.media-amazon.com/images/I/81c91gViu0L._SL1500_.jpg"
    },
    {
        "title": "Spirited Away",
        "genre": ["Animation", "Adventure", "Family"],
        "year": 2001,
        "rating": 8.6,
        "language": "Japanese",
        "director": "Hayao Miyazaki",
        "cast": ["Daveigh Chase", "Suzanne Pleshette", "Miyu Irino"],
        "mood": "Magical",
        "poster": "https://m.media-amazon.com/images/I/81c91gViu0L._SL1500_.jpg"
    },
    {
        "title": "Kaho Naa... Pyaar Hai",
        "genre": ["Action", "Romance"],
        "year": 2000,
        "rating": 6.5,
        "language": "Hindi",
        "director": "Rakesh Roshan",
        "cast": ["Hrithik Roshan", "Amisha Patel", "Paresh Rawal"],
        "mood": "Romantic",
        "poster": "https://m.media-amazon.com/images/I/81c91gViu0L._SL1500_.jpg"
    },
    {
        "title": "The Social Network",
        "genre": ["Biography", "Drama"],
        "year": 2010,
        "rating": 7.7,
        "language": "English",
        "director": "David Fincher",
        "cast": ["Jesse Eisenberg", "Andrew Garfield", "Justin Timberlake"],
        "mood": "Thoughtful",
        "poster": "https://m.media-amazon.com/images/I/81c91gViu0L._SL1500_.jpg"
    },
    {
        "title": "Drishyam",
        "genre": ["Crime", "Drama", "Thriller"],
        "year": 2015,
        "rating": 8.2,
        "language": "Malayalam",
        "director": "Jeethu Joseph",
        "cast": ["Mohanlal", "Meena", "Vineeth Kumar"],
        "mood": "Suspenseful",
        "poster": "https://m.media-amazon.com/images/I/81c91gViu0L._SL1500_.jpg"
    },
    {
        "title": "Black Panther",
        "genre": ["Action", "Adventure", "Sci-Fi"],
        "year": 2018,
        "rating": 7.3,
        "language": "English",
        "director": "Ryan Coogler",
        "cast": ["Chadwick Boseman", "Michael B. Jordan", "Lupita Nyong'o"],
        "mood": "Empowering",
        "poster": "https://m.media-amazon.com/images/I/81c91gViu0L._SL1500_.jpg"
    },
    {
        "title": "PK",
        "genre": ["Comedy", "Drama", "Mystery"],
        "year": 2014,
        "rating": 8.1,
        "language": "Hindi",
        "director": "Rajkumar Hirani",
        "cast": ["Aamir Khan", "Anushka Sharma", "Sanjay Dutt"],
        "mood": "Humorous",
        "poster": "https://m.media-amazon.com/images/I/81c91gViu0L._SL1500_.jpg"
    },
    {
        "title": "Dhoom 2",
        "genre": ["Action", "Crime", "Thriller"],
        "year": 2006,
        "rating": 6.7,
        "language": "Hindi",
        "director": "Sanjay Gadhvi",
        "cast": ["Hrithik Roshan", "Aishwarya Rai", "Abhishek Bachchan"],
        "mood": "Exciting",
        "poster": "https://m.media-amazon.com/images/I/81c91gViu0L._SL1500_.jpg"
    },
    {
        "title": "Toy Story",
        "genre": ["Animation", "Adventure", "Comedy"],
        "year": 1995,
        "rating": 8.3,
        "language": "English",
        "director": "John Lasseter",
        "cast": ["Tom Hanks", "Tim Allen", "Don Rickles"],
        "mood": "Fun",
        "poster": "https://m.media-amazon.com/images/I/81c91gViu0L._SL1500_.jpg"
    },
    {
        "title": "Gully Boy",
        "genre": ["Drama", "Music"],
        "year": 2019,
        "rating": 8.0,
        "language": "Hindi",
        "director": "Zoya Akhtar",
        "cast": ["Ranveer Singh", "Alia Bhatt", "Faisal Malik"],
        "mood": "Inspirational",
        "poster": "https://m.media-amazon.com/images/I/81c91gViu0L._SL1500_.jpg"
    },
    {
        "title": "Rock On!!",
        "genre": ["Drama", "Music"],
        "year": 2008,
        "rating": 8.0,
        "language": "Hindi",
        "director": "Abhishek Kapoor",
        "cast": ["Farhan Akhtar", "Shraddha Kapoor", "Arjun Rampal"],
        "mood": "Energetic",
        "poster": "https://m.media-amazon.com/images/I/81c91gViu0L._SL1500_.jpg"
    },
    {
        "title": "Gravity",
        "genre": ["Drama", "Sci-Fi", "Thriller"],
        "year": 2013,
        "rating": 7.7,
        "language": "English",
        "director": "Alfonso Cuarón",
        "cast": ["Sandra Bullock", "George Clooney", "Ed Harris"],
        "mood": "Tense",
        "poster": "https://m.media-amazon.com/images/I/81c91gViu0L._SL1500_.jpg"
    },
    {
        "title": "Lagaan",
        "genre": ["Drama", "Sport"],
        "year": 2001,
        "rating": 8.1,
        "language": "Hindi",
        "director": "Ashutosh Gowariker",
        "cast": ["Aamir Khan", "Gracy Singh", "Rachel Shelley"],
        "mood": "Inspirational",
        "poster": "https://m.media-amazon.com/images/I/81c91gViu0L._SL1500_.jpg"
    },
    {
        "title": "The Silence of the Lambs",
        "genre": ["Crime", "Drama", "Thriller"],
        "year": 1991,
        "rating": 8.6,
        "language": "English",
        "director": "Jonathan Demme",
        "cast": ["Jodie Foster", "Anthony Hopkins", "Lawrence A. Bonney"],
        "mood": "Suspenseful",
        "poster": "https://m.media-amazon.com/images/I/81c91gViu0L._SL1500_.jpg"
    },
    {
        "title": "Swades",
        "genre": ["Drama"],
        "year": 2004,
        "rating": 8.2,
        "language": "Hindi",
        "director": "Ashutosh Gowariker",
        "cast": ["Shah Rukh Khan", "Gayatri Joshi", "Kavita Radheshyam"],
        "mood": "Heartwarming",
        "poster": "https://m.media-amazon.com/images/I/81c91gViu0L._SL1500_.jpg"
    },
    {
        "title": "The Truman Show",
        "genre": ["Comedy", "Drama"],
        "year": 1998,
        "rating": 8.1,
        "language": "English",
        "director": "Peter Weir",
        "cast": ["Jim Carrey", "Ed Harris", "Laura Linney"],
        "mood": "Thought-Provoking",
        "poster": "https://m.media-amazon.com/images/I/81c91gViu0L._SL1500_.jpg"
    },
    {
        "title": "Barfi!",
        "genre": ["Comedy", "Drama", "Romance"],
        "year": 2012,
        "rating": 8.1,
        "language": "Hindi",
        "director": "Anurag Basu",
        "cast": ["Ranbir Kapoor", "Priyanka Chopra", "Irrfan Khan"],
        "mood": "Heartwarming",
        "poster": "https://m.media-amazon.com/images/I/81c91gViu0L._SL1500_.jpg"
    },
    {
        "title": "The Departed",
        "genre": ["Crime", "Drama", "Thriller"],
        "year": 2006,
        "rating": 8.5,
        "language": "English",
        "director": "Martin Scorsese",
        "cast": ["Leonardo DiCaprio", "Matt Damon", "Jack Nicholson"],
        "mood": "Thrilling",
        "poster": "https://m.media-amazon.com/images/I/81c91gViu0L._SL1500_.jpg"
    },
    {
        "title": "Kabhi Khushi Kabhie Gham",
        "genre": ["Drama", "Romance"],
        "year": 2001,
        "rating": 7.4,
        "language": "Hindi",
        "director": "Karan Johar",
        "cast": ["Amitabh Bachchan", "Jaya Bachchan", "Shah Rukh Khan"],
        "mood": "Emotional",
        "poster": "https://m.media-amazon.com/images/I/81c91gViu0L._SL1500_.jpg"
    },
    {
        "title": "The Revenant",
        "genre": ["Action", "Adventure", "Drama"],
        "year": 2015,
        "rating": 8.0,
        "language": "English",
        "director": "Alejandro G. Iñárritu",
        "cast": ["Leonardo DiCaprio", "Tom Hardy", "Will Poulter"],
        "mood": "Intense",
        "poster": "https://m.media-amazon.com/images/I/81c91gViu0L._SL1500_.jpg"
    },
    {
        "title": "The Wolf of Wall Street",
        "genre": ["Biography", "Crime", "Drama"],
        "year": 2013,
        "rating": 8.2,
        "language": "English",
        "director": "Martin Scorsese",
        "cast": ["Leonardo DiCaprio", "Jonah Hill", "Margot Robbie"],
        "mood": "Energetic",
        "poster": "https://m.media-amazon.com/images/I/81c91gViu0L._SL1500_.jpg"
    },
    {
        "title": "Unknown Movie",
        "genre": ["Drama"],
        "year": 2020,
        "rating": 7.5,
        "language": "English",
        "director": "Jane Doe",
        "cast": ["Actor A", "Actor B"],
        "mood": "Calm",
        "poster": "https://via.placeholder.com/250x375?text=No+Image"
    }
]; 
