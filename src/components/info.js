import React from "react";
import StarRating from "./star-rating";

export default class Info extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: props.info.name,
            description: props.info.description,
            ageRating: props.info.ageRating,
            dateReleased: props.info.dateReleased,
            userRating: props.info.userRating
        }
    }

    // Info component renders a div that contains the movie title, the synopsis, the average rating,
    //           the MPAA rating, the year released, and a list of the user reviews as they're added
    render(){
        console.log("info render:", this.props)
        return(
            <div  className="col-8 shadow-lg text-secondary">
                <h1 className="text-dark">{this.state.name}</h1>
                <p>{this.state.description}</p>
                <span><StarRating displayAverage="true" handler="null" ratings={this.props.ratings}/>{this.state.ageRating} ⸱ {this.state.dateReleased}</span>
                <div className="overflow-auto">{this.props.list ? this.props.list.map((review, index) => {
                        return <p key={index}>{review}</p>
                    }) : "Reviews here"} </div>
            </div>
            
        )
    }
}