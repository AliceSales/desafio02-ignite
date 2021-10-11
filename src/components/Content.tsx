import { Header } from './Header';
import { MovieCard } from './MovieCard';

interface ContentProps {
  category: string;
  movies: {
      imdbID: string;
      Title: string;
      Poster: string;
      Ratings: Array<{
        Source: string;
        Value: string;
      }>;
      Runtime: string;
  }[];
}

export function Content(props: ContentProps) {
  return (
    <div className="container">
      <main>
        <Header category={props.category}/>
        <div className="movies-list">
          {props.movies.map(movie => (
            <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  );
}