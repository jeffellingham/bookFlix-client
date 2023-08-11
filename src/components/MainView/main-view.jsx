import { useState } from "react";
import { MovieCard } from "../MovieCard/movie-card";
import { MovieView } from "../MovieView/movie-view";

const MainView = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "The Godfather",
      image: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/the-godfather_lkfmijop_500x749.jpg?v=1645738174",
      actors: ["Al Pacino", "Marlon Brando", "James Caan", "Diane Keaton", "Robert Duvall"],
      releaseYear: 1972,
      description:
        "Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger.",
      genre: {
        name: "Crime",
        description:
          "The crime genre deals with both sides of the criminal justice system but does not focus on legislative matters or civil suits and legal actions. The best crime movies often occupy moral gray areas where heroes and villains are much harder to define.",
      },
      featured: true,
      director: {
        name: "Francis Ford Coppola",
        bio: "Francis Ford Coppola is an American film director, producer, and screenwriter. He is considered one of the major figures of the New Hollywood filmmaking movement of the 1960s and 1970s. Coppola is the recipient of five Academy Awards, six Golden Globe Awards, two Palmes d'Or and a British Academy Film Award.",
        birth: "1939",
      },
    },
    {
      id: 2,
      title: "Howl's Moving Castle",
      image:
        "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/ba7a1a793881f159dda4e839afd669de_fb921663-096f-436f-ae0a-fe1d35e508bf_500x749.jpg?v=1573617512",
      releaseYear: 2004,
      description:
        "When an unconfident young woman is cursed with an old body by a spiteful witch, her only chance of breaking the spell lies with a self-indulgent yet insecure young wizard and his companions in his legged, walking castle.",
      genre: {
        name: "Animation",
        description:
          "A film medium in which the film's images are primarily created by computer or hand and the characters are voiced by actors. Animation can incorporate any genre and subgenre.",
      },
      featured: false,
      director: {
        name: "Hayao Miyazaki",
        bio: "Hayao Miyazaki is a Japanese animator, filmmaker, and manga artist. A co-founder of Studio Ghibli, he has attained international acclaim as a masterful storyteller and creator of Japanese animated feature films, and is widely regarded as one of the most accomplished filmmakers in the history of animation.",
        birth: "1941",
      },
    },
    {
      id: 3,
      title: "The Hitchhiker's Guide to the Galaxy",
      image: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/983b8fe87b0ac706ec3c5ef2f968aa4d_9bf49b90-c4b8-4f0f-825a-2b009ece5322_500x749.jpg?v=1573617421",
      releaseYear: 2005,
      description: "Mere seconds before the Earth is to be demolished by an alien construction crew, journeyman Arthur Dent is swept off the planet by his friend Ford Prefect, a researcher penning a new edition of \"The Hitchhiker's Guide to the Galaxy.\"",
      genre: {
        name: "Science Fiction",
        description: "Science fiction movies are defined by a mixture of speculation and science. While fantasy will explain through or make use of magic and mysticism, science fiction will use the changes and trajectory of technology and science. Science fiction will often incorporate space, biology, energy, time, and any other observable science."
      },
      featured: true,
      director: {
        name: "Garth Jennings",
        bio: "Garth Jennings was born in 1972 in Epping, Essex, England, UK. He is a director and actor, known for Sing (2016), Son of Rambow (2007) and The Hitchhiker's Guide to the Galaxy (2005).",
        birth: "1972"
      },
      actors: ["Martin Freeman", "Sam Rockwell"]
    },
    {
      id: 4,
      title: "Dune",
      releaseYear: 2021,
      description: "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset while its heir becomes troubled by visions of a dark future.",
      genre: {
        name: "Science Fiction",
        description: "Science fiction movies are defined by a mixture of speculation and science. While fantasy will explain through or make use of magic and mysticism, science fiction will use the changes and trajectory of technology and science. Science fiction will often incorporate space, biology, energy, time, and any other observable science."
      },
      featured: true,
      director: {
        name: "Denis Villeneuve",
        bio: "Denis Villeneuve is a French Canadian film director and writer. He was born in 1967, in Trois-Rivières, Québec, Canada. He started his career as a filmmaker at the National Film Board of Canada. He is best known for his feature films Arrival (2016), Sicario (2015), Prisoners (2013), Enemy (2013), and Incendies (2010).",
        birth: "1967"
      },
      actors: ["Timothee Chalamet", "Rebecca Ferguson"],
      image: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/ItemN241475_jpg_500x749.jpg?v=1641576614"
    },
    {
      id: 5,
      title: "Blade Runner",
      releaseYear: 1982,
      description: "A blade runner must pursue and terminate four replicants who stole a ship in space and have returned to Earth to find their creator, all while questioning his own identity.",
      genre: {
        name: "Science Fiction",
        description: "Science fiction movies are defined by a mixture of speculation and science. While fantasy will explain through or make use of magic and mysticism, science fiction will use the changes and trajectory of technology and science. Science fiction will often incorporate space, biology, energy, time, and any other observable science."
      },
      featured: true,
      director: {
        name: "Ridley Scott",
        bio: "Sir Ridley Scott is an English film director and producer. Best known for directing films in the science fiction, crime, and historical drama genres, his work is known for its atmospheric and highly concentrated visual style. He's best known for classics like Alien (1979), Blade Runner (1982), Thelma & Louise (1991), Gladiator (2000), and The Martian (2015).",
        birth: "1937"
      },
      actors: ["Harrison Ford", "Rutger Hauer"],
      image: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/d9f6067d2406a7cfbf42a5fc4ae4cd9d_8174831c-db77-4608-9ae2-44aca8f2a6f5_500x749.jpg?v=1573585461"
    }
  ]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  if (selectedMovie) {
    return (
      <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
    )
  }

  if (movies.length === 0) {
    return <div>The movie list is empty, dumdum!</div>;
  }
  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onMovieClick={(newSelectedMovie) => {
            setSelectedMovie(newSelectedMovie);
          }}
        />
      ))}
    </div>
  );
};

export default MainView;