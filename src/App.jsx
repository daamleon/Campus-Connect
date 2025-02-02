import React, { useState, useRef } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MainContent from "./components/MainContent";
import EventLocation from "./components/Location";
import CampusPartners from "./components/Partners";
import Footer from "./components/Footer";
import NavMobile from "./components/NavMobile";
import EmbedEvent from "./components/EmbedEvent";
import Sponsor from "./components/Sponsor";
import "./index.css";

function App() {
  const [showEmbed, setShowEmbed] = useState(false);
  const embedRef = useRef(null);

  const handleShowEmbed = () => {
    setShowEmbed(true);
    setTimeout(() => {
      embedRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const handleCloseEmbed = () => {
    setShowEmbed(false);
  };

  return (
    <div className="w-screen h-screen flex flex-col bg-white">
      <Header />
      <NavMobile />
      <div className="pt-12 flex-1 overflow-auto">
        <Hero />
        <MainContent handleShowEmbed={handleShowEmbed} />
        {showEmbed && (
          <div ref={embedRef} className="w-full max-w-4xl mx-auto py-10">
            <EmbedEvent handleClose={handleCloseEmbed} />
          </div>
        )}
        <EventLocation />
        <CampusPartners />
        <Sponsor />
        <Footer />
      </div>
    </div>
  );
}

export default App;
