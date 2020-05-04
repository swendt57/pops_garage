import React, {Component} from "react";
import PhotoWithDetail from "../components/PhotoWithDetail";

import $ from "jquery";

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

    componentDidMount() {
        adjustSpacing();
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
                                                                         container_class_name="library-detail"
                                                                         image_class_name="book-img"
                                                                         alt_text="Book cover of: "/>)}
                </div>

            </section>
        )
    }
}

//Must use window-load instead of document-ready to ensure images are loaded
$(window).on("load resize", adjustSpacing);

function adjustSpacing() {
    $('.library-detail').each(function() {
        let $this = $(this);

        let maxHeight = parseInt($this.children('img').css("max-height").replace(/[^-\d.]/g, ''));
        let imgHeight = $this.children('img').outerHeight();
        let imgHeight2Use = (imgHeight > maxHeight) ? maxHeight : imgHeight;

        let textHeight = $this[0].scrollHeight;
        let divHeight = (imgHeight2Use > textHeight) ? imgHeight2Use + 5 : textHeight + 5;

        $this.parent().css({"height": divHeight});
    });
}


export default Library;