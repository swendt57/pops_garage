import React, {Component} from "react";

import PhotoWithDetail from "../components/PhotoWithDetail";

function assembleData() {
    let data = require("../assets/data/showroom.json");

    let showroomArray = [];
    Object.keys(data).forEach(function(key) {
        showroomArray.push(data[key]);
    });

    return showroomArray;
}


class Showroom extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showroomData: assembleData()
        }
    }

    render () {
        return (
            <section>

                <h1>Showroom</h1>

                <div className="container">

                    <h2>The Independents</h2>

                    <hr/>

                    {this.state.showroomData.map(item => <PhotoWithDetail key={item.title}
                                                                          title={item.title}
                                                                          description={item.description}
                                                                          image_name={item.image_name}
                                                                          image_folder="showroom"
                                                                          class_name="car-img"
                                                                          alt_text="A sample model from: "/>)}

                    <h2>Hearses</h2>

                    <hr/>

                    <h2>Limousines</h2>

                    <hr/>
                </div>

            </section>
        )
    }
};

export default Showroom;
