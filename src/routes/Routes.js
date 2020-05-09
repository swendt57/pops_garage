import {Switch, Route} from "react-router-dom";
import React from "react";

import Home from '../containers/Home';
import Showroom from '../containers/Showroom';
import TireKicking from '../containers/TireKicking';
import Livery from '../containers/Livery';
import Links from '../containers/Links';
import Library from '../containers/Library';
import MetropolitanStory from '../containers/MetropolitanStory';
import NashRambler from '../containers/NashRambler';
import LandCruiser from '../containers/LandCruiser';
import BeepBeep from '../containers/BeepBeep';
import CalendarArt from "../containers/CalendarArt"
import NashRemodel from "../containers/NashRemodel";
import ProfessionalCars from "../containers/ProfessionalCars";
import ChryslerCrownImperial from "../containers/ChryslerCrownImperial";

const Routes = () => {

    return (
        <Switch>
            <Route path="/" component={Home} exact={true}/>
            <Route path="/showroom" component={Showroom}/>
            <Route path="/tire_kicking" component={TireKicking}/>
            <Route path="/livery" component={Livery}/>
            <Route path="/library" component={Library}/>
            <Route path="/links" component={Links}/>
            <Route path="/metropolitan_story" component={MetropolitanStory}/>
            <Route path="/nash_rambler" component={NashRambler}/>
            <Route path="/land_cruiser" component={LandCruiser}/>
            <Route path="/beep_beep" component={BeepBeep}/>
            <Route path="/calendar_art" component={CalendarArt}/>
            <Route path="/nash_remodel" component={NashRemodel}/>
            <Route path="/professional_cars" component={ProfessionalCars}/>
            <Route path="/chrysler_crown_imperial" component={ChryslerCrownImperial}/>
        </Switch>
    );
};

export default Routes;