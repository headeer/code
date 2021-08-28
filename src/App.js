import './App.css';
import NavBar from "./components/js/nav-bar";
import Header from "./components/js/header";
import HowItWorks from "./components/js/how-it-works";
import React from "react";
import Footer from "./components/js/footer";
import Package from "./components/js/package";
import Platform from "./components/js/platform";
import GreenSection from "./components/js/greenSection";
import WomanSection from "./components/js/woman";
import Multisite from "./components/js/multisite";
import Accordion from "./components/js/accordion";
import BlackSection from "./components/js/blackSection";
import Pricing from "./components/js/pricing";

const App = () => {
    return (
        <div className="app-header">
            <NavBar>
            </NavBar>
            <div className="desktop-container">
                <Header>
                </Header>
                <Platform>
                </Platform>
                    <HowItWorks>
                    </HowItWorks>
            </div>
            <GreenSection>
            </GreenSection>
            <WomanSection>
            </WomanSection>
            <Multisite>
            </Multisite>
            <Accordion>
            </Accordion>
            <BlackSection>
            </BlackSection>
            <HowItWorks reversed={true}>
            </HowItWorks>
            <Pricing>
            </Pricing>
            <Package>
            </Package>
            <Footer>
            </Footer>
        </div>
    );
}

export default App;
