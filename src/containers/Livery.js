import React, {Component} from "react";

import PhotoWithDetail from "../components/PhotoWithDetail";

function assembleData() {
    let data = require("../assets/data/livery.json");

    let itemArray = [];
    Object.keys(data).forEach(function(key) {
        itemArray.push(data[key]);
    });

    return itemArray;
}


class Livery extends Component {

    constructor(props) {
        super(props);

        this.state = {
            liveryData: assembleData()
        }
    }

    render () {
        return (
            <section>

                <h1>The Livery</h1>

                <div className="container">

                    {this.state.liveryData.map(item =>
                        <PhotoWithDetail key={item.title}
                                         title={item.title}
                                         description={item.description}
                                         image_name={item.image_name}
                                         image_folder="livery"
                                         class_name="car-img"
                                         alt_text={item.title + 'example'}
                                         link={item.link}/>)}

                </div>

            </section>
        )
    }
};

export default Livery;
