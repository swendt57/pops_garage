import React from "react";
import {Link} from 'react-router-dom'

import nash59 from '../assets/images/59NashSWagon3.jpg';

const Home = () => {

    return (
        <section>

            <h1>Pop's Garage</h1>

            <div className="container home">

                <div id="home-article-container">
                    <article>

                        <p><strong>Welcome to Pop's Garage</strong> in beautiful downtown Beach Bum Cove. A mythical place where clocks don't get wound, calendars don't get hung (unless they have old car pictures) and recessions never come. Pop still drives Dorothy Louise, his beloved Rambler Ambassador convertible but keeps his skateboard in the back for when he forgets her gas gauge tends to stick.</p>

                        <div id="home-aside-container"><aside><img src={nash59} className="car-img" alt="1959 Nash station wagon"/>Remember when all the brands used the same front-ends and back-ends for all their models? Didn't matter if it was a four-door sedan, a two-door hard top, a convertible or a station wagon. You could tell what it was both coming and going! <br/><br/><strong>Coming soon</strong>, the Station Wagons of the post war independents!</aside></div>

                        <p>The <Link to="/showroom"><strong>Showroom</strong></Link> features 1:18 scale models of the vehicles produced by the post-war era independent American manufactures. Also featured are models of the hearses and limousines that Pop is so enamored with. Pictures and Information is provided here of the models, colors available and suggestions of where to find and purchase them.</p>

                        <p>Pop has made some new friends, you will find links to <strong>Diecast Models Wholesale</strong> (Great selection and prices) and <strong>eBay</strong> (for hard to find models) in the Showroom. Please visit them and make them feel welcome!</p>

                        <p><Link to="/tire_kicking"><strong>Tire Kicking</strong></Link> is the place Pop puts articles and photo features about his favorite cars. Featured now is A Picture Story: One Man's Classic Rambler, Another's Custome Classic, Great Caldendar Art and Restoring a 1953 Nash Rambler Custom Convertible; the 1948 Studebaker Land Cruiser and The History of the Metropolitan. Some articles have links to other sites of interests for fans of the late American independent auto manufacturers.</p>

                        <p>In <Link to="/livery"><strong>The Livery</strong></Link>, you will discover that Pop also has a real thing for limousines and hearses. Friends in his car club own The '49 Crown Imperial and provided the original factory photographs that illustrate the article. The Professional Cars, a rare look at vintage professional cars owned by members of the Tri-State Chapter of the Professional Car Society, has been updated with new photographs in a new gallery format.</p>
                        <p>In <Link to="/livery"><strong>The Library</strong></Link> you'll find car themed books that piqued Pop's interest. Everything from <strong>AMC Muscle Cars</strong> to <strong>Classic American Limousines</strong>. There's bound to be something for everyone here!</p>
                    </article>
                </div>

            </div>

        </section>
    )

};

export default Home
