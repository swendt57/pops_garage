import React from "react";
import Story from "../components/Story";

const ChryslerCrownImperial = () => {

    const mainText =
        <React.Fragment>
            <div>
                <h3>by Bob Lasher and Bob Wagner</h3>

                <p><figure><a href={window.location.origin + '/assets/galleries/chrysler_crown_imperial_gallery/index.html'}><img src={window.location.origin + '/assets/images/features/professional_cars/CLimoCs.jpg'} alt="Side shot of the 1949 Chrysler Crown Imperial"/></a><figcaption>This is the car just brought home to Vermont after picking it up in Pennsylvania in 1984. Only 39,000 miles had been recorded, and the car is completely original (except for the incorrect whitewall tires which have since been corrected). It drove as new and the 4-wheel disc brakes (not available on any other car in the world then) worked beautifully.</figcaption></figure><strong>Bob Lasher and Bob Wagner are longtime members of Great Autos of Yesteryear, one of the largest auto clubs in California. They, and their classic cars, live on a mountain top in Jamul, east of San Diego. This is the first of a series featuring the fabulous cars in their collection. Just click the photo to launch the gallery.</strong></p>

                <p>When an antique car buff accumulates several vehicles, it seems only natural for one particular car to end up as the apple of his eye. Our 1949 Crown Imperial has long been, and probably always will be, this teacher's pet (Bob L. speaking). I consider this the crown jewel (living up to its name) of our modest collection.</p>

                <p>For as far back as I can remember, a long sleek, black limousine was my dream car. I used to spend hours drawing limousines with exaggerated noses, stretched midriffs, and a rear end that wouldn't stop. Little did I know that one day I would find myself the proud owner of such a black beauty, one that obviously had felt years of kid-glove tender care and appreciation.</p>

                <p>Chrysler entered the automotive scene in 1924 with an extensive line of 17 models in three series. The highest priced was the Imperial and the deluxe model was the Crown. However, that name disappeared after only two years. and through 1939 a "standard" Imperial was made along with a custom.</p>

                <p>In 1940 that all changed. The only car offered was a Crown Imperial, a long 145 inch wheelbase eight-passenger model with or without a divider window. The body was a stretched sedan and was shared with other long wheelbase models.</p>

                <p>Chrysler restyled all their cars for 1949 with all new sheet metal. Not one body piece is carried over from 1948. Mechanically, little changed, a notable exception being the four wheel self-energizing disc brakes used only on this Crown Imperial. The system was made by a manufacturer of aircraft landing gear, and adapted from an existing design. At first glance, the body looks like a stretched sedan (and the lesser 6-cylinder MOPAR limos are), but this model has unique doors, fenders, bumpers, taillights, wheels that are larger than any other model. Inside, all the rear compartment trim is nickel plated and all the hardware and panels are special. It's hard to believe all the special parts created for a production run of only ninety cars!! Only a fraction of the special parts carry forward to the 1950 and later versions.</p>

                <p>These cars were shipped in prime to Derham in Philadelphia who did the interior and paint. All MOPARs of this period are enameled except this model which is lacquered. Now, 44 years and 40,000 miles later, the car stands untouched from new.</p>

                <p>Only three dealers handled the Crown Imperials (New York, Washington, and Los Angeles), and no literature or advertising was produced. They did print an owner's manual for this model which was missing from our car, but we found one at Hershey the day we came to pick up the car (see below).</p>

                <p>The car was delivered new to the Moroccan Embassy in Washington. They sold it about 1960 (with 24,000 miles of use) to a museum, which went out of business in 1972 when it passed to a Pittsburgh collector. He became ill and advertised it in 1984. Having seen it at a show earlier that year, we made a deal over the phone, and he agreed to deliver it to us at Hershey.</p>

                <p>On our way home to Vermont, we stopped overnight with friends in New York City. Not wanting to leave it on the street, we searched for a parking garage and were turned down by several as they did not want to deal with its size or accept that liability. Finally, it found a berth in the Lincoln Center of Performing Arts complex at what seemed like an outrageous fee of $24.00 for 12 hours!</p>

                <p>We hope that you enjoy this look at one of America's finest cars, presented just as it was over fifty years ago. Pictures cannot convey the quality of materials, fit, and finish that was bestowed on a truly custom vehicle of this era. It is indeed a living room on wheels.</p>

                <p><a href={window.location.origin + '/assets/galleries/chrysler_crown_imperial_gallery/index.html'}><strong>Photo Gallery</strong></a></p>
            </div>
        </React.Fragment>

    return (
            <Story page_heading="1949 Chrysler Crown Imperial"
                   page_subheading="Eight Passenger Limousine"
                   text={mainText}/>
    )

}

export default ChryslerCrownImperial