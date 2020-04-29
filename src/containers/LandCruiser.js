import React from "react";

import Story from "../components/Story";

const LandCruiser = () => {

    const mainText =
        <React.Fragment>
            <div>
                <p><a href={window.location.origin + '/assets/galleries/land_cruiser_gallery/index.html'}><img src={window.location.origin + '/assets/images/features/land_cruiser/Stude101crop.jpg'} className="feature-img" alt="Close-up of the right headlight"/></a>Coincident with the end of World War II, I started high school and my dad acquired his brother's 1935 Chevrolet. It seemed very dull and dowdy compared to other kids' family cars. There were no cars at school as one couldn't get a driver's license in New York City until the impossibly old age of eighteen. So, a lot of showroom shopping was done, usually with the willing accompaniment of my dad (a real car buff). However, there wasn't much to see at the dealers since cars were at a premium and were delivered (at an inflated price) to the lucky customers as soon as shipment was received.</p>

                <p>In 1946 and 1947 everyone was selling all they could make of warmed-over 1942 models. Then the NEW Studebakers arrived and, boy, were they different! Same old mechanicals underneath, but space-age bodies with gorgeous fancy interiors. A dealer had a Land Cruiser, the most expensive model, on the floor. It was a flashy yellow model with all kinds of shiny accessories and whitewall tires (generally not available until 1948). This was June 1946, a very early date for introducing 1947 and easily the first true "postwar" car.</p>

                <p>We got it here a few weeks later, at which time the fun began. First. To keep it running (timing and carburetor were messed up), stopping (the self- adjusting brakes were incorrectly assembled), and turning (some bad steering components). Then there were minor things like the windshield wiper motor (vacuum). clock, radio, and turn signals. Almost by magic, all the needed parts were located. Finally, a new stainless steel exhaust system was beautifully replicated by a man near Toronto.</p>

                <p><a href={window.location.origin + '/assets/images/features/land_cruiser_gallery/index.html'}><img src={window.location.origin + '/assets/images/features/land_cruiser/Stude102crop.jpg'} className="feature-img-left" alt="Close-up of the left taillight"/></a>What makes the car special? To me, it's a lot of little things: the "frontwards/backwards" styling with a one-piece windshield, 2-piece wraparound rear window, side vents in the front fenders, interior crank-up antenna, "hill holder" Overdrive, striped multicolored nylon upholstery, and nifty "come-together" front and back door handles. Many lookers also comment on the "rocket" hood ornament, which Studebaker showed off long before Oldsmobile ever thought of it. Being the premium model, it has a stretched body with spacious rear seating and lots of deco wood-grained and chrome appointments. This did not come cheap as it was priced right on with Buick Super or Chrysler. However. It was different and when do you see one today? </p>

                <p>See a gallery of Bob Wagner's 1948 <a href={window.location.origin + '/assets/galleries/land_cruiser_gallery/index.html'}><strong>Studebaker Land Cruiser</strong></a> and read <a href="http://www.studebakermuseum.org/p/about/history/"><strong>The Studebaker Story</strong></a> on the official website of the Studebaker National Museum.</p>

            </div>
        </React.Fragment>

    return (
            <Story page_heading="1948 Studebaker Land Cruiser"
                   page_subheading={"by Bob Wagner"}
                   text={mainText}/>
    )

}

export default LandCruiser