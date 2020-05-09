import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/styles.css';

import HeaderNav from "./components/HeaderNav";
import Routes from "./routes/Routes";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            toggleBanner: false
        }
    }

    resize = () => {
        let isNarrowScreen = (window.innerWidth <= 550);

        if (isNarrowScreen !== this.state.toggleBanner) {
            this.setState({toggleBanner: isNarrowScreen});
        }
    };

    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
    }

    render() {
        return (
            <div className="App.container">
                <HeaderNav hideBanner={this.state.toggleBanner}/>
                <Routes /> {/* Put this here, otherwise page content is inside the header*/}
            </div>
        );
      }

}

export default App;

