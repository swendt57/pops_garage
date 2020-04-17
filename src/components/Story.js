import React from "react";

const Story = props => {



    return (
        <section>
            <h1>{props.page_heading}</h1>

        <div>
            <h2>{props.page_subheading}</h2>
            <hr/>
            {props.text}
        </div>
        </section>

    )
}

export default Story

