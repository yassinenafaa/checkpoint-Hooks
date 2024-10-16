import React from "react";
import { Flex, Rate } from "antd";

const desc = ["terrible", "bad", "normal", "good", "wonderful"];
const Rating = ({ rating, setRating, movieRating, isMovieRating }) => {
    const handleChange = (value) => {
        setRating(value);
    };
    return isMovieRating ? (
        <div>
            <Flex gap='middle' vertical>
                <Rate disabled value={movieRating} />
            </Flex>
        </div>
    ) : (
        <div>
            <Flex gap='middle' vertical>
                <Rate tooltips={desc} onChange={handleChange} value={rating} />
            </Flex>
        </div>
    );
};

export default Rating;

