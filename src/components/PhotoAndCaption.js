import React from "react";
import PhotoWithDetail from "./PhotoWithDetail";

const PhotoAndCaption = props => {

    return ( <div className="table">
            <div className="row">
                <div className="col text-center"><img src={`${window.location.origin}/assets/images/${props.image_folder}/${props.image_name}`}
                                          className={props.class_name}
                                          alt={props.alt_text + props.title} />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h2 className="text-center">{props.title}</h2>
                    <p>{props.description}</p>
                </div>
            </div>

            <hr/>
        </div>
    )
}

export default PhotoAndCaption

