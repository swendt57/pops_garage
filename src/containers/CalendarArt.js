import React, {Component} from "react";

import PhotoAndCaption from "../components/PhotoAndCaption";

function assembleData() {
    let data = require("../assets/data/calendar_art.json");

    let itemArray = [];
    Object.keys(data).forEach(function(key) {
        itemArray.push(data[key]);
    });

    return itemArray;
}


class CalendarArt extends Component {

    constructor(props) {
        super(props);

        this.state = {
            calendarData: assembleData()
        }
    }

    render () {
        return (
            <section>

                <h1>Great Calendar Art</h1>

                <h2>Featuring early products from the American Independents</h2>

                <hr/>

                <div className="container">

                    <p><strong>These came from the kind of calendars that do get hung in Beach Bum Cove. The illustrations below area artist renditions of pre-war cars from the American independents. Back then they were all truly independent and separate automobile manufactures and these are some of the best vehicles they offered. The calendars they were taken from were given out in the late 1990s by a large Ohio chain of "filter & lube" service outlets called FASLUBE.</strong></p>

                    {this.state.calendarData.map(item =>
                        <PhotoAndCaption key={item.title}
                                         title={item.title}
                                         description={item.description}
                                         image_name={item.image_name}
                                         image_folder="features/calendar_art"
                                         class_name="large-img"
                                         alt_text="Drawing of a "
                        />)
                    }

                </div>


            </section>
        )
    }
}

export default CalendarArt;
