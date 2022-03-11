// Voorbeeld voor Fatos
// Stel je hebt dus een MovieCard die deze informatie vereist dan zou je dat bijvoorbeeld ongeveer zo typen.
// Zie het gewoon als een object maar in plaats van values geef je aan iedere KEY: een TYPE ipv een Value mee.

export interface IMovieCard {
  id: number; // 1
  title: string; // "The Shining"
  description: string; // "A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future."
  genres: string[]; // ["Horror", "Drama"]
  year: number; // 1980
  rating: number; // 8.4
  duration: string; // "2h 26m"
  director: string; // Stanley Kubrick
  stars: string[]; // ["Jack Nickolsen", "Shelley Duball", "Diane Johnson"]
  writers: string[]; // ["Stephen King", "Stanley Kubrick"]
  parentalRating: string; // "R"
  subtitle: string; // "A Masterpiece Of Modern Horror"
  imageUrls: string[]; // dit is dus bijvoorbeeld ['https://blabla.nl','https://hupelepup.nl']
  imageUrl: string; // "http://ditdat.com"
}

export interface CarouselData {
  img: string;
  header: string;
  text: string;
}
