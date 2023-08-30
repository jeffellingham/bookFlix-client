/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use("bookFlixDB");

db.movies.insertOne({
  title: "The Shining",
  releaseYear: 1980,
  director: {
    name: "Stanley Kubrick",
    birth: "1928",
    death: "1999",
    bio: "Stanley Kubrick was an American film director, producer, screenwriter and photographer. Widely considered one of the greatest filmmakers of all time, his films—almost all of which are adaptations of novels or short stories—cover a wide range of genres and feature innovative cinematography, dark humor, realistic attention to detail and extensive set designs.",
  },
  genre: {
    name: "Horror",
    description: "Horror films are often based on real events or fictional characters.",
  },
  description:
    "A family heads to an isolated hotel for the winter, but soon an evil presence begins to terrorize the hotel.",
  actors: ["Jack Nicholson", "Shelley Duvall", "Danny Lloyd"],
  featured: true,
  book: { title: "The Shining", author: "Stephen King" },
  imagePath: "https://alternativemovieposters.com/wp-content/uploads/2021/08/QaiserAzim_Shining.jpg",
});
db.movies.insertOne({
  title: "Jurassic Park",
  releaseYear: 1993,
  director: {
    name: "Steven Spielberg",
    birth: "1946",
    bio: "One of the most influential personalities in the history of cinema, Steven Spielberg is Hollywood's best known director and one of the wealthiest filmmakers in the world. He has an extraordinary number of commercially successful and critically acclaimed credits to his name, either as a director, producer or writer since launching the summer blockbuster with Jaws (1975), and he has done more to define popular film-making since the mid-1970s than anyone else.",
  },
  genre: {
    name: "Adventure",
    description: "Adventure films are characterized by a sense of wonder, excitement, and danger.",
  },
  description:
    "After new evidence of dinosaur extinction is discovered, Dr. Alan Grant and Dr. Ellie Sattler travel to an unexplored island in search of other dinosaurs to study.",
  actors: ["Sam Neill", "Laura Dern", "Jeff Goldblum"],
  featured: false,
  book: { title: "Jurassic Park", author: "Michael Crichton" },
  imagePath:
    "https://alternativemovieposters.com/wp-content/uploads/2023/05/Ludo-D.RODRIGUEZ-PASCAL_JurassicPark.jpg",
});
db.movies.insertOne({
  title: "Jaws",
  releaseYear: 1975,
  director: {
    name: "Steven Spielberg",
    birth: "1946",
    bio: "One of the most influential personalities in the history of cinema, Steven Spielberg is Hollywood's best known director and one of the wealthiest filmmakers in the world. He has an extraordinary number of commercially successful and critically acclaimed credits to his name, either as a director, producer or writer since launching the summer blockbuster with Jaws (1975), and he has done more to define popular film-making since the mid-1970s than anyone else.",
  },
  genre: {
    name: "Horror",
    description: "Horror films are often based on real events or fictional characters.",
  },
  description:
    "When a killer shark unleashes chaos on a beach community, a police chief, a marine scientist, and a grizzled shark hunter seek revenge.",
  actors: ["Roy Scheider", "Robert Shaw", "Richard Dreyfuss"],
  featured: false,
  book: { title: "Jaws", author: "Peter Benchley" },
  imagePath: "https://alternativemovieposters.com/wp-content/uploads/2023/06/Kailynn-Heide_Jaws.jpg",
});
db.movies.insertOne({
  title: "Watchmen",
  releaseYear: 2009,
  director: {
    name: "Zack Snyder",
    birth: "1979",
    bio: "Zack Snyder is an American film director, screenwriter, and producer. He is known for his work in science fiction, action, and adventure films.",
  },
  genre: {
    name: "Fantasy",
    description: "Fantasy films are characterized by a sense of wonder, excitement, and danger.",
  },
  description:
    "In 1985 where former superheroes exist, the murder of a colleague sends active vigilante Rorschach into his own sprawling investigation, uncovering something that could completely change the course of history as we know it.",
  actors: [
    "Jackie Earle Haley",
    "Patrick Wilson",
    "Carla Gugino",
    "Malin Akerman",
    "Billy Crudup",
    "Jeffrey Dean Morgan",
  ],
  featured: false,
  book: { title: "Watchmen", author: "Alan Moore" },
  imagePath:
    "https://www.movieposters.com/cdn/shop/products/ea155b9c724482297dfa471bb5531279_b6d4c724-c298-472f-a127-081d4f10664d_480x.progressive.jpg?v=1573587216",
});
db.movies.insertOne({
  title: "30 Days of Night",
  releaseYear: 2007,
  director: {
    name: "David Slade",
    birth: "1964",
    bio: "David Slade is an American film director, screenwriter, and producer. He is known for his work in science fiction, action, and adventure films.",
  },
  genre: {
    name: "Horror",
    description: "Horror films are often based on real events or fictional characters.",
  },
  description:
    "After an Alaskan town is plunged into darkness for a month, it is attacked by a bloodthirsty gang of vampires.",
  actors: ["Josh Hartnett", "Melissa George", "Danny Huston"],
  featured: false,
  book: { title: "30 Days of Night", author: "Steve Niles" },
  imagePath: "https://alternativemovieposters.com/wp-content/uploads/2020/07/David-Storey_30daysofnight.jpg",
});
db.movies.insertOne({
  title: "The Silence of the Lambs",
  releaseYear: 1991,
  description:
    "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
  actors: ["Jodie Foster", "Anthony Hopkins", "Lawrence A. Bonney"],
  director: {
    name: "Jonathan Demme",
    bio: "Jonathan Demme is an American film director, screenwriter, and producer. He is known for his work in science fiction, action, and adventure films.",
    birth: "1944",
  },
  genre: {
    name: "Horror",
    description: "Horror films are often based on real events or fictional characters.",
  },
  featured: false,
  book: { title: "The Silence of the Lambs", author: "Thomas Harris" },
  imagePath: "https://alternativemovieposters.com/wp-content/uploads/2021/10/Ruiz-Burgos_Lambs.jpg",
});
db.movies.insertOne({
  title: "Scott Pilgrim vs. the World",
  releaseYear: 2010,
  director: {
    name: "Edgar Wright",
    bio: "Edgar Wright is an English film director, screenwriter, and producer. He is known for his work in science fiction, action, and adventure films.",
    birth: "1974",
  },
  genre: {
    name: "Adventure",
    description: "Adventure films are characterized by a sense of wonder, excitement, and danger.",
  },
  description:
    "In a magically realistic version of Toronto, a young man must defeat his new girlfriend's seven evil exes one by one in order to win her heart.",
  actors: ["Michael Cera", "Anna Kendrick", "Mary Elizabeth Winstead", "Kieran Culkin"],
  featured: true,
  book: { title: "Scott Pilgrim", author: "Bryan Lee O'Malley" },
  imagePath:
    "https://www.movieposters.com/cdn/shop/products/86312c3259646fac26869c83f5670468_8c97fd3f-4491-493d-8f82-45ce96b90c73_480x.progressive.jpg?v=1573653960",
});
db.movies.insertOne({
  title: "The Green Mile",
  releaseYear: 1999,
  description:
    "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.",
  actors: ["Tom Hanks", "Michael Clarke Duncan", "David Morse"],
  director: {
    name: "Frank Darabont",
    bio: "Frank Darabont is an American film director, screenwriter, and producer. He is known for his work in science fiction, action, and adventure films.",
    birth: "1959",
  },
  genre: {
    name: "Drama",
    description: "Drama films are characterized by a strong focus on the emotions and intense situations.",
  },
  featured: false,
  book: { title: "The Green Mile", author: "Stephen King" },
  imagePath:
    "https://www.movieposters.com/cdn/shop/products/033152cb8ba4518411a359686f4a194e_e51d49fa-d8b2-4aaf-82dd-9779f297352c_480x.progressive.jpg?v=1573585373",
});
db.movies.insertOne({
  title: "The Bourne Identity",
  releaseYear: 2002,
  description:
    "A man is picked up by a fishing boat, bullet-riddled and suffering from amnesia, before racing to elude assassins and track down his killers.",
  actors: ["Matt Damon", "Julia Stiles", "Franka Potente", "Clive Owen", "Brian Cox"],
  genre: {
    name: "Action",
    description: "Action films are characterized by a sense of wonder, excitement, and danger.",
  },
  director: {
    name: "Doug Liman",
    bio: "Doug Liman is an American film director, screenwriter, and producer. He is known for his work in science fiction, action, and adventure films.",
    birth: "1965",
  },
  featured: false,
  book: { title: "The Bourne Identity", author: "Robert Ludlum" },
  imagePath:
    "https://www.movieposters.com/cdn/shop/products/06e4c4041a0c11a88e468fd21e75bd45_be74c805-aaaa-4f23-a7f8-03955c547b99_480x.progressive.jpg?v=1573651533",
});
db.movies.insertOne({
  title: "The Bourne Supremacy",
  releaseYear: 2004,
  description:
    "When Jason Bourne is framed for a CIA operation gone awry, he is forced to resume his former life as a trained assassin to survive.",
  actors: ["Matt Damon", "Julia Stiles", "Franka Potente", "Joan Allen", "Brian Cox"],
  genre: {
    name: "Action",
    description: "Action films are characterized by a sense of wonder, excitement, and danger.",
  },
  director: {
    name: "Paul Greengrass",
    bio: "Paul Greengrass is an American film director, screenwriter, and producer. He is known for his work in science fiction, action, and adventure films.",
    birth: "1955",
  },
  featured: false,
  book: { title: "The Bourne Supremacy", author: "Robert Ludlum" },
  imagePath:
    "https://www.movieposters.com/cdn/shop/products/f6af67727bbda75193116af16503cdf4_d5df669c-1aa7-47d8-ae2d-5d07f22f8457_480x.progressive.jpg?v=1573618997",
});
db.movies.insertOne({
  title: "Casino Royale",
  releaseYear: 2006,
  description:
    "A secret agent is dispatched to London to find a missing scientist and recover a mysterious briefcase.",
  actors: ["Daniel Craig", "Judi Dench", "Jeffrey Wright", "Eva Green", "Mads Mikkelsen"],
  genre: {
    name: "Action",
    description: "Action films are characterized by a sense of wonder, excitement, and danger.",
  },
  director: {
    name: "Martin Campbell",
    bio: "Martin Campbell is an American film director, screenwriter, and producer. He is known for his work in science fiction, action, and adventure films.",
    birth: "1943",
  },
  featured: false,
  book: { title: "Casino Royale", author: "Ian Fleming" },
  imagePath:
    "https://www.movieposters.com/cdn/shop/products/casino-royale_ad7d5f83_32c1cd0c-e1e0-4a44-ba1f-59a3c3ac5944_480x.progressive.jpg?v=1648655989",
});
db.movies.insertOne({
  title: "Jojo Rabbit",
  releaseYear: 2019,
  description:
    "A young boy in Hitler's Germany experiences the joy, pain, and absurdities of being a young boy in Hitler's Germany.",
  actors: ["Roman Griffin Davis", "Thomasin McKenzie", "Scarlett Johansson"],
  genre: {
    name: "Drama",
    description: "Drama films are characterized by a strong focus on the emotions and intense situations.",
  },
  director: {
    name: "Taika Waititi",
    bio: 'Taika Waititi is a New Zealand film director, writer, and actor known for his unique sense of humor and visual style. He has directed several critically acclaimed films, including "Thor: Ragnarok" and "Jojo Rabbit," and has won numerous awards for his work.',
    birth: "1975",
  },
  featured: false,
  book: { title: "Caging Skies", author: "Christine Leunens" },
  imagePath: "https://alternativemovieposters.com/wp-content/uploads/2020/12/Jojo_Rabbit_Jamie_Stark.jpg",
});
db.movies.insertOne({
  title: "Never Let Me Go",
  releaseYear: 2010,
  description:
    "The lives of three friends, from their early school days into young adulthood, when the reality of the world they live in comes knocking.",
  actors: ["Keira Knightley", "Carey Mulligan", "Andrew Garfield"],
  genre: {
    name: "Drama",
    description: "Drama films are characterized by a strong focus on the emotions and intense situations.",
  },
  director: {
    name: "Mark Romanek",
    bio: 'Mark Romanek is a talented filmmaker and music video director known for his visually striking and often surreal work. Some of his notable projects include the music videos for "Creep" by Radiohead and "Bullet with Butterfly Wings" by Smashing Pumpkins, as well as the feature film "Never Let Me Go" (2010).',
    birth: "1959",
  },
  featured: false,
  book: { title: "Never Let Me Go", author: "Kazuo Ishiguro" },
  imagePath:
    "https://www.movieposters.com/cdn/shop/products/cd9066ab059c9d262f69a11f0d29b01f_7cb9a2dd-309f-4a24-86ae-fbe4fc7e0012_480x.progressive.jpg?v=1573652685",
});
db.movies.insertOne({
  title: "Crazy Rich Asians",
  releaseYear: 2018,
  description:
    "This contemporary romantic comedy, based on a global bestseller, follows native New Yorker Rachel Chu to Singapore to meet her boyfriend's family.",
  actors: ["Constance Wu", "Henry Golding", "Michelle Yeoh", "Awkwafina"],
  genre: {
    name: "Comedy",
    description: "Comedy films are characterized by a strong focus on the emotions and intense situations.",
  },
  director: {
    name: "Jon M. Chu",
    bio: "Jon M. Chu is an American film director, screenwriter, and producer. He is known for his work in romantic comedies and action films.",
    birth: "1979",
  },
  featured: false,
  book: { title: "Crazy Rich Asians", author: "Kevin Kwan" },
  imagePath: "https://m.media-amazon.com/images/M/MV5BMTYxNDMyOTAxN15BMl5BanBnXkFtZTgwMDg1ODYzNTM@._V1_.jpg",
});
db.movies.insertOne({
  title: "Shutter Island",
  releaseYear: 2015,
  description:
    "In 1954, a U.S. Marshal investigates the disappearance of a murderer who escaped from a hospital for the criminally insane.",
  actors: ["Leonardo DiCaprio", "Emily Mortimer", "Mark Ruffalo", "Ben Kingsley"],
  genre: {
    name: "Drama",
    description: "Drama films are characterized by a strong focus on the emotions and intense situations.",
  },
  director: {
    name: "Martin Scorsese",
    bio: "Martin Charles Scorsese is an American and Italian film director, producer, screenwriter and actor. Scorsese emerged as one of the major figures of the New Hollywood era.",
    birth: "1942",
  },
  featured: false,
  book: { title: "Shutter Island", author: "Dennis Lehane" },
  imagePath: "https://alternativemovieposters.com/wp-content/uploads/2021/11/melvinmago-shutterisland.jpg",
});
db.movies.insertOne({
  title: "Stardust",
  releaseYear: 2007,
  description:
    "In a countryside town bordering on a magical land, a young man makes a promise to his beloved that he'll retrieve a fallen star by venturing into the magical realm.",
  actors: ["Charlie Cox", "Claire Danes", "Sienna Miller", "Michelle Pfeiffer", "Robert De Niro"],
  genre: {
    name: "Drama",
    description: "Drama films are characterized by a strong focus on the emotions and intense situations.",
  },
  director: {
    name: "Matthew Vaughn",
    bio: "Matthew Vaughn is an American film director, screenwriter, and producer. He is known for his work in romantic comedies and action films.",
    birth: "1971",
  },
  featured: false,
  book: { title: "Stardust", author: "Neil Gaiman" },
  imagePath: "https://www.movieposters.com/cdn/shop/products/stardust_480x.progressive.jpg?v=1579124325",
});
db.movies.insertOne({
  title: "The Girl with the Dragon Tattoo",
  releaseYear: 2011,
  description:
    "Journalist Mikael Blomkvist is aided in his search for a woman who has been missing for forty years by Lisbeth Salander, a young computer hacker.",
  actors: ["Daniel Craig", "Rooney Mara", "Christopher Plummer", "Stellan Skarsgård"],
  genre: {
    name: "Drama",
    description: "Drama films are characterized by a strong focus on the emotions and intense situations.",
  },
  director: {
    name: "David Fincher",
    bio: "David Andrew Leo Fincher is an American filmmaker. His films, most of which are psychological thrillers, have collectively grossed over $2.1 billion worldwide and have received 40 Academy Award nominations; this includes three Best Director nominations for him.",
    birth: "1962",
  },
  featured: false,
  book: { title: "The Girl with the Dragon Tattoo", author: "Stieg Larsson" },
  imagePath:
    "https://www.movieposters.com/cdn/shop/products/233c991b232bc640ffa8124d59284018_480x.progressive.jpg?v=1573593867",
});
db.movies.insertOne({
  title: "Coraline",
  releaseYear: 2009,
  description:
    "An adventurous 11-year-old girl finds another world that is a strangely idealized version of her frustrating home, but it has sinister secrets.",
  actors: ["Dakota Fanning", "Teri Hatcher", "John Hodgman"],
  genre: {
    name: "Animation",
    description:
      "Animation films are characterized by a strong focus on the emotions and intense situations.",
  },
  director: {
    name: "Henry Selick",
    bio: "Henry Selick is an American film director, screenwriter, and producer. He is known for his work in horror films.",
    birth: "1952",
  },
  featured: false,
  book: { title: "Coraline", author: "Neil Gaiman" },
  imagePath: "https://alternativemovieposters.com/wp-content/uploads/2016/11/erwin_caroline.jpg",
});
db.movies.insertOne({
  title: "The Maze Runner",
  releaseYear: 2014,
  description:
    "Thomas is deposited in a community of boys after his memory is erased, soon learning they're all trapped in a maze that will require him to join forces with fellow.",
  genre: {
    name: "Drama",
    description: "Drama films are characterized by a strong focus on the emotions and intense situations.",
  },
  director: {
    name: "Wes Ball",
    bio: "Wes Ball is an American film director, screenwriter, and producer. He is known for his work in romantic comedies and action films.",
    birth: "1980",
  },
  actors: ["Dylan O'brien", "Kaya Scodelario", "Aml Ameen", "Thomas Brodie-Sangster", "Will Poulter"],
  featured: false,
  book: { title: "The Maze Runner", author: "James Dashner" },
  imagePath: "https://m.media-amazon.com/images/I/71Z-VHqVQVL._AC_UF894,1000_QL80_.jpg",
});
db.movies.insertOne({
  title: "The Wizard of Oz",
  releaseYear: 1939,
  description:
    "Dorothy Gale is swept away from a farm in Kansas to a magical land of Oz in a tornado and embarks on a quest with her new animal friends to see the Wizard of Oz.",
  genre: {
    name: "Drama",
    description: "Drama films are characterized by a strong focus on the emotions and intense situations.",
  },
  director: {
    name: "Victor Fleming",
    bio: "Victor Fleming is an American film director, screenwriter, and producer. He is known for his work in romantic comedies and action films.",
    birth: "1889",
    death: "1949",
  },
  actors: ["Judy Garland", "Frank Morgan", "Jack Haley", "Margaret Hamilton", "Ray Bolger"],
  featured: false,
  book: { title: "The Wizard of Oz", author: "L. Frank Baum" },
  imagePath: "https://alternativemovieposters.com/wp-content/uploads/2021/02/KyleLambert_WizardOfOz.jpg",
});

