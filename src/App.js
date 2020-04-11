import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/styles.css';

import HeaderNav from "./components/HeaderNav";
import Routes from "./routes/Routes";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            hideBanner: false
        }
    }

    resize = () => {
        let currentHideBanner = (window.innerWidth <= 550);

        if (currentHideBanner !== this.state.hideBanner) {
            this.setState({hideBanner: currentHideBanner});
        }
    };

    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
    }

    render() {
        return (
            <div className="App.container">
                <HeaderNav hideBanner={this.state.hideBanner}/>
                <Routes /> {/* Put this here, otherwise page content is inside the header*/}
            </div>
        );
      }

}

export default App;

// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
// </div>
