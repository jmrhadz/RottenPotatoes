import React from "react";
import Img from "./img";
import Info from "./info"

export default class MovieInfo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            info: props.info
        }
    }
    
    // the MovieInfo component returns the img and info components
    //      it passes the movie poster url into the Img component
    //      and the Movie info, a "null" handler function, the list of ratings and the list of reviews into the Info component
    
    render(){
        console.log("movie-info render:",this.state.info)
        return(
            <div className="row">
                <Img url={this.props.info.image}/>
                <Info info={this.state.info} handler="null" ratings={this.props.ratings}  list={this.props.reviewList}/>
            </div>
        )
    }
}