// Select the collection to use.
// db.movies.insertOne(
//     { title: 'The Shawshank Redemption', releaseYear: 1994,
//     director: { name: 'Frank Darabont', birth: 1959, bio: "Frank Árpád Darabont is a French-born American film director, screenwriter and producer. He has been nominated for three Academy Awards and a Golden Globe Award. In his early career, he was primarily a screenwriter for such horror films as A Nightmare on Elm Street 3: Dream Warriors, The Blob and The Fly II." },
//     genre: { name: 'Drama', description: "The drama genre is defined by conflict and often looks to reality rather than sensationalism. Emotions and intense situations are the focus, but where other genres might use unique or exciting moments to create a feeling, movies in the drama genre focus on common occurrences. Drama is a very broad category and untethered to any era — from movies based on Shakespeare to contemporary narratives." }, description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.' , actors: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"], imagePath: "https://alternativemovieposters.com/wp-content/uploads/2020/04/mann_shawshank.jpg"}
// )

// db.movies.insertOne(
//     {
//         title: "Edge of Tomorrow", releaseYear: 2014,
//         director: { name: "Doug Liman", birth: "1964", bio: "Doug Liman is an American film director, screenwriter, and producer. He is known for his work in science fiction, action, and adventure films." },
//         genre: { name: "Action", description: "Action films are characterized by their fast-paced, high-octane action and adventure." },
//         description: "A soldier fighting aliens gets to relive the same day over and over again, the day restarting every time he dies.",
//         actors: ["Tom Cruise", "Emily Blunt", "Bill Paxton"],
//         featured: true,
//         imagePath: "https://img.moviepostershop.com/edge-of-tomorrow-movie-poster-2014-1020770149.jpg",
//         book: { title: "All You Need is Kill", author: "Kiroshi Sakurazaka"}
//     }
// )

