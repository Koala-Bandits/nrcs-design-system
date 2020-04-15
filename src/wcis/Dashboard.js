import React from "react";
import { HeaderWcisApp } from "./HeaderWcisApp";
import { DashboardStory } from "./Dashboard.stories";
import { FooterWcis } from "./FooterWcis";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <HeaderWcisApp />
        <DashboardStory />
        <FooterWcis />
      </div>
    );
  }
}

export default Dashboard;
