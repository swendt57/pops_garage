import React from "react";

const PhotoWithDetail = props => {
    // if a URL is is provided, hyperlink the title else just show the title

    return (
        <React.Fragment>
            <div>
                <div className="outer-container">

                    <p className={props.container_class_name}><img
                        src={`${window.location.origin}/assets/images/${props.image_folder}/${props.image_name}`}
                        className={props.image_class_name} alt={props.alt_text + props.title}/> {props.link ?
                        <a href={window.location.origin + "/" + props.link}><strong>{props.title}</strong></a> :
                        <strong>{props.title}</strong>}&mdash;{props.description}</p>

                </div>

                <hr/>

            </div>
        </React.Fragment>
    )
}

export default PhotoWithDetail




