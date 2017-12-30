import React, { Component } from 'react';
import { LandingPage, SigninPage, AboutPage, technicaldetailPage, PressPage, MarketingPage, LivePage, SettingPage } from 'components';
import { Route } from 'react-router-dom';
const baseUrl = process.env.PUBLIC_URL;
class App extends Component {
  
  render() {
    return (
      <div>
        <Route exact path="/" component={LandingPage}/>
        <Route path={baseUrl + "/signin"} component={SigninPage}/>
        <Route path={baseUrl + "/about"} component={AboutPage}/>
        <Route path={baseUrl + "/technical"} component={technicaldetailPage}/>
        <Route path={baseUrl + "/press"} component={PressPage}/>
        <Route path={baseUrl + "/marketplace"} component={MarketingPage}/> 
        <Route path={baseUrl + "/marketplace/siring"} component={MarketingPage}/>
        <Route path={baseUrl + "/marketplace/gen0"} component={MarketingPage}/>
        <Route path={baseUrl + "/marketplace/all_kitties"} component={MarketingPage}/>
        <Route path={baseUrl + "/racing"} component={MarketingPage}/>
        <Route path={baseUrl + "/ico"} component={MarketingPage}/>
        <Route path={baseUrl + "/live"} component={LivePage}/>
        <Route path={baseUrl + "/setting"} component={SettingPage}/>
      </div>
    );
  }
}

export default App;