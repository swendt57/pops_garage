import React from "react";

const PhotoWithDetail = props => {

    return (
        <div className="table">
            <div className="row">
                <div className="col"><img src={window.location.origin + '/assets/images/library/' + props.image_name} className="book-img" alt={'Book cover of ' + props.title} /> <strong>{props.title}</strong>&mdash;{props.description}</div>
            </div>
        </div>
    )
}

export default PhotoWithDetail
