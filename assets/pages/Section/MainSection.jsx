import React, { Component } from "react";
import JoinSection from "./JoinSection";
import PossiblitySection from "./PossibilitySection";
import Presentation from "./Presentation";
import StaffSection from "./StaffSection";

class MainSection extends Component {
  render() {
    return (
      <AuthProvider {...oidcConfig}>
        <main id="main-section">
          <Presentation />
          <StaffSection />
          <JoinSection />
          <PossiblitySection />
        </main>
      </AuthProvider>
    );
  }
}

export default MainSection;
