import React, {Component} from "react";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser'

import PhotoWithDetailAndUrls from "../components/PhotoWithDetailAndUrls";

const processString = require('react-process-string');

function assembleData() {
    let data = require("../assets/data/links.json");

    let linksArray = [];
    Object.keys(data).forEach(function(key) {
        linksArray.push(data[key]);
    });

    return linksArray;
}

//TODO - figure out a way to handle multiple URLs in a description - I have taken the links out of Dave's Classics for the time being

let config = [
    {
        regex: /(http|https:\/\/\S+\..[a-z]{3}) ( \[.{2,}])/,
        fn: (key, result) => <span key={key}><a href={`${result[0]}`}>{result[2]}</a></span>
        // {props.urls[0].name}
    }]

let addToHref = (key, result) => {
    return "<span key={key}><a href={`${result[1]}://${result[2]}.${result[3]}${result[4]}`} target=\"_blank\" rel=\"noopener noreferrer\">Nash  {result[5]}</a></span>";
}

//(\[.{1,}\])
function replacePlaceholder(text, placeholder, urls) {
    // console.log("urls: " + urls);
    urls.map((item, key) =>
        console.log("URL " + item.url + " Name " + item.name)
    )
    // this.items = this.state.cart.map((item, key) =>
    //     <li key={item.id}>{item.name}</li>
    // );
    // let regex = new RegExp(/(http|https):\/\/(\S+)\.([a-z]{2,}?)(.*?)( \[*\] )( |,|$|\.)/);
    // let regex = new RegExp(/(http|https)(:\/\/\S+\..[a-z]{3,}?.*?)( \[.{1,}\])/);
    // let match = text.match(regex);
    // console.log("match: " + match);
    // let alteredText = addToHref(5, match)
    // let alteredText = text.replace(regex, replacement);
    // let alteredText = processString(config)(text);
    // let alteredText = text.replace(regex, '<span key="test"><a href="`${match[1]}${match[2]}`">{match[3]}</a></span>')

    let firstText = text.replace("[0]", `<a href=\"${urls[0].url}\" target=\"_blank\" rel=\"noopener noreferrer\">${urls[0].name}</a>`);
    console.log("first text: " + firstText);
    console.log(firstText.match("[1]"));
    let secondText = firstText.replace("[1]", `<a href=\"${urls[1].url}\" target=\"_blank\" rel=\"noopener noreferrer\">${urls[1].name}</a>`);
    let alteredText = secondText.replace("[2]", `<a href=\"${urls[2].url}\" target=\"_blank\" rel=\"noopener noreferrer\">${urls[2].name}</a>`);
    console.log("altered text: " + alteredText);
    return alteredText;
}

function getDetailCode(item) {
    return (
        <PhotoWithDetailAndUrls key={item.title}
                         title={item.title}
                         description={ ReactHtmlParser(replacePlaceholder(item.description, '?',item.urls)) }
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
