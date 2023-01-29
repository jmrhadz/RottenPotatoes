import React from "react";

export default class ReviewForm extends React.Component{
    constructor(){
        super();
        this.state = {value:""}
        this.submitHandler = this.submitHandler.bind(this)
    }

    //  the submitHandler method takes the event data, prevents the page from refreshing,
    //      passes the text area value to the handler function, and resets the text area value to blank
    submitHandler = (e) => {
        e.preventDefault();
        this.props.handler(e.target.previousSibling.value)
        e.target.previousSibling.value = ""
        console.log(e.target.previousSibling.value)
        console.log("submit handler clicked")
    }

    //  the ReviewFrom component returns a form with a text area and a submit button
    render(){
        return(
            <form className="form">
                <textarea id="review" className="form-control"/>
                <button id="submit" className="btn btn-primary" onClick={this.submitHandler}>Submit</button>
            </form>
        )
    }
}