import React, {Component} from "react";
import PhotoWithDetail from "../components/PhotoWithDetail";

function assembleData() {
    let data = require("../assets/data/library.json");

    let libraryArray = [];
    Object.keys(data).forEach(function(key) {
        libraryArray.push(data[key]);
    });

    return libraryArray;
}


class Library extends Component {

    constructor(props) {
        super(props);

        this.state = {
            libraryData: assembleData()
        }
    }

    render () {
        return (
            <section>

                <h1>The Library</h1>

                <div className="container">

                    {this.state.libraryData.map(item => <PhotoWithDetail key={item.title}
                                                                         title={item.title}
                                                                         description={item.description}
                                                                         image_name={item.image_name}
                                                                         image_folder="library"
                                                                         class_name="book-img"
                                                                         alt_text="Book cover of: "/>)}
                </div>

            </section>
        )
    }
};

export default Library;
