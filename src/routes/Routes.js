import {Route, Switch} from "react-router-dom";
import React from "react";

import Home from '../containers/Home';
import Showroom from '../containers/Showroom';
import TireKicking from '../containers/TireKicking'
import Livery from '../containers/Livery'
import ClubNews from '../containers/ClubNews'
import Library from '../containers/Library'

// import NotFoundPage from '../components/NotFoundPage';

const Routes = () => {

    return (
        <Switch>
            <Route path="/" component={Home} exact={true}/>
            <Route path="/showroom" component={Showroom}/>
            <Route path="/tire_kicking" component={TireKicking}/>
            <Route path="/livery" component={Livery}/>
            <Route path="/club_news" component={ClubNews}/>
            <Route path="/library" component={Library}/>


            {/*<Route component={NotFoundPage}/>*/}
        </Switch>
    );
};

export default Routes;