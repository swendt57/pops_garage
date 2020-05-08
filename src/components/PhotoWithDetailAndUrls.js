import React from "react";

import {urlParserConfigs} from "../utilities/utils";


const PhotoWithDetailAndUrls = props => {

    return (
                    <React.Fragment>
                        <tr>
                            <td className="photo-detail-td" >
                                <p className={props.container_class_name}><img
                                    src={`${window.location.origin}/assets/images/${props.image_folder}/${props.image_name}`}
                                    className={props.image_class_name} alt={props.alt_text + props.title}/> {props.link ?
                                    <a href={window.location.origin + "/" + props.link}><strong>{props.title}</strong></a> :
                                    <strong>{props.title}</strong>}&mdash;{props.description}</p>

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




