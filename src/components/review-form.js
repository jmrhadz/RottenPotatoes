import React from "react";

export default class ReviewForm extends React.Component{
    render(){
        return(
            <form className="form">
                <textarea id="review" className="form-control"/>
                <button id="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}