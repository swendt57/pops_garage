import React, {Component} from "react";
import Alert from 'react-bootstrap/Alert';

import PhotoWithDetail from "../components/PhotoWithDetail";

function assembleData() {
    let data = require("../assets/data/showroom.json");

    let showroomArray = [];
    Object.keys(data).forEach(function(key) {
        showroomArray.push(data[key]);
    });

    return showroomArray;
}

function getDetailCode(item) {
    return (
        <PhotoWithDetail key={item.title}
                         title={item.title}
                         description={item.description}
                         image_name={item.image_name}
                         image_folder="showroom"
                         container_class_name="photo-detail"
                         image_class_name="car-img"
                         alt_text="A sample model from: "/>
    )
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

                <Alert variant="danger">
                    <p>We are updating the detail pages in the Showroom. Thank you for your patience!</p>
                </Alert>

                <h1>Showroom</h1>

                <div className="container">

                    <h2>The Independents</h2>

                    <hr/>

                    <table className="table">
                        <tbody>

                    {this.state.showroomData.map(item => {
                        return item.category === "independents" ?
                            getDetailCode(item)
                        :
                            ""
                    })}

                </tbody>
            </table>

                    <h2>Hearses</h2>

                    <hr/>

                    <table className="table">
                        <tbody>

                    {this.state.showroomData.map(item => {
                        return item.category === "hearses" ?
                            getDetailCode(item)
                        :
                            ""
                    })}
    </tbody>
    </table>
                    <h2>Limousines</h2>

                    <hr/>

                    <table className="table">
                        <tbody>

                    {this.state.showroomData.map(item => {
                        return item.category === "limousines" ?
                            getDetailCode(item)
                        :
                            ""
                    })}

    </tbody>
    </table>
                </div>

            </section>
        )
    }
};

export default Showroom;
