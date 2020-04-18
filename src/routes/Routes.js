import {Route, Switch} from "react-router-dom";
import React from "react";

import Home from '../containers/Home';
import Showroom from '../containers/Showroom';
import TireKicking from '../containers/TireKicking';
import Livery from '../containers/Livery';
import ClubNews from '../containers/ClubNews';
import Library from '../containers/Library';
import MetropolitanStory from '../containers/MetropolitanStory';
import NashRambler from '../containers/NashRambler';
import LandCruiser from '../containers/LandCruiser';
import BeepBeep from '../containers/BeepBeep';
import CalendarArt from "../containers/CalendarArt"

// import NotFoundPage from '../components/NotFoundPage';

const Routes = () => {

    return (
        <Switch>
            <Route path="/" component={Home} exact={true}/>
            <Route path="/showroom" component={Showroom}/>
            <Route path="/tire_kicking" component={TireKicking}/>

            <Route path="/livery" component={Livery}/>
            <Route path="/library" component={Library}/>
            <Route path="/club_news" component={ClubNews}/>
            <Route path="/metropolitan_story" component={MetropolitanStory}/>
            <Route path="/nash_rambler" component={NashRambler}/>
            <Route path="/land_cruiser" component={LandCruiser}/>
            <Route path="/beep_beep" component={BeepBeep}/>
            <Route path="/calendar_art" component={CalendarArt}/>

            {/*<Route component={NotFoundPage}/>*/}
        </Switch>
    );
};

export default Routes;