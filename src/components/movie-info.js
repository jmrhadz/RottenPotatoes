import React from "react";
import Img from "./img";
import Info from "./info"

export default class MovieInfo extends React.Component{
    render(){
        return(
            <div className="row">
                <Img className="col"/>
                <Info className="col"/>
            </div>
        )
    }
}