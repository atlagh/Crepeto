import React, {Component} from 'react';
import Card from './Components/Card/Card';
import NavBar from './Components/NavBar/NavBar';
import Browse from './Components/Browse/Browse';
import Contact from './Components/Contact/Contact';
import Register from './Components/Register/Register';
import Menu from './Components/Menu/Menu';
import About from './Components/About/About';
import Order from './Components/Order/Order';
import './App.css';


class App extends Component{
  constructor () {
    super();
    this.state = {
      route: 'base',
    }
}

  onRouteChange = (route) => {
      this.setState({route: route});
    }




  render() {
    return (
      <div>
        <NavBar onRouteChange={this.onRouteChange}/>
        { 
          this.state.route === 'base' ?
          <div className="unit">
            <Browse onRouteChange={this.onRouteChange}/>
            <Card />
            <Register />
          </div>
        : this.state.route === 'contact' ?
          <Contact  />
        : this.state.route === 'about' ? 
          <About />
        : this.state.route === 'order' ?
          <Order />
        : <Menu />
       }
      </div>
    );
  }
}

export default App;
