import React from "react";
import MovieInfo from "./movie-info";
import StarRating from "./star-rating";
import ReviewList from "./review-list";

export default class Movie extends React.Component{
    render(){
        return(
            <div>
                <MovieInfo/>
                <StarRating/>
                <ReviewList/>
            </div>
        )
    }
}