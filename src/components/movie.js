import React from "react";
import MovieInfo from "./movie-info";
import StarRating from "./star-rating";
import ReviewList from "./review-list";

export default class Movie extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            info: props.info,
            ratingArray: props.info.rating,
            reviews: []
        }
        this.reviewHandler = this.reviewHandler.bind(this)
        this.submitHandler = this.submitHandler.bind(this)
    }

    // the reviewHandle method lifts the state of the StarRating to the Movie component
    //  in order to add the current rating to the list of star ratings, so that the average can be recalculated in the Info>StarRating component
    reviewHandler(userRating){
        console.log("reviewHandler", userRating)
        this.setState(state => ({
            ratingArray:state.ratingArray.concat(userRating)
        }), console.log("reviewHandler after setting state", this.state))
    }

    // the submitHandler method lifts the value of the review textarea element to the Movie component
    //  in order to add the current review to the list of reviews, so that it can be displayed in the Info component
    submitHandler(review){
        console.log("submit handler in movie", review)
        this.setState(state => ({
            reviews: state.reviews.concat(review)
        }))
    }

    // the Movie component returns a div that contains the MovieInfo, user-adjustable StarRating, and ReviewList components
    //      it passes the movie info object, the list of ratings and the list of reviews into the MovieInfo component,
    //      the reviewHandler method, a displayAverage boolean, and a ratings flag into the StarRating (denoting that this is where the user rates the movie,
    //      not where the average is displayed, and that it doesn't need the lsit of ratings to work),
    //      and the submitHandler method to the ReviewList component
    render(){
       console.log("movie render", this.props.info.name)
        return(
            <div className="container my-5">
                
                <MovieInfo info={this.state.info} ratings={this.state.ratingArray} reviewList={this.state.reviews}/>
                <StarRating handler={this.reviewHandler} displayAverage="false" ratings="false"/>
                <ReviewList handler={this.submitHandler} />
            </div>
        )
    }
}