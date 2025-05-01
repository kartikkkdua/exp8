import { Movie } from './types';

export const initialMovies: Movie[] = [
  // Hollywood Movies
  {
    id: 1,
    title: "Inception",
    posterUrl: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=800",
    rating: 4.8,
    releaseYear: 2010,
    genre: ["Sci-Fi", "Action", "Thriller"],
    description: "A thief who enters the dreams of others to steal secrets from their subconscious.",
    reviews: [
      {
        id: 1,
        userName: "MovieBuff",
        rating: 5,
        comment: "A masterpiece of modern cinema!",
        date: "2024-03-10"
      }
    ]
  },
  {
    id: 2,
    title: "The Shawshank Redemption",
    posterUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800",
    rating: 4.9,
    releaseYear: 1994,
    genre: ["Drama"],
    description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    reviews: []
  },
  {
    id: 3,
    title: "The Dark Knight",
    posterUrl: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?auto=format&fit=crop&w=800",
    rating: 4.9,
    releaseYear: 2008,
    genre: ["Action", "Crime", "Drama"],
    description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    reviews: []
  },
  {
    id: 4,
    title: "Pulp Fiction",
    posterUrl: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=800",
    rating: 4.7,
    releaseYear: 1994,
    genre: ["Crime", "Drama"],
    description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    reviews: []
  },
  {
    id: 5,
    title: "Forrest Gump",
    posterUrl: "https://images.unsplash.com/photo-1528495612343-9ca9f4a4de28?auto=format&fit=crop&w=800",
    rating: 4.8,
    releaseYear: 1994,
    genre: ["Drama", "Romance"],
    description: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75.",
    reviews: []
  },
  {
    id: 6,
    title: "The Matrix",
    posterUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800",
    rating: 4.7,
    releaseYear: 1999,
    genre: ["Action", "Sci-Fi"],
    description: "A computer programmer discovers that reality as he knows it is a simulation created by machines, and joins a rebellion to break free.",
    reviews: []
  },
  {
    id: 7,
    title: "Gladiator",
    posterUrl: "https://images.unsplash.com/photo-1608346128025-1896b97a6fa7?auto=format&fit=crop&w=800",
    rating: 4.6,
    releaseYear: 2000,
    genre: ["Action", "Drama"],
    description: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
    reviews: []
  },
  {
    id: 8,
    title: "Interstellar",
    posterUrl: "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?auto=format&fit=crop&w=800",
    rating: 4.8,
    releaseYear: 2014,
    genre: ["Adventure", "Drama", "Sci-Fi"],
    description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    reviews: []
  },
  {
    id: 9,
    title: "The Silence of the Lambs",
    posterUrl: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&w=800",
    rating: 4.7,
    releaseYear: 1991,
    genre: ["Crime", "Drama", "Thriller"],
    description: "A young FBI cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer.",
    reviews: []
  },
  {
    id: 10,
    title: "Saving Private Ryan",
    posterUrl: "https://images.unsplash.com/photo-1580130379624-3a069e4bcd93?auto=format&fit=crop&w=800",
    rating: 4.8,
    releaseYear: 1998,
    genre: ["Drama", "War"],
    description: "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.",
    reviews: []
  },
  
  // Bollywood Movies
  {
    id: 11,
    title: "3 Idiots",
    posterUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800",
    rating: 4.8,
    releaseYear: 2009,
    genre: ["Comedy", "Drama"],
    description: "Two friends are searching for their long lost companion. They revisit their college days and recall the memories of their friend who inspired them to think differently.",
    reviews: []
  },
  {
    id: 12,
    title: "Lagaan",
    posterUrl: "https://images.unsplash.com/photo-1562016600-ece13e8ba570?auto=format&fit=crop&w=800",
    rating: 4.7,
    releaseYear: 2001,
    genre: ["Drama", "Sport"],
    description: "The people of a small village in Victorian India stake their future on a game of cricket against their ruthless British rulers.",
    reviews: []
  },
  {
    id: 13,
    title: "Dilwale Dulhania Le Jayenge",
    posterUrl: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?auto=format&fit=crop&w=800",
    rating: 4.8,
    releaseYear: 1995,
    genre: ["Drama", "Romance"],
    description: "A young man and woman fall in love on a journey to Europe. When they return home, the woman must convince her traditional family to accept their relationship.",
    reviews: []
  },
  {
    id: 14,
    title: "PK",
    posterUrl: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?auto=format&fit=crop&w=800",
    rating: 4.6,
    releaseYear: 2014,
    genre: ["Comedy", "Drama", "Sci-Fi"],
    description: "An alien on Earth loses the only device he can use to communicate with his spaceship. His innocent nature and child-like questions force the country to evaluate their religious beliefs.",
    reviews: []
  },
  {
    id: 15,
    title: "Dangal",
    posterUrl: "https://images.unsplash.com/photo-1526399232581-2ab5608b6336?auto=format&fit=crop&w=800",
    rating: 4.8,
    releaseYear: 2016,
    genre: ["Action", "Biography", "Drama"],
    description: "Former wrestler Mahavir Singh Phogat trains his daughters Geeta and Babita to become India's first world-class female wrestlers.",
    reviews: []
  },
  {
    id: 16,
    title: "Gangs of Wasseypur",
    posterUrl: "https://images.unsplash.com/photo-1605806616949-1e87b487fc2f?auto=format&fit=crop&w=800",
    rating: 4.7,
    releaseYear: 2012,
    genre: ["Action", "Crime", "Drama"],
    description: "A clash between Sultan and Shahid Khan leads to the expulsion of Khan from Wasseypur, and ignites a deadly blood feud spanning three generations.",
    reviews: []
  },
  {
    id: 17,
    title: "Bajrangi Bhaijaan",
    posterUrl: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?auto=format&fit=crop&w=800",
    rating: 4.6,
    releaseYear: 2015,
    genre: ["Adventure", "Comedy", "Drama"],
    description: "An Indian man with a magnanimous heart takes a young mute Pakistani girl back to her homeland to reunite her with her family.",
    reviews: []
  },
  {
    id: 18,
    title: "Queen",
    posterUrl: "https://images.unsplash.com/photo-1517697471339-4aa32003c11a?auto=format&fit=crop&w=800",
    rating: 4.7,
    releaseYear: 2014,
    genre: ["Adventure", "Comedy", "Drama"],
    description: "A Delhi girl from a traditional family sets out on a solo honeymoon after her marriage gets cancelled.",
    reviews: []
  },
  {
    id: 19,
    title: "Andhadhun",
    posterUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800",
    rating: 4.8,
    releaseYear: 2018,
    genre: ["Crime", "Drama", "Mystery"],
    description: "A series of mysterious events change the life of a blind pianist, who must now report a crime that he should technically know nothing about.",
    reviews: []
  },
  {
    id: 20,
    title: "Gully Boy",
    posterUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800",
    rating: 4.6,
    releaseYear: 2019,
    genre: ["Drama", "Music"],
    description: "A coming-of-age story about an aspiring street rapper from the slums of Mumbai.",
    reviews: []
  }
];