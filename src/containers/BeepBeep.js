import React from "react";

import Story from "../components/Story";

const BeepBeep = () => {

    const mainText =
        <React.Fragment>
            <div>
                <p><img src={window.location.origin + '/assets/images/features/beep_beep/Ramblerdrawing.jpg'} className="feature-img" alt="Drawing of a Metropolitan"/>Car songs abound in American history but few have achieved the cult status of this bubble-gum balled about the race between a Cadillac and a little Nash Rambler. The Playmates' Beep, Beep, released on Roulette Records, entered the Billboard charts top 40 on June 9, 1958, made it to number 4, and stayed in the top 40 for 12 weeks. Play it on a jukebox today and you are almost sure to get an instant sing-along.</p>

                <p>Less sure in the memory banks is what actually inspired the song. An internet search found one posting that thought it was a tribute to the super fast 1957 Rebel; another thought it was about the Metropolitan (never called a Rambler); most just remember it as a catchy tune about the little Ramblers of the early fifty's. Used to be there was a link where you could hear the song on the Internet, no more...</p>

                <p>Pop suspects some site owner got a cease and desist letter from a record company lawyer.</p>
                <p>Here are the lyrics.</p>

                <p><strong>Beep Beep</strong><br/>
                <br/>
                Beep beep - beep beep<br/>
                His horn went beep beep beep<br/>
                <br/>
                While riding in my Cadillac<br/>
                What to my surprise<br/>
                A little Nash Rambler was following me<br/>
                About one-third my size<br/>
                The guy must have wanted to pass me out<br/>
                As he kept on tooting his horn<br/>
                I'll show him that a Cadillac<br/>
                Is not a car to scorn <br/>
                <br/>
                Beep beep - beep beep<br/>
                His horn went beep beep beep <br/>
                <br/>
                I pushed my foot down to the floor<br/>
                To give the guy the shake<br/>
                But the little Nash Rambler stayed right behind<br/>
                He still had on his brake<br/>
                He must have thought his car had more guts<br/>
                As he kept on tooting his horn<br/>
                I'll show him that a Cadillac<br/>
                Is not a car to scorn <br/>
                <br/>
                Beep beep - beep beep<br/>
                His horn went beep beep beep <br/>
                <br/>
                My car went in to passing gear<br/>
                And we took off with gust<br/>
                And soon we were doing ninety<br/>
                Must have left him in the dust<br/>
                When I peeked in the mirror of my car<br/>
                I couldn't believe my eyes<br/>
                The little Nash Rambler was right behind<br/>
                I think that guy could fly <br/>
                <br/>
                Beep beep - beep beep<br/>
                His horn went beep beep beep <br/>
                <br/>
                Now we're doing a hundred and ten<br/>
                This certainly was a race<br/>
                For a Rambler to pass a Caddy<br/>
                Would be a big disgrace<br/>
                The guy must have wanted to pass me out<br/>
                As he kept on tooting his horn<br/>
                I'll show him that a Cadillac<br/>
                Is not a car to scorn <br/>
                <br/>
                Beep beep - beep beep<br/>
                His horn went beep beep beep <br/>
                <br/>
                Now we're doing a hundred and twenty<br/>
                As fast as I could go<br/>
                The Rambler pulled alongside of me<br/>
                As if we were going slow<br/>
                The fellow rolled down his window<br/>
                And yelled for me to hear<br/>
                Hey buddy, how can I get this car<br/>
                Out of second gear!
                </p>
            </div>
        </React.Fragment>

    return (
            <Story page_heading="Beep Beep"
                   page_subheading={"Car Song"}
                   text={mainText}/>
    )

}

export default BeepBeep