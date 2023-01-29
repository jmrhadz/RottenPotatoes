import React from "react";
import Review from "./review";
import ReviewForm from "./review-form";


//TODO  The ReviewList is probably misnamed, and should probably be named something like "ReviewForm",
//TODO      while the Review component should just be a header tag, and the ReviewForm can be hoisted to this component.  
//          it displays a header that says "Movie Review" and a form, passing the handler method into the ReviewForm component
export default class ReviewList extends React.Component{
    render(){
        return(
            <div>
                <Review/>
                <ReviewForm handler={this.props.handler}/>
            </div>
        )
    }
}
