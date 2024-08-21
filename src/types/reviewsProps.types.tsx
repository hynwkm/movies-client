import Movie from "./movie.types";
import Review from "./review.types";

type ReviewsProps = {
    getMovieData: (movieId: string) => void;
    movie: Movie;
    reviews: Review[];
    setReviews: React.Dispatch<React.SetStateAction<Review[]>>;
};
export default ReviewsProps;
