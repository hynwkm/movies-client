import Movie from "../../types/movie.types";
import Hero from "../hero/Hero";

export default function Home({ movies }: { movies: Movie[] }) {
    return <Hero movies={movies}></Hero>;
}
