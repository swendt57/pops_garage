import React, {Component} from "react";

import PhotoWithDetailAndUrls from "../components/PhotoWithDetailAndUrls";

function assembleData() {
    let data = require("../assets/data/links.json");

    let linksArray = [];
    Object.keys(data).forEach(function(key) {
        linksArray.push(data[key]);
    });

    return linksArray;
}

//TODO - figure out a way to handle multiple URLs in a description - I have taken the links out of Dave's Classics for the time being


function replacePlaceholder(text, placeholder, replacement) {
    return text.replace(placeholder, replacement);
}

function getDetailCode(item) {
    return (
        <PhotoWithDetailAndUrls key={item.title}
                         title={item.title}
                         description={replacePlaceholder(item.description, "[0]", item.urls[0].url)}
                         image_name={item.image_name}
                         image_folder="links"
                         container_class_name="photo-detail"
                         image_class_name="car-img"
                         alt_text={item.image_name}
                         urls={item.urls}
                         category={item.category}
                         subcategory={item.subcategory}
                         link={item.link}/>
        )
    }

class Links extends Component {

    constructor(props) {
        super(props);

        this.state = {
            linksData: assembleData()
        }

    }

    render () {
        return (
            <section>
                <h1>Links</h1>

                <div className="container">
                    <h2>The Independents</h2>
                    <hr/>

                    <h4>American Motors Corporation</h4>
                    <table className="table">
                        <tbody>
                        {this.state.linksData.map(item => {
                            return (item.category === "independents" && item.subcategory === "amc") ?
                                getDetailCode(item) : ""
                        })}
                        </tbody>
                    </table>

                    <h4>Hudson</h4>
                    <table className="table">
                        <tbody>
                        {this.state.linksData.map(item => {
                            return (item.category === "independents" && item.subcategory === "hudson") ?
                                getDetailCode(item) : ""
                        })}
                        </tbody>
                    </table>

                    <h4>Nash</h4>
                    <table className="table">
                        <tbody>
                        {this.state.linksData.map(item => {
                            return (item.category === "independents" && item.subcategory === "nash") ?
                                getDetailCode(item) : ""
                        })}
                        </tbody>
                    </table>

                    <h4>Packard</h4>
                    <table className="table">
                        <tbody>
                        {this.state.linksData.map(item => {
                            return (item.category === "independents" && item.subcategory === "packard") ?
                                getDetailCode(item) : ""
                        })}
                        </tbody>
                    </table>

                    <h4>Studebaker</h4>
                    <table className="table">
                        <tbody>
                        {this.state.linksData.map(item => {
                            return (item.category === "independents" && item.subcategory === "studebaker") ?
                                getDetailCode(item) : ""
                        })}
                        </tbody>
                    </table>

                    <h2>Livery</h2>
                    <hr/>

                    <h4>Hearses</h4>
                    <table className="table">
                        <tbody>
                        {this.state.linksData.map(item => {
                            return (item.category === "livery" && item.subcategory === "hearses") ?
                                getDetailCode(item) : ""
                        })}
                        </tbody>
                    </table>

                    <h4>Limousines</h4>
                    <table className="table">
                        <tbody>
                        {this.state.linksData.map(item => {
                            return (item.category === "livery" && item.subcategory === "limousines") ?
                                getDetailCode(item) : ""
                        })}
                        </tbody>
                    </table>

                    <h2>Other Web Sites</h2>
                    <hr/>
                    <table className="table">
                        <tbody>
                        {this.state.linksData.map(item => {
                            return item.category === "other_web_sites" ?
                                getDetailCode(item) : ""
                        })}
                        </tbody>
                    </table>
                </div>
            </section>
        )
    }
}

export default Links;
