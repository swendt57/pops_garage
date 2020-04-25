import React, {Component} from "react";

import SinglePhoto from "../components/SinglePhoto";

function assembleData() {
    let data = require("../assets/data/nash_remodel.json");

    let itemArray = [];
    Object.keys(data).forEach(function(key) {
        itemArray.push(data[key]);
    });

    return itemArray;
}


class NashRemodel extends Component {

    constructor(props) {
        super(props);

        this.state = {
            nashData: assembleData()
        }
    }

    render () {
        return (
            <section>

                <h1>A Picture Story</h1>

                <h2>One Man's Classic Rambler, Another's Custom Classic!</h2>

                <hr/>

                <p>Different people have different ideas of what a car should be. Some want their car to look just like it did when it left the factory. Others want their ride to reflect the personality of the person who owns it. Chris Denove of Camarillo, California, wanted his car to be bright and shiny but pretty much stock on the outside. But inside, that was where the magic happened. See below how his 1953 Nash Rambler convertible turned out.</p>

                <div className="feature-photo-container" style={{textAlign: "right"}}>

                    {this.state.nashData.map(item =>
                        <SinglePhoto key={item.title}
                                         image_name={item.image_name}
                                         image_folder="features/nash_remodel"
                                         class_name="nash-remodel-img"
                                         alt_text={item.title}/>)}

                </div>

            </section>
        )
    }
}

export default NashRemodel;

//TODO use a grid like the preview mode on newtumbl.com and center the whole thing on the page
