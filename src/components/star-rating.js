import React from "react";

export default class StarRating extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {};
        this.handleClick = this.handleClick.bind(this)

    }

    // the handleClick method first returns undefined if the handler function isn't passed in 
    //      (i.e., when it's supposed to display an average), or it lifts the user's rating to the Movie component
    //      and updates the state so that the current userRating is the button clicked
    handleClick(index){
        if(this.props.handler === "null"){
            return
        }
        this.props.handler(index+1)
        this.setState((state)=> ({
                                userRating: index
                            }))
        console.log(this.state)
    }

    //the StarRating component does 2 things: it allows the user to rate the movie and it shows the average and number of ratings
    render(){
        console.log("star state:", this.props.displayAverage)
        console.log(this.props)

        // if props.displayAverage is true, it returns a heading tag filled with a freshly calculated average to 1 decimal place, a potato, and the number of ratings
        if(this.props.displayAverage==="true"){

            return(
            <div className="avg star-rating">
                <h5><strong>{Math.round((this.props.ratings.reduce((a,b)=>a+b)/this.props.ratings.length)*10)/10}</strong>🥔({this.props.ratings.length})</h5>
            </div>
            )

        }

        // otherwise, it makes and maps an array of length 5, returning a button with a default transparency of 75%.
        //      on click, the handleClick method is called, and because the state holds the current rating,
        //      as long as the index is less than the current rating, the transparency of the button is taken away,
        //      displaying the current rating in solid potatoes
        return(
            <div className="star-rating">
                {[...Array(5)].map((star, index) => {
                    return (
                        <button
                            type="button"
                            key={index}
                            className={index <= this.state.userRating ? "opacity-100 potato" : "opacity-25 potato"}
                            onClick={()=> this.handleClick(index)}
                            >
                                <span className="star">🥔</span>
                        </button>
                    )
                })}
            </div>
        )
    }

}