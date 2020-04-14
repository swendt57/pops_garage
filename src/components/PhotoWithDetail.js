import React from "react";

const PhotoWithDetail = props => {

    return (
        <div className="table">
            <div className="row">
                <div className="col"><img src={window.location.origin + '/assets/images/' + props.image_folder + '/' + props.image_name} className={props.class_name} alt={props.alt_text + props.title} /> <strong>{props.title}</strong>&mdash;{props.description}</div>
            </div>
        </div>
    )
}

export default PhotoWithDetail
