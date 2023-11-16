import React, {Component} from "react";
import loginView from "./src/loginView";
import registerView from "./src/registerView"
import homeView from "./src/homeView"
import {Actions, Scene, Router} from "react-native-router-flux";

const scenes = Actions.create(
  <Scene key = 'root' >
    <Scene key="home" component={homeView}></Scene>
    <Scene key="login" component={loginView} title="Login" hideNavBar />
    <Scene key="register" component={registerView}/>
  </Scene>
);

export default class App extends Component {
  render() {
    return <Router scenes={scenes} />;
  }
}