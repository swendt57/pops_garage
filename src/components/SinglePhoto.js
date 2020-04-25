import React from "react";

const SinglePhoto = props => {

    return ( <div>
            <img src={`${window.location.origin}/assets/images/${props.image_folder}/${props.image_name}`}
                      className={props.class_name}
                      alt={props.alt_text + props.title} />
        </div>
    )
}

export default SinglePhoto