// db.movies.updateOne(
//     { title: "The Shawshank Redemption" },
//     { $set: {
//         book: { title: "Rita Hayworth and Shawshank Redemption", author: "Stephen King"}
//     }}
// )

// db.movies.updateOne(
//     { title: "The Godfather" },
//     { $set: {
//         book: { title: "The Godfather", author: "Mario Puzo"}
//     }}
// )
// db.movies.updateOne(
//     { title: "The Godfather Part 2" },
//     { $set: {
//         book: { title: "The Godfather", author: "Mario Puzo"}
//     }}
// )
// db.movies.updateOne(
//     { title: "The Lord of the Rings: The Two Towers" },
//     { $set: {
//         book: { title: "The Lord of the Rings: the Two Towers", author: "J. R. R. Tolkien"}
//     }}
// )

// db.movies.updateOne(
//     { title: "The Lord of the Rings: The Return of the King" },
//     { $set: {
//         book: { title: "The Lord of the Rings: The Return of the King", author: "J. R. R. Tolkien"}
//     }}
// )
// db.movies.updateOne(
//     { title: "The Lord of the Rings: The Fellowship of the Ring" },
//     { $set: {
//         book: { title: "The Lord of the Rings: The Fellowship of the Ring", author: "J. R. R. Tolkien"}
//     }}
// )
// db.movies.updateOne(
//     { title: "Harry Potter and the Sorcerer's Stone" },
//     { $set: {
//         book: { title: "Harry Potter and the Sorcerer's Stone", author: "J. K. Rowling"}
//     }}
// )
// db.movies.updateOne(
//     { title: "Gone Girl" },
//     { $set: {
//         book: { title: "Gone Girl", author: "Gillian Flynn"}
//     }}
// )
// db.movies.updateOne(
//     { title: "Moneyball" },
//     { $set: {
//         book: { title: "Moneyball: The Art of Winning an Unfair Game", author: "Michael Lewis"}
//     }}
// )
// db.movies.updateOne(
//     { title: "Howl's Moving Castle" },
//     { $set: {
//         book: { title: "Howl's Moving Castle", author: "Diana Wynne Jones"}
//     }}
// )
// db.movies.updateOne(
//     { title: "Die Hard" },
//     { $set: {
//         book: { title: "Nothing Lasts Forever", author: "Roderick Thorp"}
//     }}
// )
// db.movies.updateOne(
//     { title: "The Hitchhiker's Guide to the Galaxy" },
//     { $set: {
//         book: { title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams"}
//     }}
// )
// db.movies.updateOne(
//     { title: "Arrival" },
//     { $set: {
//         book: { title: "Story of Your Life", author: "Ted Chiang"}
//     }}
// )
// db.movies.updateOne(
//     { title: "Memento" },
//     { $set: {
//         book: { title: "Memento Mori", author: "Jonathan Nolan"}
//     }}
// )
// db.movies.updateOne(
//     { title: "The Martian" },
//     { $set: {
//         book: { title: "The Martian", author: "Andy Weir"}
//     }}
// )
// db.movies.updateOne(
//     { title: "Ready Player One" },
//     { $set: {
//         book: { title: "Ready Player One", author: "Ernest Cline"}
//     }}
// )
// db.movies.updateOne(
//     { title: "Dune" },
//     { $set: {
//         book: { title: "Dune", author: "Frank Herbert"}
//     }}
// )
// db.movies.updateOne(
//     { title: "Blade Runner" },
//     { $set: {
//         book: { title: "Do Androids Dream of Electric Sheep", author: "Philip K. Dick"}
//     }}
// )
// db.movies.updateOne(
//     { title: "Slumdog Millionaire" },
//     { $set: {
//         book: { title: "Q & A", author: "Vikas Swarup"}
//     }}
// )
// db.movies.updateOne(
//     { title: "The Count of Monte Cristo" },
//     { $set: {
//         book: { title: "The Count of Monte Cristo", author: "Alexandre Dumas"}
//     }}
// )
// db.movies.updateOne(
//     { title: "The Hunger Games" },
//     { $set: {
//         book: { title: "The Hunger Games", author: "Suzanne Collins"}
//     }}
// )
// db.movies.updateOne(
//     { title: "Fight Club" },
//     { $set: {
//         book: { title: "Fight Club", author: "Chuck Palahniuk"}
//     }}
// )
// db.movies.updateOne(
//     { title: "Minority Report" },
//     { $set: {
//         book: { title: "Minority Report", author: "Philip K. Dick"}
//     }}
// )
// db.movies.updateOne(
//     { title: "2001: A Space Odyssey" },
//     { $set: {
//         book: { title: "2001: A Space Odyssey", author: "Arthur C. Clarke"}
//     }}
// )
// db.movies.updateOne(
//     { title: "The Princess Bride" },
//     { $set: {
//         book: { title: "The Princess Bride", author: "William Goldman"}
//     }}
// )
// db.movies.updateOne(
//     { title: "Batman Begins" },
//     { $set: {
//         book: { title: "Batman", author: "Bill Finger"}
//     }}
// )
// db.movies.updateOne(
//     { title: "The Dark Knight" },
//     { $set: {
//         book: { title: "The Killing Joke", author: "Alan Moore"}
//     }}
// )
// db.movies.updateOne(
//     { title: "The Road" },
//     { $set: {
//         book: { title: "The Road", author: "Cormac McCarthy"}
//     }}
// )
