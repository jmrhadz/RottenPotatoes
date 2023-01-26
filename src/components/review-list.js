import React from "react";
import Review from "./review";
import ReviewForm from "./review-form";

export default class ReviewList extends React.Component{
    render(){
        return(
            <div>
                <Review/>
                <ReviewForm/>
            </div>
        )
    }
}
