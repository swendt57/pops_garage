import React from "react";
import Story from "../components/Story";

const ProfessionalCars = () => {

    const mainText =
        <React.Fragment>
            <div>

                <p><img src={window.location.origin + '/assets/images/features/professional_cars/horse_drawn_hearse.png'} className="feature-img" alt="Close-up of the right headlight"/>New calendars from the Tri-State Chapter of the Professional Car Society have arrived in Beach Bum Cove so it is time to up-date this article with current information and, of course, lots of new pictures. (links at the bottom of the page)</p>

                <p>Besides his love of the vehicles produced by the late American independent auto manufacturers, Pop has a thing for limousines and hearses. His first years working in New York City were full of bumps and bruises because of it. As his head kept swiveling to watch another long shiny black limo glide down the block, Pop kept smacking into the skinny poles that hold up street awnings. The vivid picture of a snooty chauffeur in Saratoga Springs, New York, chastising a small boy for daring to touch the padded top of a custom Cadillac limousine, still haunts his dreams.</p>

                <p><img src={window.location.origin + '/assets/images/features/professional_cars/ambulance.png'} className="feature-img-left" alt="Close-up of the left taillight"/>Finding limousines on today's Internet is much less hazardous. These wonderful photographs are from calendars, both old and new, produced by the Tri-State Chapter of the Professional Car Society. Pop first found the old calendars, with black & white photos, on eBay and then bought copies of the full-color 2003, 2004 and 2005 ones. Now with the arrival of calendars for 2013 and 2014 there are even more of these fabulous vehicles for you to enjoy. And with the gracious help of Pop's great friend and teacher, Steve Wendt, everything is presented in a new gallery format that propels the Garage into the forefront of web-site design. It goes without saying that Pop is also very grateful to Chuck Snyder II, a past president of the Tri-State Chapter, for his help with this photo article over the years.</p>

                <p style={{textAlign: "center"}}><a href={window.location.origin + '/assets/images/features/professional_bw_gallery/index.html'}><strong>Black and White Gallery</strong></a> &nbsp;&nbsp;&nbsp;&nbsp; <a href={window.location.origin + '/assets/images/features/professional_color_gallery-1/index.html'}><strong>Color Gallery 1</strong></a> &nbsp;&nbsp;&nbsp;&nbsp; <a href={window.location.origin + '/assets/images/features/professional_color_gallery-2/index.html'}><strong>Color Gallery 2</strong></a></p>

                <br/>

                <h2>Tri-State Chapter of the Professional Car Society</h2>
                <hr/>

                <div id="home-aside-container"><aside><p><strong>NOTE: For information about joining the Professional Car Society</strong>, contact Jeff Hookway, the international Membership Director at 64 Mudcut Road, Lafayette, NJ 07848. For information about joining the Tri-State Chapter, contact Chester Zygowski at 3660 Allendale Street, Pittsburgh, PA 15204. One-year dues for the International are $30 and one-year dues for the TSC are only $15. If you wish to join both at once you can send $45 to the Tri-State Chapter and they will forward the payment to the International.</p>

                    <p>The group is always looking for photos to feature in future calendars. If you have a car that you would like to see in their calendar in the future or for information on purchasing calendars contact Chuck Snyder II, TCS PCS, 309 N. Keel Ridge Road, Hermitage, PA 16148.</p></aside></div>

                <p>The Professional Car Society is an organization dedicated to the preservation, restoration and appreciation of professional cars. A professional car is defined as a custom-bodied vehicle that is either horse-drawn or based on passenger car styling and specifically designed for ambulance, funeral or livery service. Included in this class of vehicles are ambulances, flower cars, funeral service cars, hearses, limousines or cars that combine two or more of these functions, such as combination hearse-ambulances, sedan-ambulances or invalid coaches.</p>

                <p>The Tri-State Chapter (TSC) covers Western Pennsylvania, West Virginia and Western New York but has members from other areas as well. It was granted a charter by the National Board of the Society in January of 1990. The chapter produces a quarterly publication called The Livery, an eight page color newsletter covering club events and member's cars, and providing interesting facts and information on professional cars in general.</p>

                <p>Some of the members even hail from as far away as California where Beach Bum Cove is located…Pop lives in the Cove now but he was raised in Upstate New York. For information on how to join this fantastic group please see the sidebar.</p>

            </div>
        </React.Fragment>

    return (
            <Story page_heading="The Professional Cars"
                   page_subheading="Hearses, Limousines, Flower Cars & Ambulances"
                   text={mainText}/>
    )

}

export default ProfessionalCars