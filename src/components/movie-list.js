import React from "react";
import Movie from "./movie";
const listOfMovies = require('../movie-list-sample.json')



export default class MovieList extends React.Component{
    constructor(){
        super();
        this.state = {
            list: listOfMovies
        }
    }

    //  the MovieList is the main component of this app
    //      it loops through every movie in the listOfMovies JSON file
    //      for evey movie in the list, the previous star rating is randomized with between 1 and 10 1-5 star ratings
    //      and then it returns a Movie component, passing in an index and an object of information
    
    render(){
        console.log("movie list render")

       return (
            <div>
                {this.state.list.map((movie,index) => {
                    let random1 = Math.floor(Math.random()*10+1)
                    for(let i=0;i<random1;i++){
                        movie.rating.push(Math.floor(Math.random()*5+1))
                    }
                    return <Movie key={index} info={movie}/>
                })}
            </div>
        )
    }
}

