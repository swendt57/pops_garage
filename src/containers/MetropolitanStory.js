import React from "react";

import Story from "../components/Story";

const MetropolitanStory = () => {

    const mainText =
        <React.Fragment>
            <div>
                <p><a href={window.location.origin + '/assets/images/features/metro_gallery/index.html'}><img src={window.location.origin + '/assets/images/features/metro/metro2-small.jpg'} className="feature-img" alt="Drawing of a Metropolitan"/></a>The Metropolitan was designed by William J. Flajole, for Nash Motor Division of Nash-Kelvinator Corporation in the United States. Built by Austin Motor Company of Birmingham, England, production began in October of 1953 and the first cars arrived in North America in December. The cars were built and marketed as Nash then, and later as Hudson Metropolitans as well, after the two companies merged as American Motors Corporation in 1954.</p>

                <p>There were two Metro models - a convertible and hardtop convertible. They were initially equipped with an Austin 1200cc engine, but in 1956 the motor was changed to1500cc. In the same year, the grill was changed along with the front hood. Chrome molding was added to the sides, along with a stylish two-tone paint scheme. The new Metropolitan was referred to as the 1500, evidently an unofficial model name, although it did appear in all advertisements of the era.</p>

                <p>As of the 1957 model year, the Nash and Hudson names were dropped, and Metropolitan became the sole marquee. There were approximately 95,000 Metros built for sale by Nash/Hudson/AMC. Approximately 9,400 Metropolitans were built with right hand drive for sale by Austin overseas. In April 1961 production of the Metro ceased.</p>

                <p>For the full story of the little Metro read <a href="http://www.mocna.us/MetHistory.html" target="_blank" rel="noopener noreferrer"><strong>The Nash/Austin Metropolitan Story</strong></a>. Then see a history of Metropolitan art at <a href="http://arcticboy.com/Pages/arcticboysmet.html" target="_blank" rel="noopener noreferrer"><strong>ArcticBoy's Metropolitan Advertising Graphics</strong></a>.</p>

                <p>Sample these websites for Metropolitan clubs: <a href="http://www.hoosiermets.com/" target="_blank" rel="noopener noreferrer"><strong>Hoosier Mets</strong></a>, and <a href="http://www.illinimets.org/" target="_blank" rel="noopener noreferrer"><strong>The Illini Mets</strong></a>, and check these out for parts and restoration information: <a href="http://www.metpitstop.com/about.html" target="_blank" rel="noopener noreferrer"><strong>Metropolitan Pit Stop</strong></a> and <a href="http://www.kipmotor.com/" target="_blank"  rel="noopener noreferrer"><strong>Kip Motor Company</strong></a>.</p>

                <p><a href={window.location.origin + '/assets/images/features/metro_gallery/index.html'}><strong>Photo Gallery</strong></a></p>
            </div>
        </React.Fragment>

    return (
            <Story page_heading="The Metropolitan"
                   page_subheading={"Luxury in Miniature"}
                   text={mainText}
                   image_name=""/>
    )

}

export default MetropolitanStory