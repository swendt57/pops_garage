import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/styles.css';


import HeaderNav from "./Components/HeaderNav";


class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            hideNav: false
        }
    }

    resize = () => {
        let currentHideNav = (window.innerWidth <= 550);
        console.log('current: ' + (window.innerWidth <= 550))
        if (currentHideNav !== this.state.hideNav) {
            this.setState({hideNav: currentHideNav});
        }
        console.log(this.state.hideNav)
        // return currentHideNav;
    };

    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
    }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    // }

    render() {
        return (
            <React.Fragment>

              <HeaderNav hideNav={this.state.hideNav}/>

            </React.Fragment>
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
