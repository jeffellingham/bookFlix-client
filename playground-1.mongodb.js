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
  title: "Carrie",
  releaseYear: 1976,
  genre: {
    name: "Horror",
    description: "Horror films are often based on real events or fictional characters.",
  },
  description:
    "Carrie White, a shy, friendless teenage girl who is sheltered by her domineering, religious mother, unleashes her telekinetic powers after being humiliated by her classmates at her senior prom.",
  actors: ["Sissy Spacek", "Piper Laurie", "Amy Irving", "John Travolta"],
  featured: false,
  book: { title: "Carrie", author: "Stephen King" },
  director: {
    name: "Brian De Palma",
    birth: "1940",
    bio: "Brian Russell De Palma is an American film director and screenwriter. With a career spanning over 50 years, he is best known for his work in the suspense, crime and psychological thriller genres.",
  },
  imagePath: "https://alternativemovieposters.com/wp-content/uploads/2013/09/carriebg.jpg",
});
db.movies.insertOne({
  title: "Stand by Me",
  releaseYear: 1986,
  genre: {
    name: "Drama",
    description: "Drama films are characterized by a strong focus on the emotions and intense situations.",
  },
  description:
    "After the death of one of his friends, a writer recounts a childhood journey with his friends to find the body of a missing boy.",
  actors: ["Wil Wheaton", "Corey Feldman", "River Phoenix", "Jerry O’Connell", "Kiefer Sutherland"],
  featured: false,
  book: { title: "The Body", author: "Stephen King" },
  director: {
    name: "Rob Reiner",
    birth: "1946",
    bio: 'Robert Reiner is an American actor and filmmaker. As an actor, Reiner first came to national prominence with the role of Michael "Meathead" Stivic on the CBS sitcom All in the Family, a performance that earned him two Primetime Emmy Awards.',
  },
  imagePath: "https://alternativemovieposters.com/wp-content/uploads/2018/01/dani_standbyme.jpg",
});
db.movies.insertOne({
  title: "Misery",
  releaseYear: 1990,
  genre: {
    name: "Horror",
    description: "Horror films are often based on real events or fictional characters.",
  },
  description:
    "After a famous author is rescued from a car crash by a fan of his novels, he comes to realize that the care he is receiving is only the beginning of a nightmare of captivity and abuse.",
  actors: ["James Caan", "Kathy Bates", "Richard Farnsworth"],
  director: {
    name: "Rob Reiner",
    birth: "1946",
    bio: 'Robert Reiner is an American actor and filmmaker. As an actor, Reiner first came to national prominence with the role of Michael "Meathead" Stivic on the CBS sitcom All in the Family, a performance that earned him two Primetime Emmy Awards.',
  },
  featured: false,
  book: { title: "Misery", author: "Stephen King" },
  imagePath: "https://alternativemovieposters.com/wp-content/uploads/2016/04/szabo_misery.jpg",
});
db.movies.insertOne({
  title: "IT",
  releaseYear: 2017,
  genre: {
    name: "Horror",
    description: "Horror films are often based on real events or fictional characters.",
  },
  description:
    "In the summer of 1989, a group of bullied kids band together to destroy a shape-shifting monster, which disguises itself as a clown and preys on the children of Derry, their small Maine town.",
  actors: [
    "Bill Skarsgård",
    "Jaeden Martell",
    "Finn Wolfhard",
    "Sophia Lillis",
    "Jeremy Ray Taylor",
    "Chosen Jacobs",
    "Jack Dylan Grazer",
  ],
  director: {
    name: "Andy Muschietti",
    birth: "1973",
    bio: "Andrés Walter Muschietti is an Argentine filmmaker who achieved wide recognition with the 2013 film Mama which he made with Neil Cross and his older sister, producer and screenwriter Barbara Muschietti, based on their three-minute film of the same name.",
  },
  featured: false,
  imagePath:
    "https://www.movieposters.com/cdn/shop/files/9b69c0d073be29d0ddca371a222fab61_c475c7a8-ada0-42fb-a3d7-56b6088e84d0_480x.progressive.jpg?v=1688134673",
  book: { title: "IT", author: "Stephen King" },
});
db.movies.insertOne({
  title: "IT: Chapter Two",
  releaseYear: 2019,
  genre: {
    name: "Horror",
    description: "Horror films are often based on real events or fictional characters.",
  },
  description:
    "Twenty-seven years after their first encounter with the terrifying Pennywise, the Losers Club have grown up and moved away, until a devastating phone call brings them back.",
  actors: [
    "Bill Skarsgård",
    "Jessica Chastain",
    "James McAvoy",
    "Bill Hader",
    "Isaiah Mustafa",
    "Jay Ryan",
    "James Ransone",
  ],
  director: {
    name: "Andy Muschietti",
    birth: "1973",
    bio: "Andrés Walter Muschietti is an Argentine filmmaker who achieved wide recognition with the 2013 film Mama which he made with Neil Cross and his older sister, producer and screenwriter Barbara Muschietti, based on their three-minute film of the same name.",
  },
  featured: false,
  imagePath: "https://alternativemovieposters.com/wp-content/uploads/2019/09/morroni_it.jpg",
  book: { title: "IT", author: "Stephen King" },
});
db.movies.insertOne({
  title: "The Mist",
  releaseYear: 2007,
  genre: {
    name: "Horror",
    description: "Horror films are often based on real events or fictional characters.",
  },
  description:
    "A freak storm unleashes a species of bloodthirsty creatures on a small town, where a small band of citizens hole up in a supermarket and fight for their lives.",
  actors: ["Thomas Jane", "Marcia Gay Harden", "Laurie Holden"],
  director: {
    name: "Frank Darabont",
    bio: "Frank Darabont is an American film director, screenwriter, and producer. He is known for his work in science fiction, action, and adventure films.",
    birth: "1959",
  },
  featured: false,
  book: { title: "The Mist", author: "Stephen King" },
  imagePath: "https://alternativemovieposters.com/wp-content/uploads/2017/04/glitchway_mist.jpg",
});
db.movies.insertOne({
  title: "Forrest Gump",
  releaseYear: 1994,
  genre: {
    name: "Drama",
    description: "Drama films are characterized by a strong focus on the emotions and intense situations.",
  },
  description:
    "The history of the United States from the 1950s to the '70s unfolds from the perspective of an Alabama man with an IQ of 75, who yearns to be reunited with his childhood sweetheart.",
  actors: ["Tom Hanks", "Robin Wright", "Gary Sinise", "Sally Field"],
  director: {
    name: "Robert Zemeckis",
    birth: "1937",
    bio: "Robert Lee Zemeckis is an American filmmaker. He first came to public attention as the director of the action-adventure romantic comedy Romancing the Stone, the science-fiction comedy Back to the Future film trilogy, and the live-action/animated comedy Who Framed Roger Rabbit.",
  },
  featured: false,
  imagePath:
    "https://alternativemovieposters.com/wp-content/uploads/2021/09/FORREST-GUMP-RICCARDO-ROSANNA.jpg",
  book: { title: "Forrest Gump", author: "Winston Groom" },
});
db.movies.insertOne({
  title: "Pride & Prejudice",
  releaseYear: 2005,
  genre: {
    name: "Romance",
    description: "romance films are characterized by a strong focus on the emotions and intense situations.",
  },
  description:
    "Sparks fly when spirited Elizabeth Bennet meets single, rich, and proud Mr. Darcy. But Mr. Darcy reluctantly finds himself falling in love with a woman beneath his class. Can each overcome their own pride and prejudice?",
  actors: [
    "Keira Knightley",
    "Matthew Macfadyen",
    "Brenda Blethyn",
    "Donald Sutherland",
    "Rosamund Pike",
    "Jena Malone",
    "Carey Mulligan",
  ],
  director: {
    name: "Joe Wright",
    birth: "1972",
    bio: "Sparks fly when spirited Elizabeth Bennet meets single, rich, and proud Mr. Darcy. But Mr. Darcy reluctantly finds himself falling in love with a woman beneath his class. Can each overcome their own pride and prejudice?",
  },
  featured: false,
  imagePath:
    "https://www.movieposters.com/cdn/shop/products/5577e4e7f95f3214748b46ab98e376c9_e381fd8f-3078-4f30-9711-321eb96e30c4_480x.progressive.jpg?v=1573617183",
  book: { title: "Pride & Prejudice", author: "Jane Austen" },
});
db.movies.insertOne({
  title: "The Notebook",
  releaseYear: 2004,
  genre: {
    name: "Romance",
    description: "romance films are characterized by a strong focus on the emotions and intense situations.",
  },
  description:
    "A poor yet passionate young man falls in love with a rich young woman, giving her a sense of freedom, but they are soon separated because of their social differences.",
  actors: ["Ryan Gosling", "Rachel McAdams", "Gena Rowlands", "James Garner"],
  director: {
    name: "Nick Cassavetes",
    birth: "1959",
    bio: "Nicholas David Rowland Cassavetes is an American actor, director, and writer. He has directed such films as She's So Lovely, John Q., The Notebook, Alpha Dog, and My Sister's Keeper.",
  },
  featured: false,
  imagePath:
    "https://www.movieposters.com/cdn/shop/files/scan_d42fcc7e-405b-4a98-9963-dea49ae1d35b_480x.progressive.jpg?v=1690917858",
  book: { title: "The Notebook", author: "Nicholas Sparks" },
});
db.movies.insertOne({
  title: "The Fault in Our Stars",
  releaseYear: 2014,
  genre: {
    name: "Romance",
    description: "romance films are characterized by a strong focus on the emotions and intense situations.",
  },
  description:
    "Two teenage cancer patients begin a life-affirming journey to visit a reclusive author in Amsterdam.",
  actors: ["Shailene Woodley", "Ansel Elgort", "Laura Dern", "Nat Wolff", "Willem Dafoe"],
  director: {
    name: "Josh Boone",
    birth: "1979",
    bio: "Josh Boone is an American filmmaker. He is best known for directing the romantic drama The Fault in Our Stars, based on the novel of the same name. Boone also wrote and directed the romantic comedy Stuck in Love and the superhero horror film The New Mutants.",
  },
  featured: false,
  imagePath:
    "https://www.movieposters.com/cdn/shop/products/43540c0fe84fbdcf7039b4d24bfce7af_1981b45e-2321-4b9c-8ff6-ed1e5d2a8ea3_480x.progressive.jpg?v=1573594989",
  book: { title: "The Fault in Our Stars", author: "John Green" },
});
db.movies.insertOne({
  title: "Little Women",
  releaseYear: 2019,
  genre: {
    name: "Drama",
    description: "Drama films are characterized by a strong focus on the emotions and intense situations.",
  },
  description:
    "Jo March reflects back and forth on her life, telling the beloved story of the March sisters - four young women, each determined to live life on her own terms.",
  actors: [
    "Saoirse Ronan",
    "Emma Watson",
    "Florence Pugh",
    "Eliza Scanlen",
    "Laura Dern",
    "Timothée Chalamet",
    "Bob Odenkirk",
  ],
  director: {
    name: "Greta Gerwig",
    birth: "1983",
    bio: "Greta Celeste Gerwig is an American actress, screenwriter, director, and producer. She first garnered attention after working on and appearing in several mumblecore films. She has since transitioned her career from acting and co-writing independent films to directing films from major studios.",
  },
  featured: false,
  imagePath: "https://www.movieposters.com/cdn/shop/products/little_women_480x.progressive.jpg?v=1579037732",
  book: { title: "Little Women", author: "Louisa May Alcott" },
});
db.movies.insertOne({
  title: "One Flew Over the Cuckoo's Nest",
  releaseYear: 1975,
  genre: {
    name: "Drama",
    description: "Drama films are characterized by a strong focus on the emotions and intense situations.",
  },
  description:
    "In the Fall of 1963, a Korean War veteran and criminal pleads insanity and is admitted to a mental institution, where he rallies up the scared patients against the tyrannical nurse.",
  actors: ["Jack Nicholson", "Peter Brocco", "Louise Fletcher", "Michael Berryman", "Danny DeVito"],
  director: {
    name: "Milos Forman",
    birth: "1932",
    death: "2018",
    bio: "Milos Forman is an American filmmaker. He is best known for directing the films The Pianist, The Deer Hunter, and The Last Station.",
  },
  featured: false,
  imagePath: "https://alternativemovieposters.com/wp-content/uploads/2016/04/szabo_cuckoo.jpg",
  book: { title: "One Flew Over the Cuckoo's Nest", author: "Ken Kesey" },
});
db.movies.insertOne({
  title: "The Devil Wears Prada",
  releaseYear: 2006,
  genre: {
    name: "Drama",
    description: "Drama films are characterized by a strong focus on the emotions and intense situations.",
  },
  description:
    "A smart but socially awkward graduate lands a job as an assistant to Miranda Priestly, the demanding editor-in-chief of a high fashion magazine.",
  actors: ["Anne Hathaway", "Meryl Streep", "Adrian Grenier", "Emily Blunt", "Stanley Tucci", "Simon Baker"],
  director: {
    name: "David Frankel",
    birth: "1959",
    bio: "David Frankel is an American filmmaker. He is best known for directing the films The Devil Wears Prada, The Curious Case of Benjamin Button, and The Kids Are All Right.",
  },
  featured: false,
  imagePath:
    "https://www.movieposters.com/cdn/shop/products/devilwearsprada11_480x.progressive.jpg?v=1620228599",
  book: { title: "The Devil Wears Prada", author: "Lauren Weisberger" },
});
db.movies.insertOne({
  title: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
  releaseYear: 2005,
  genre: {
    name: "Fantasy",
    description: "Fantasy films are characterized by a strong focus on the emotions and intense situations.",
  },
  description:
    "Four kids travel through a wardrobe to the land of Narnia and learn of their destiny to free it with the guidance of a mystical lion.",
  actors: [
    "Tilda Swinton",
    "Georgie Henley",
    "William Moseley",
    "Skandar Keynes",
    "Anna Popplewell",
    "James McAvoy",
  ],
  director: {
    name: "Andrew Adamson",
    birth: "1966",
    bio: "Andrew Ralph Adamson MNZM is a New Zealand film director, producer and screenwriter. He is best known for directing the DreamWorks animated films Shrek and its sequel Shrek 2.",
  },
  featured: false,
  imagePath:
    "https://www.movieposters.com/cdn/shop/products/0bbe1f686feb56b250b3b88fc59e2abc_e54290ed-78cd-4fda-b211-0b3a2c45d507_480x.progressive.jpg?v=1573587331",
  book: { title: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe", author: "C.S. Lewis" },
});
db.movies.insertOne({
  title: "The Chronicles of Narnia: The Voyage of the Dawn Treader",
  releaseYear: 2010,
  genre: {
    name: "Fantasy",
    description: "Fantasy films are characterized by a strong focus on the emotions and intense situations.",
  },
  description:
    "Lucy and Edmund Pevensie return to Narnia with their cousin Eustace where they meet up with Prince Caspian for a trip across the sea aboard the royal ship The Dawn Treader. Along the way they encounter dragons, dwarves, merfolk, and a band of lost warriors before reaching the edge of the world.",
  actors: [
    "Ben Barnes",
    "Skandar Keynes",
    "Georgie Henley",
    "Will Poulter",
    "Anna Popplewell",
    "Tilda Winton",
    "William Moseley",
    "Gary Sweet",
  ],
  director: {
    name: "Michael Apted",
    birth: "1941",
    death: "2021",
    bio: "Michael David Apted, CMG was a British television and film director and producer. Apted began working in television and directed the Up documentary series. He later directed Coal Miner's Daughter, which was nominated for seven Academy Awards including Best Picture.",
  },
  featured: false,
  imagePath:
    "https://fr.originalfilmart.com/cdn/shop/products/Chronicles_of_Narnia_The_Voyage_of_the_Dawn_Treader_2010_original_film_art_5000x.jpg?v=1562543431",
  book: { title: "The Chronicles of Narnia: The Voyage of the Dawn Treader", author: "C.S. Lewis" },
});
db.movies.insertOne({
  title: "The Chronicles of Narnia: Prince Caspian",
  releaseYear: 2008,
  genre: {
    name: "Fantasy",
    description: "Fantasy films are characterized by a strong focus on the emotions and intense situations.",
  },
  description:
    "The Pevensie siblings return to Narnia, where they are enlisted to once again help ward off an evil king and restore the rightful heir to the land's throne, Prince Caspian.",
  director: {
    name: "Andrew Adamson",
    birth: "1966",
    bio: "Andrew Ralph Adamson MNZM is a New Zealand film director, producer and screenwriter. He is best known for directing the DreamWorks animated films Shrek and its sequel Shrek 2.",
  },
  featured: false,
  imagePath:
    "https://www.movieposters.com/cdn/shop/products/9ec541520233e3f56076251e2d2cd1f4_480x.progressive.jpg?v=1573588860",
  book: { title: "The Chronicles of Narnia: Prince Caspian", author: "C.S. Lewis" },
});
db.movies.insertOne({
  title: "Schindler's List",
  releaseYear: 1993,
  genre: {
    name: "Drama",
    description: "Drama films are characterized by a strong focus on the emotions and intense situations.",
  },
  description:
    "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
  actors: ["Liam Neeson", "Ralph Fiennes", "Ben Kingsley", "Caroline Goodall", "Jonathan Sagall"],
  director: {
    name: "Steven Spielberg",
    birth: "1946",
    bio: "One of the most influential personalities in the history of cinema, Steven Spielberg is Hollywood's best known director and one of the wealthiest filmmakers in the world. He has an extraordinary number of commercially successful and critically acclaimed credits to his name, either as a director, producer or writer since launching the summer blockbuster with Jaws (1975), and he has done more to define popular film-making since the mid-1970s than anyone else.",
  },
  featured: false,
  imagePath:
    "https://www.movieposters.com/cdn/shop/products/891b33652234029b0638095439f27d81_92f913d0-f315-4c5d-a8d5-93aae832f7bf_480x.progressive.jpg?v=1573651232",
  book: { title: "Schindler's List", author: "Thomas Keneally" },
});
db.movies.insertOne({
  title: "Raging Bull",
  releaseYear: 1980,
  genre: {
    name: "Drama",
    description: "Drama films are characterized by a strong focus on the emotions and intense situations.",
  },
  description:
    "The life of boxer Jake LaMotta, whose violence and temper that led him to the top in the ring destroyed his life outside of it.",
  actors: ["Robert De Niro", "Joe Pesci", "Cathy Moriarty", "Frank Vincent"],
  director: {
    name: "Martin Scorsese",
    bio: "Martin Charles Scorsese is an American and Italian film director, producer, screenwriter and actor. Scorsese emerged as one of the major figures of the New Hollywood era.",
    birth: "1942",
  },
  featured: false,
  imagePath: "https://alternativemovieposters.com/wp-content/uploads/2013/03/ragingbullbg1.jpg",
  book: { title: "Raging Bull: My Story", author: "Jake LaMotta" },
});
db.movies.insertOne({
  title: "Breakfast at Tiffany's",
  releaseYear: 1961,
  genre: {
    name: "Drama",
    description: "Drama films are characterized by a strong focus on the emotions and intense situations.",
  },
  description:
    "A young New York socialite becomes interested in a young man who has moved into her apartment building, but her past threatens to get in the way.",
  actors: ["Audrey Hepburn", "George Peppard", "Patricia Neal", "Buddy Ebsen"],
  director: {
    name: "Blake Edwards",
    birth: "1922",
    death: "2010",
    bio: "Blake Edwards was an American film director, producer, screenwriter, and actor. Edwards began his career in the 1940s as an actor, but he soon began writing screenplays and radio scripts before turning to producing and directing in television and films.",
  },
  featured: false,
  imagePath: "https://alternativemovieposters.com/wp-content/uploads/2013/05/tiffanysbg.jpg",
  book: { title: "Breakfast at Tiffany's", author: "Truman Capote" },
});
db.movies.insertOne({
  title: "Matilda",
  releaseYear: 1996,
  genre: {
    name: "Drama",
    description: "Drama films are characterized by a strong focus on the emotions and intense situations.",
  },
  description:
    "A girl gifted with a keen intellect and psychic powers uses both to deal with her crude, distant family and free her kind teacher from their sadistic headmistress.",
  actors: ["Danny DeVito", "Rhea Perlman", "Mara Wilson", "Embeth Davidtz", "Paul Reubens"],
  director: {
    name: "Danny DeVito",
    birth: "1944",
    bio: "Daniel Michael DeVito Jr. is an American actor, comedian, and filmmaker. He gained prominence for his portrayal of the taxi dispatcher Louie De Palma in the television series Taxi, which won him a Golden Globe Award and an Emmy Award. He plays Frank Reynolds on the FX and FXX sitcom It's Always Sunny in Philadelphia.",
  },
  featured: false,
  imagePath: "https://www.movieposters.com/cdn/shop/products/Matilda.11x17_480x.progressive.jpg?v=1676043000",
  book: { title: "Matilda", author: "Roald Dahl" },
});
db.movies.insertOne({
  title: "Charlie and the Chocolate Factory",
  releaseYear: 2005,
  genre: {
    name: "Drama",
    description: "Drama films are characterized by a strong focus on the emotions and intense situations.",
  },
  description:
    "A young boy wins a tour through the most magnificent chocolate factory in the world, led by the world's most unusual candy maker.",
  actors: ["Johnny Depp", "Freddie Highmore", "David Kelly", "Helena Bonham Carter"],
  director: {
    name: "Tim Burton",
    birth: "1958",
    bio: "Timothy Walter Burton is an American filmmaker, animator, producer, screenwriter, and artist. Known for pioneering goth culture in the American film industry, Burton is revered for his fantasy, horror, and romantic films. ",
  },
  featured: false,
  imagePath:
    "https://www.movieposters.com/cdn/shop/products/46a3e3d50f8e50997af061201fea7385_a1b9810c-e37f-40e7-a85c-3a0b86cfab7b_480x.progressive.jpg?v=1573653669",
  book: { title: "Charlie and the Chocolate Factory", author: "Roald Dahl" },
});
db.movies.insertOne({
  title: "The Remains of the Day",
  releaseYear: 1993,
  genre: {
    name: "Drama",
    description: "Drama films are characterized by a strong focus on the emotions and intense situations.",
  },
  description:
    "A butler who sacrificed body and soul to service in the years leading up to World War II realizes too late how misguided his loyalty was to his lordly employer.",
  actors: ["Anthony Hopkins", "Emma Thompson", "John Haycraft", "Christopher Reeve"],
  director: {
    name: "James Ivory",
    birth: "1928",
    bio: "James Francis Ivory is an American film director, producer, and screenwriter. For many years, he worked extensively with Indian-born film producer Ismail Merchant, his domestic as well as professional partner, and with screenwriter Ruth Prawer Jhabvala.",
  },
  featured: false,
  imagePath:
    "https://www.movieposters.com/cdn/shop/products/69150bb532a8e9b04922f54579f6faa0_480x.progressive.jpg?v=1573590292",
  book: { title: "The Remains of the Day", author: "Kazuo Ishiguro" },
});
db.movies.insertOne({
  title: "Doctor Zhivago",
  releaseYear: 1965,
  genre: {
    name: "Drama",
    description: "Drama films are characterized by a strong focus on the emotions and intense situations.",
  },
  description:
    "The life of a Russian physician and poet who, although married to another, falls in love with a political activist's wife and experiences hardship during World War I and then the October Revolution.",
  actors: ["Omar Sharif", "Julie Christie", "Geraldine Chaplin"],
  director: {
    name: "David Lean",
    birth: "1908",
    death: "1991",
    bio: "David Lean was an English film director and producer, who was ironically raised in a strict Quaker family and wasn't allowed to go to the movies. He is best known for directing the films Lawrence of Arabia (1962), Doctor Zhivago (1965), and A Passage to India (1984).",
  },
  featured: false,
  imagePath:
    "https://www.movieposters.com/cdn/shop/products/356bbf5f2ec642a57a6bf117921869b3_baccfcd9-5587-43b0-aec4-cd52444a25aa_480x.progressive.jpg?v=1573588623",
  book: { title: "Doctor Zhivago", author: "Boris Pasternak" },
});
db.movies.insertOne({
  title: "The Hunger Games: Catching Fire",
  releaseYear: 2013,
  genre: {
    name: "Adventure",
    description:
      "Implies a narrative that is defined by a journey (often including some form of pursuit) and is usually located within a fantasy or exoticized setting. Typically, though not always, such stories include the quest narrative.",
  },
  description:
    "Katniss Everdeen and Peeta Mellark become targets of the Capitol after their victory in the 74th Hunger Games sparks a rebellion in the Districts of Panem.",
  actors: [
    "Jennifer Lawrence",
    "Josh Hutcherson",
    "Liam Hemsworth",
    "Elizabeth Banks",
    "Donald Sutherland",
    "Woody Harrelson",
    "Stanley Tucci",
    "Phillip Seymour Hoffman",
  ],
  director: {
    name: "Francis Lawrence",
    birth: "1971",
    bio: "Francis Lawrence is a well-known film director, producer, and editor. He has directed several successful movies, including Hunger Games and Mockingjay parts 1 and 2. He is known for his work in the science fiction and action genres, and has received several awards for his contributions to the film industry.",
  },
  featured: false,
  imagePath:
    "https://www.movieposters.com/cdn/shop/products/ed86e3334475bccbee0b80c9375778af_77f18b02-500d-4e7e-a1ea-e155d3d6203c_480x.progressive.jpg?v=1573587557",
  book: { title: "The Hunger Games: Catching Fire", author: "Suzanne Collins" },
});
db.movies.insertOne({
  title: "The Hunger Games: Mockingjay - Part 1",
  releaseYear: 2014,
  genre: {
    name: "Adventure",
    description:
      "Implies a narrative that is defined by a journey (often including some form of pursuit) and is usually located within a fantasy or exoticized setting. Typically, though not always, such stories include the quest narrative.",
  },
  description:
    "Katniss Everdeen is in District 13 after she shatters the games forever. Under the leadership of President Coin and the advice of her trusted friends, Katniss spreads her wings as she fights to save Peeta and a nation moved by her courage.",
  actors: [
    "Jennifer Lawrence",
    "Josh Hutcherson",
    "Liam Hemsworth",
    "Elizabeth Banks",
    "Donald Sutherland",
    "Woody Harrelson",
    "Phillip Seymour Hoffman",
    "Jena Malone",
    "Jeffrey Wright",
    "Willow Shields",
    "Julianna Moore",
    "Stanley Tucci",
    "Mahershala Ali",
  ],
  director: {
    name: "Francis Lawrence",
    birth: "1971",
    bio: "Francis Lawrence is a well-known film director, producer, and editor. He has directed several successful movies, including Hunger Games and Mockingjay parts 1 and 2. He is known for his work in the science fiction and action genres, and has received several awards for his contributions to the film industry.",
  },
  featured: false,
  imagePath:
    "https://www.movieposters.com/cdn/shop/products/acd369d0dfac5a1df9810fd86ddc6096_1dd0870e-13a4-4c86-936a-0d093dde5a75_480x.progressive.jpg?v=1573651201",
  book: { title: "The Hunger Games: Mockingjay", author: "Suzanne Collins" },
});
db.movies.insertOne({
  title: "The Hunger Games: Mockingjay - Part 2",
  releaseYear: 2015,
  genre: {
    name: "Adventure",
    description:
      "Implies a narrative that is defined by a journey (often including some form of pursuit) and is usually located within a fantasy or exoticized setting. Typically, though not always, such stories include the quest narrative.",
  },
  description:
    "Katniss and a team of rebels from District 13 prepare for the final battle that will decide the fate of Panem.",
  actors: [
    "Jennifer Lawrence",
    "Josh Hutcherson",
    "Liam Hemsworth",
    "Elizabeth Banks",
    "Donald Sutherland",
    "Woody Harrelson",
    "Phillip Seymour Hoffman",
    "Jena Malone",
    "Willow Shields",
    "Julianna Moore",
    "Stanley Tucci",
    "Mahershala Ali",
    "Jeffrey Wright",
  ],
  director: {
    name: "Francis Lawrence",
    birth: "1971",
    bio: "Francis Lawrence is a well-known film director, producer, and editor. He has directed several successful movies, including Hunger Games and Mockingjay parts 1 and 2. He is known for his work in the science fiction and action genres, and has received several awards for his contributions to the film industry.",
  },
  featured: false,
  imagePath:
    "https://www.movieposters.com/cdn/shop/products/459f5ad92da161741212395c3cd2e8da_c5aa06e6-549f-4de8-9ba0-d97ae9856f27_480x.progressive.jpg?v=1660245264",
  book: { title: "The Hunger Games: Mockingjay", author: "Suzanne Collins" },
});

// db.movies.insertOne({
//   title: "The Shining",
//   releaseYear: 1980,
//   director: {
//     name: "Stanley Kubrick",
//     birth: "1928",
//     death: "1999",
//     bio: "Stanley Kubrick was an American film director, producer, screenwriter and photographer. Widely considered one of the greatest filmmakers of all time, his films—almost all of which are adaptations of novels or short stories—cover a wide range of genres and feature innovative cinematography, dark humor, realistic attention to detail and extensive set designs.",
//   },
//   genre: {
//     name: "Horror",
//     description: "Horror films are often based on real events or fictional characters.",
//   },
//   description:
//     "A family heads to an isolated hotel for the winter, but soon an evil presence begins to terrorize the hotel.",
//   actors: ["Jack Nicholson", "Shelley Duvall", "Danny Lloyd"],
//   featured: true,
//   book: { title: "The Shining", author: "Stephen King" },
//   imagePath: "https://alternativemovieposters.com/wp-content/uploads/2021/08/QaiserAzim_Shining.jpg",
// });
// db.movies.insertOne({
//   title: "Jurassic Park",
//   releaseYear: 1993,
//   director: {
//     name: "Steven Spielberg",
//     birth: "1946",
//     bio: "One of the most influential personalities in the history of cinema, Steven Spielberg is Hollywood's best known director and one of the wealthiest filmmakers in the world. He has an extraordinary number of commercially successful and critically acclaimed credits to his name, either as a director, producer or writer since launching the summer blockbuster with Jaws (1975), and he has done more to define popular film-making since the mid-1970s than anyone else.",
//   },
//   genre: {
//     name: "Adventure",
//     description: "Adventure films are characterized by a sense of wonder, excitement, and danger.",
//   },
//   description:
//     "After new evidence of dinosaur extinction is discovered, Dr. Alan Grant and Dr. Ellie Sattler travel to an unexplored island in search of other dinosaurs to study.",
//   actors: ["Sam Neill", "Laura Dern", "Jeff Goldblum"],
//   featured: false,
//   book: { title: "Jurassic Park", author: "Michael Crichton" },
//   imagePath:
//     "https://alternativemovieposters.com/wp-content/uploads/2023/05/Ludo-D.RODRIGUEZ-PASCAL_JurassicPark.jpg",
// });
// db.movies.insertOne({
//   title: "Jaws",
//   releaseYear: 1975,
//   director: {
//     name: "Steven Spielberg",
//     birth: "1946",
//     bio: "One of the most influential personalities in the history of cinema, Steven Spielberg is Hollywood's best known director and one of the wealthiest filmmakers in the world. He has an extraordinary number of commercially successful and critically acclaimed credits to his name, either as a director, producer or writer since launching the summer blockbuster with Jaws (1975), and he has done more to define popular film-making since the mid-1970s than anyone else.",
//   },
//   genre: {
//     name: "Horror",
//     description: "Horror films are often based on real events or fictional characters.",
//   },
//   description:
//     "When a killer shark unleashes chaos on a beach community, a police chief, a marine scientist, and a grizzled shark hunter seek revenge.",
//   actors: ["Roy Scheider", "Robert Shaw", "Richard Dreyfuss"],
//   featured: false,
//   book: { title: "Jaws", author: "Peter Benchley" },
//   imagePath: "https://alternativemovieposters.com/wp-content/uploads/2023/06/Kailynn-Heide_Jaws.jpg",
// });
// db.movies.insertOne({
//   title: "Watchmen",
//   releaseYear: 2009,
//   director: {
//     name: "Zack Snyder",
//     birth: "1979",
//     bio: "Zack Snyder is an American film director, screenwriter, and producer. He is known for his work in science fiction, action, and adventure films.",
//   },
//   genre: {
//     name: "Fantasy",
//     description: "Fantasy films are characterized by a sense of wonder, excitement, and danger.",
//   },
//   description:
//     "In 1985 where former superheroes exist, the murder of a colleague sends active vigilante Rorschach into his own sprawling investigation, uncovering something that could completely change the course of history as we know it.",
//   actors: [
//     "Jackie Earle Haley",
//     "Patrick Wilson",
//     "Carla Gugino",
//     "Malin Akerman",
//     "Billy Crudup",
//     "Jeffrey Dean Morgan",
//   ],
//   featured: false,
//   book: { title: "Watchmen", author: "Alan Moore" },
//   imagePath:
//     "https://www.movieposters.com/cdn/shop/products/ea155b9c724482297dfa471bb5531279_b6d4c724-c298-472f-a127-081d4f10664d_480x.progressive.jpg?v=1573587216",
// });
// db.movies.insertOne({
//   title: "30 Days of Night",
//   releaseYear: 2007,
//   director: {
//     name: "David Slade",
//     birth: "1964",
//     bio: "David Slade is an American film director, screenwriter, and producer. He is known for his work in science fiction, action, and adventure films.",
//   },
//   genre: {
//     name: "Horror",
//     description: "Horror films are often based on real events or fictional characters.",
//   },
//   description:
//     "After an Alaskan town is plunged into darkness for a month, it is attacked by a bloodthirsty gang of vampires.",
//   actors: ["Josh Hartnett", "Melissa George", "Danny Huston"],
//   featured: false,
//   book: { title: "30 Days of Night", author: "Steve Niles" },
//   imagePath: "https://alternativemovieposters.com/wp-content/uploads/2020/07/David-Storey_30daysofnight.jpg",
// });
// db.movies.insertOne({
//   title: "The Silence of the Lambs",
//   releaseYear: 1991,
//   description:
//     "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
//   actors: ["Jodie Foster", "Anthony Hopkins", "Lawrence A. Bonney"],
//   director: {
//     name: "Jonathan Demme",
//     bio: "Jonathan Demme is an American film director, screenwriter, and producer. He is known for his work in science fiction, action, and adventure films.",
//     birth: "1944",
//   },
//   genre: {
//     name: "Horror",
//     description: "Horror films are often based on real events or fictional characters.",
//   },
//   featured: false,
//   book: { title: "The Silence of the Lambs", author: "Thomas Harris" },
//   imagePath: "https://alternativemovieposters.com/wp-content/uploads/2021/10/Ruiz-Burgos_Lambs.jpg",
// });
// db.movies.insertOne({
//   title: "Scott Pilgrim vs. the World",
//   releaseYear: 2010,
//   director: {
//     name: "Edgar Wright",
//     bio: "Edgar Wright is an English film director, screenwriter, and producer. He is known for his work in science fiction, action, and adventure films.",
//     birth: "1974",
//   },
//   genre: {
//     name: "Adventure",
//     description: "Adventure films are characterized by a sense of wonder, excitement, and danger.",
//   },
//   description:
//     "In a magically realistic version of Toronto, a young man must defeat his new girlfriend's seven evil exes one by one in order to win her heart.",
//   actors: ["Michael Cera", "Anna Kendrick", "Mary Elizabeth Winstead", "Kieran Culkin"],
//   featured: true,
//   book: { title: "Scott Pilgrim", author: "Bryan Lee O'Malley" },
//   imagePath:
//     "https://www.movieposters.com/cdn/shop/products/86312c3259646fac26869c83f5670468_8c97fd3f-4491-493d-8f82-45ce96b90c73_480x.progressive.jpg?v=1573653960",
// });
// db.movies.insertOne({
//   title: "The Green Mile",
//   releaseYear: 1999,
//   description:
//     "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.",
//   actors: ["Tom Hanks", "Michael Clarke Duncan", "David Morse"],
//   director: {
//     name: "Frank Darabont",
//     bio: "Frank Darabont is an American film director, screenwriter, and producer. He is known for his work in science fiction, action, and adventure films.",
//     birth: "1959",
//   },
//   genre: {
//     name: "Drama",
//     description: "Drama films are characterized by a strong focus on the emotions and intense situations.",
//   },
//   featured: false,
//   book: { title: "The Green Mile", author: "Stephen King" },
//   imagePath:
//     "https://www.movieposters.com/cdn/shop/products/033152cb8ba4518411a359686f4a194e_e51d49fa-d8b2-4aaf-82dd-9779f297352c_480x.progressive.jpg?v=1573585373",
// });
// db.movies.insertOne({
//   title: "The Bourne Identity",
//   releaseYear: 2002,
//   description:
//     "A man is picked up by a fishing boat, bullet-riddled and suffering from amnesia, before racing to elude assassins and track down his killers.",
//   actors: ["Matt Damon", "Julia Stiles", "Franka Potente", "Clive Owen", "Brian Cox"],
//   genre: {
//     name: "Action",
//     description: "Action films are characterized by a sense of wonder, excitement, and danger.",
//   },
//   director: {
//     name: "Doug Liman",
//     bio: "Doug Liman is an American film director, screenwriter, and producer. He is known for his work in science fiction, action, and adventure films.",
//     birth: "1965",
//   },
//   featured: false,
//   book: { title: "The Bourne Identity", author: "Robert Ludlum" },
//   imagePath:
//     "https://www.movieposters.com/cdn/shop/products/06e4c4041a0c11a88e468fd21e75bd45_be74c805-aaaa-4f23-a7f8-03955c547b99_480x.progressive.jpg?v=1573651533",
// });
// db.movies.insertOne({
//   title: "The Bourne Supremacy",
//   releaseYear: 2004,
//   description:
//     "When Jason Bourne is framed for a CIA operation gone awry, he is forced to resume his former life as a trained assassin to survive.",
//   actors: ["Matt Damon", "Julia Stiles", "Franka Potente", "Joan Allen", "Brian Cox"],
//   genre: {
//     name: "Action",
//     description: "Action films are characterized by a sense of wonder, excitement, and danger.",
//   },
//   director: {
//     name: "Paul Greengrass",
//     bio: "Paul Greengrass is an American film director, screenwriter, and producer. He is known for his work in science fiction, action, and adventure films.",
//     birth: "1955",
//   },
//   featured: false,
//   book: { title: "The Bourne Supremacy", author: "Robert Ludlum" },
//   imagePath:
//     "https://www.movieposters.com/cdn/shop/products/f6af67727bbda75193116af16503cdf4_d5df669c-1aa7-47d8-ae2d-5d07f22f8457_480x.progressive.jpg?v=1573618997",
// });
// db.movies.insertOne({
//   title: "Casino Royale",
//   releaseYear: 2006,
//   description:
//     "A secret agent is dispatched to London to find a missing scientist and recover a mysterious briefcase.",
//   actors: ["Daniel Craig", "Judi Dench", "Jeffrey Wright", "Eva Green", "Mads Mikkelsen"],
//   genre: {
//     name: "Action",
//     description: "Action films are characterized by a sense of wonder, excitement, and danger.",
//   },
//   director: {
//     name: "Martin Campbell",
//     bio: "Martin Campbell is an American film director, screenwriter, and producer. He is known for his work in science fiction, action, and adventure films.",
//     birth: "1943",
//   },
//   featured: false,
//   book: { title: "Casino Royale", author: "Ian Fleming" },
//   imagePath:
//     "https://www.movieposters.com/cdn/shop/products/casino-royale_ad7d5f83_32c1cd0c-e1e0-4a44-ba1f-59a3c3ac5944_480x.progressive.jpg?v=1648655989",
// });
// db.movies.insertOne({
//   title: "Jojo Rabbit",
//   releaseYear: 2019,
//   description:
//     "A young boy in Hitler's Germany experiences the joy, pain, and absurdities of being a young boy in Hitler's Germany.",
//   actors: ["Roman Griffin Davis", "Thomasin McKenzie", "Scarlett Johansson"],
//   genre: {
//     name: "Drama",
//     description: "Drama films are characterized by a strong focus on the emotions and intense situations.",
//   },
//   director: {
//     name: "Taika Waititi",
//     bio: 'Taika Waititi is a New Zealand film director, writer, and actor known for his unique sense of humor and visual style. He has directed several critically acclaimed films, including "Thor: Ragnarok" and "Jojo Rabbit," and has won numerous awards for his work.',
//     birth: "1975",
//   },
//   featured: false,
//   book: { title: "Caging Skies", author: "Christine Leunens" },
//   imagePath: "https://alternativemovieposters.com/wp-content/uploads/2020/12/Jojo_Rabbit_Jamie_Stark.jpg",
// });
// db.movies.insertOne({
//   title: "Never Let Me Go",
//   releaseYear: 2010,
//   description:
//     "The lives of three friends, from their early school days into young adulthood, when the reality of the world they live in comes knocking.",
//   actors: ["Keira Knightley", "Carey Mulligan", "Andrew Garfield"],
//   genre: {
//     name: "Drama",
//     description: "Drama films are characterized by a strong focus on the emotions and intense situations.",
//   },
//   director: {
//     name: "Mark Romanek",
//     bio: 'Mark Romanek is a talented filmmaker and music video director known for his visually striking and often surreal work. Some of his notable projects include the music videos for "Creep" by Radiohead and "Bullet with Butterfly Wings" by Smashing Pumpkins, as well as the feature film "Never Let Me Go" (2010).',
//     birth: "1959",
//   },
//   featured: false,
//   book: { title: "Never Let Me Go", author: "Kazuo Ishiguro" },
//   imagePath:
//     "https://www.movieposters.com/cdn/shop/products/cd9066ab059c9d262f69a11f0d29b01f_7cb9a2dd-309f-4a24-86ae-fbe4fc7e0012_480x.progressive.jpg?v=1573652685",
// });
// db.movies.insertOne({
//   title: "Crazy Rich Asians",
//   releaseYear: 2018,
//   description:
//     "This contemporary romantic comedy, based on a global bestseller, follows native New Yorker Rachel Chu to Singapore to meet her boyfriend's family.",
//   actors: ["Constance Wu", "Henry Golding", "Michelle Yeoh", "Awkwafina"],
//   genre: {
//     name: "Comedy",
//     description: "Comedy films are characterized by a strong focus on the emotions and intense situations.",
//   },
//   director: {
//     name: "Jon M. Chu",
//     bio: "Jon M. Chu is an American film director, screenwriter, and producer. He is known for his work in romantic comedies and action films.",
//     birth: "1979",
//   },
//   featured: false,
//   book: { title: "Crazy Rich Asians", author: "Kevin Kwan" },
//   imagePath: "https://m.media-amazon.com/images/M/MV5BMTYxNDMyOTAxN15BMl5BanBnXkFtZTgwMDg1ODYzNTM@._V1_.jpg",
// });
// db.movies.insertOne({
//   title: "Shutter Island",
//   releaseYear: 2015,
//   description:
//     "In 1954, a U.S. Marshal investigates the disappearance of a murderer who escaped from a hospital for the criminally insane.",
//   actors: ["Leonardo DiCaprio", "Emily Mortimer", "Mark Ruffalo", "Ben Kingsley"],
//   genre: {
//     name: "Drama",
//     description: "Drama films are characterized by a strong focus on the emotions and intense situations.",
//   },
//   director: {
//     name: "Martin Scorsese",
//     bio: "Martin Charles Scorsese is an American and Italian film director, producer, screenwriter and actor. Scorsese emerged as one of the major figures of the New Hollywood era.",
//     birth: "1942",
//   },
//   featured: false,
//   book: { title: "Shutter Island", author: "Dennis Lehane" },
//   imagePath: "https://alternativemovieposters.com/wp-content/uploads/2021/11/melvinmago-shutterisland.jpg",
// });
// db.movies.insertOne({
//   title: "Stardust",
//   releaseYear: 2007,
//   description:
//     "In a countryside town bordering on a magical land, a young man makes a promise to his beloved that he'll retrieve a fallen star by venturing into the magical realm.",
//   actors: ["Charlie Cox", "Claire Danes", "Sienna Miller", "Michelle Pfeiffer", "Robert De Niro"],
//   genre: {
//     name: "Drama",
//     description: "Drama films are characterized by a strong focus on the emotions and intense situations.",
//   },
//   director: {
//     name: "Matthew Vaughn",
//     bio: "Matthew Vaughn is an American film director, screenwriter, and producer. He is known for his work in romantic comedies and action films.",
//     birth: "1971",
//   },
//   featured: false,
//   book: { title: "Stardust", author: "Neil Gaiman" },
//   imagePath: "https://www.movieposters.com/cdn/shop/products/stardust_480x.progressive.jpg?v=1579124325",
// });
// db.movies.insertOne({
//   title: "The Girl with the Dragon Tattoo",
//   releaseYear: 2011,
//   description:
//     "Journalist Mikael Blomkvist is aided in his search for a woman who has been missing for forty years by Lisbeth Salander, a young computer hacker.",
//   actors: ["Daniel Craig", "Rooney Mara", "Christopher Plummer", "Stellan Skarsgård"],
//   genre: {
//     name: "Drama",
//     description: "Drama films are characterized by a strong focus on the emotions and intense situations.",
//   },
//   director: {
//     name: "David Fincher",
//     bio: "David Andrew Leo Fincher is an American filmmaker. His films, most of which are psychological thrillers, have collectively grossed over $2.1 billion worldwide and have received 40 Academy Award nominations; this includes three Best Director nominations for him.",
//     birth: "1962",
//   },
//   featured: false,
//   book: { title: "The Girl with the Dragon Tattoo", author: "Stieg Larsson" },
//   imagePath:
//     "https://www.movieposters.com/cdn/shop/products/233c991b232bc640ffa8124d59284018_480x.progressive.jpg?v=1573593867",
// });
// db.movies.insertOne({
//   title: "Coraline",
//   releaseYear: 2009,
//   description:
//     "An adventurous 11-year-old girl finds another world that is a strangely idealized version of her frustrating home, but it has sinister secrets.",
//   actors: ["Dakota Fanning", "Teri Hatcher", "John Hodgman"],
//   genre: {
//     name: "Animation",
//     description:
//       "Animation films are characterized by a strong focus on the emotions and intense situations.",
//   },
//   director: {
//     name: "Henry Selick",
//     bio: "Henry Selick is an American film director, screenwriter, and producer. He is known for his work in horror films.",
//     birth: "1952",
//   },
//   featured: false,
//   book: { title: "Coraline", author: "Neil Gaiman" },
//   imagePath: "https://alternativemovieposters.com/wp-content/uploads/2016/11/erwin_caroline.jpg",
// });
// db.movies.insertOne({
//   title: "The Maze Runner",
//   releaseYear: 2014,
//   description:
//     "Thomas is deposited in a community of boys after his memory is erased, soon learning they're all trapped in a maze that will require him to join forces with fellow.",
//   genre: {
//     name: "Drama",
//     description: "Drama films are characterized by a strong focus on the emotions and intense situations.",
//   },
//   director: {
//     name: "Wes Ball",
//     bio: "Wes Ball is an American film director, screenwriter, and producer. He is known for his work in romantic comedies and action films.",
//     birth: "1980",
//   },
//   actors: ["Dylan O'brien", "Kaya Scodelario", "Aml Ameen", "Thomas Brodie-Sangster", "Will Poulter"],
//   featured: false,
//   book: { title: "The Maze Runner", author: "James Dashner" },
//   imagePath: "https://m.media-amazon.com/images/I/71Z-VHqVQVL._AC_UF894,1000_QL80_.jpg",
// });
// db.movies.insertOne({
//   title: "The Wizard of Oz",
//   releaseYear: 1939,
//   description:
//     "Dorothy Gale is swept away from a farm in Kansas to a magical land of Oz in a tornado and embarks on a quest with her new animal friends to see the Wizard of Oz.",
//   genre: {
//     name: "Drama",
//     description: "Drama films are characterized by a strong focus on the emotions and intense situations.",
//   },
//   director: {
//     name: "Victor Fleming",
//     bio: "Victor Fleming is an American film director, screenwriter, and producer. He is known for his work in romantic comedies and action films.",
//     birth: "1889",
//     death: "1949",
//   },
//   actors: ["Judy Garland", "Frank Morgan", "Jack Haley", "Margaret Hamilton", "Ray Bolger"],
//   featured: false,
//   book: { title: "The Wizard of Oz", author: "L. Frank Baum" },
//   imagePath: "https://alternativemovieposters.com/wp-content/uploads/2021/02/KyleLambert_WizardOfOz.jpg",
// });

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
