import React from "react";

export default class Img extends React.Component{
    render(){
        //Component returns an image that's 1/3rd of the container size, with the url as the source and "movie poster" as the alt texts
        return(
            <img className="col-4" src={this.props.url} alt={`movie poster`}/>
        )
    }
}