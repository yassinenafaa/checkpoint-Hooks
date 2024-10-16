import React from "react";
import { Button, Card } from "react-bootstrap";
import "./MovieCard.css";
import MovieRating from "./Rating";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
    return (
        <div className='moviecard'>
            <Card style={{ width: "18rem" }}>
                <Card.Img className='img-card' variant='top' src={movie.posterUrl} />
                <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text className='desc'>{movie.description}</Card.Text>
                    <MovieRating isMovieRating={true} movieRating={movie.rate} />
                    <Link to={`movie/${movie.id}`}>
                        <Button variant='primary'>Go somewhere</Button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};
export default MovieCard;