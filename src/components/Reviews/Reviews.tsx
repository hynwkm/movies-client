import { useEffect, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import api from "../../api/axiosConfig";
import ReviewsProps from "../../types/reviewsProps.types";
import ReviewForm from "../ReviewForm/ReviewForm";

export default function Reviews({
    getMovieData,
    movie,
    reviews = [],
    setReviews,
}: ReviewsProps) {
    const revText = useRef<HTMLTextAreaElement | null>(null);
    const { movieId } = useParams();
    useEffect(() => {
        if (!movieId) {
            return;
        }
        getMovieData(movieId);
    }, [movieId, getMovieData]);

    const addReview = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const rev = revText.current;
        if (!rev) {
            console.error("Review Text not found");
            return;
        }

        try {
            const response = await api.post("/api/v1/reviews", {
                reviewBody: rev.value,
                imdbId: movieId,
            });

            const updatedReviews = [
                { id: response.data.id, body: response.data.body },
                ...reviews,
            ];
            rev.value = "";
            setReviews(updatedReviews);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Container>
            <Row>
                <Col>
                    <h3>Reviews</h3>
                </Col>
            </Row>
            <Row className="mt-2">
                <Col>
                    <img src={movie?.poster} alt="" />
                </Col>
                <Col>
                    {
                        <>
                            <Row>
                                <Col>
                                    <ReviewForm
                                        handleSubmit={addReview}
                                        revText={revText}
                                        labelText="Write a Review?"
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <hr />
                                </Col>
                            </Row>
                        </>
                    }
                    {reviews?.map((r: { id: string; body: string }) => {
                        return (
                            <>
                                <Row key={r.id}>
                                    <Col>{r.body}</Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <hr />
                                    </Col>
                                </Row>
                            </>
                        );
                    })}
                </Col>
            </Row>
            <Row>
                <Col>
                    <hr />
                </Col>
            </Row>
        </Container>
    );
}
