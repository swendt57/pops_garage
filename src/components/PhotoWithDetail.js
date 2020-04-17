import React from "react";

const PhotoWithDetail = props => {

    return <div className="table">
        <div className="row">
            <div className="col"><img src={`${window.location.origin}/assets/images/${props.image_folder}/${props.image_name}`}
                                      className={props.class_name}
                                      alt={props.alt_text + props.title} />
                                    {/* if a URL is is provided, hyperlink the title else just show the title */}
                                    {props.link ? <a href={window.location.origin + "/" + props.link}><strong>{props.title}</strong></a>
                                        : <strong>{props.title}</strong>}
                                        &mdash;{props.description}

            </div>
        </div>

        <hr/>
    </div>
}

export default PhotoWithDetail
