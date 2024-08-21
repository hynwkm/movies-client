import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import api from "./api/axiosConfig";
import Layout from "./components/Layout";
import NotFound from "./components/NotFound/NotFound";
import Reviews from "./components/Reviews/Reviews";
import Header from "./components/header/header";
import Home from "./components/home/Home";
import Trailer from "./components/trailer/Trailer";
import Movie from "./types/movie.types";
import Review from "./types/review.types";

function App() {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [movie, setMovie] = useState<Movie>();
    const [reviews, setReviews] = useState<Review[]>([]);
    const getMovies = async () => {
        try {
            const response = await api.get("/api/v1/movies");
            setMovies(response.data);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getMovies();
    }, []);

    const getMovieData = async (movieId: string) => {
        try {
            const response = await api.get(`/api/v1/movies/${movieId}`);
            const singleMovie = response.data;

            setMovie(singleMovie);
            setReviews(singleMovie.reviewIds.reverse());
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Home movies={movies} />}></Route>
                    <Route
                        path="/Trailer/:ytTrailerId"
                        element={<Trailer />}></Route>
                    <Route
                        path="/Reviews/:movieId"
                        element={
                            <Reviews
                                getMovieData={getMovieData}
                                movie={movie as Movie}
                                reviews={reviews}
                                setReviews={setReviews}
                            />
                        }></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
