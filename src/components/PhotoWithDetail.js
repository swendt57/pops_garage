import React from "react";

const PhotoWithDetail = props => {

    return (
        <React.Fragment>
        <div className="photo-detail">
        <p><img src={`${window.location.origin}/assets/images/${props.image_folder}/${props.image_name}`} className={props.class_name} alt={props.alt_text + props.title}/>

        {props.link ? <a href={window.location.origin + "/" + props.link}><strong>{props.title}</strong></a>
            : <strong>{props.title}</strong>}&mdash;{props.description}</p>
        </div>

          <hr/>
        </React.Fragment>
    )
}

export default PhotoWithDetail

{/*if a URL is is provided, hyperlink the title else just show the title*/}

{/* <div> */}
{/* <div className="" style={{ display: "flex"}}>*/}
{/**/}
{/*      <div style={{flex: 1, margin: "0 10px 5px"}}>*/}
{/*          <img src={`${window.location.origin}/assets/images/${props.image_folder}/${props.image_name}`}*/}
{/*               className={props.class_name}*/}
{/*               alt={props.alt_text + props.title}/>*/}
{/*      </div>*/}
{/**/}
{/*      <div style={{flexGrow: 2, textAlign: "justify"}}>*/}
{/*             /!* if a URL is is provided, hyperlink the title else just show the title *!/*/}
{/*             {props.link ? <a href={window.location.origin + "/" + props.link}><strong>{props.title}</strong></a>*/}
{/*                 : <strong>{props.title}</strong>}*/}
{/*             &mdash;{props.description}*/}
{/*     </div>*/}
{/**/}
{/**/}
{/* </div>*/}
{/**/}
{/*<hr/>*/}
{/*}</div>*/}
