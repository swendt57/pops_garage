import React from "react";
import Story from "../components/Story";

const NashRambler = () => {

    const mainText =
        <React.Fragment>
            <div>
                <p><a href={window.location.origin + '/assets/images/features/nash_rambler_gallery/index.html'}><img src={window.location.origin + '/assets/images/features/rambler/HoodOrnament.jpg'} className="feature-img" alt="Hood ornament of the restored Rambler"/></a><em><strong>Note:</strong> I would like to sincerely thank my fellow members of the Nash Car Club of America for their help and encouragement during the car's three-year restoration. They were a huge source of information and details. The many emails with answers to my questions, pictures and suggestions were Invaluable in getting my Rambler back to the superb condition it is in today. Plus a big thank-you to Les and Mark. Everyone who restores a car needs someone to call on when nothing is going right. Les and Mark were those guys for me.</em></p>

                <p>I had always been a Ford car person, the old ones. While on a hunting trip in Montana, I spotted an old car behind a building on the edge of Glasgow.</p>

                <p>I told my son, Matt, "It looks like a Nash, and a convertible besides. Let's go look." Sure enough, it was. Rambler was the only identifying mark on it. I decided that I was going to find out who owns it. Matt's reply was "Why would you do that? It's junk."</p>

                <p>I found the owner, Carl (Bill) Bell and we became instant friends. The car was not for sale. He was going to fix it up himself.</p>

                <p>The next year during hunting season, I decided to take another look. The car was there, still outside and exposed to the weather and still without a top. I stopped to talk again and this time I offered Bill $1000.00. My son said "What's wrong with you, dad? It's still junk." Bill laughed and said you're not even close!</p>

                <p>The third year back, the car was still there so I talked to Bill another time. What could it hurt? We compromised and I bought the car! I would pick it up in the spring when the snow was gone.</p>

                <p>I picked up the car in the spring of 2009. It left for Fargo with no title, bullet holes in the door and the contents of the locked trunk still a mystery. I got a bill of sale from the owner notarized and guaranteed by the local auto dealership and was on my way. Once back at my shop, I began to clean the dirt and rubble from the floor and found a key for the trunk!</p>

                <ul className="rambler-list">
                    <li>The trunk floor was rusted out from water sitting in it for many years.</li>
                    <li>One quarter panel (the driver's side) was full of body putty from a prior repair.</li>
                    <li>The top bows and latches were found in the trunk.</li>
                    <li>It had the wrong motor and transmission.</li>
                    <li>The cables for the top were there in bad shape and not in the tracks.</li>
                    <li>The top drive motor was stuck.</li>
                    <li>The steering sector was bad and could hardly turn the steering wheel.</li>
                </ul>

                <p>The only good thing about it at this point was that the wheels turned and the car rolled. Wow... is it repairable? After talking with several Nash Car Club members, I decided to give it a try. Here's what happened next...</p>

                <ul className="rambler-list">
                    <li>Disassembled the car down to the bare unibody.</li>
                    <li>Replaced the trunk floor.</li>
                    <li>Cleaned and painted the underside of the car.</li>
                    <li>Reconditioned the rear end (installed new bearings &amp; brakes front &amp; back and replaced steering gears.</li>
                    <li>Replaced the driver's side quarter panel.</li>
                    <li>Repaired the bullet holes in the driver's side door.</li>
                    <li>Stripped the entire car to bare metal and made necessary dent repairs - refinished same.</li>
                    <li>Found a motor and Hydramatic transmission (in Oklahoma) - rebuilt both and installed.</li>
                    <li>Repaired the top motor and parts - installed new cables.</li>
                    <li>New wiring.</li>
                    <li>New interior and top (3 year project).</li>
                </ul>

                <p>I drove the car 10 miles on April 28, 2012 for the first time.</p>

                <p><a href={window.location.origin + '/assets/images/features/nash_rambler_gallery/index.html'}><strong>Photo Gallery</strong></a></p>
            </div>
        </React.Fragment>

    return (
            <Story page_heading="Restoring a 1953 Nash Rambler
Custom Convertible"
                   page_subheading="Words & pictures by owner Dave Simley"
                   text={mainText}/>
    )

}

export default NashRambler