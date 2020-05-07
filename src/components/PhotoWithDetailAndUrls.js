import React from "react";

import {urlParserConfigs} from "../utilities/utils";


const processString = require('react-process-string');
const config = urlParserConfigs[0]; //Not used yet...


const PhotoWithDetailAndUrls = props => {
    // if a URL is is provided, hyperlink the title else just show the title

    let config = [
        {
            regex: /(http|https):\/\/(\S+)\.([a-z]{2,}?)(.*?)( |,|$|\.)/gim,
            fn: (key, result) => <span key={key}>
                                     <a href={`${result[1]}://${result[2]}.${result[3]}${result[4]}`} target="_blank" rel="noopener noreferrer">{props.urls[0].name}</a>{result[5]}
                                 </span>
        }]

    function assembleTextWithUrl() {
        // console.log("before: " + props.description);
        let newString = processString(config)(props.description, props.urls.name);
        // console.log("after: " + props.description);
        return newString;
    }

    return (
                    <React.Fragment>
                        <tr>
                            <td className="photo-detail-td" >
                                <p className={props.container_class_name}><img
                                    src={`${window.location.origin}/assets/images/${props.image_folder}/${props.image_name}`}
                                    className={props.image_class_name} alt={props.alt_text + props.title}/> {props.link ?
                                    <a href={window.location.origin + "/" + props.link}><strong>{props.title}</strong></a> :
                                    <strong>{props.title}</strong>}&mdash;{assembleTextWithUrl()}</p>

                            </td>
                        </tr>
                        <tr>
                            <td className="photo-detail-td">
                                <hr/>
                            </td>
                        </tr>
                    </React.Fragment>

    )
}

export default PhotoWithDetailAndUrls




