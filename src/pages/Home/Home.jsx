import React, { useEffect, useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import "./Home.css";
import logo from "../../assets/images/logo.png";
import Services from "../Services/Services";

const Home = () => {
  const { language } = useLanguage();
  const [isLogoLoaded, setIsLogoLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = logo;
    img.onload = () => setIsLogoLoaded(true);
  }, []);

  const labels = {
    en: { slogan: "Best Web Application Development Company in France" },
    fr: { slogan: "Les meilleurs du développement d'applications Web en France" },
  };
  const t = labels[language];

  return (
    <>
      <div className="hero-section">
        <div className="hero-content">
          <img
            src={logo}
            alt="JY Dev Logo"
            className={`hero-logo ${isLogoLoaded ? "loaded" : ""}`}
          />
          <h1 className="slogan">{t.slogan}</h1>
        </div>
        <div className="blob blob1" />
        <div className="blob blob2" />
        <div className="blob blob3" />
      </div>
      <Services />
    </>
  );
};

export default Home;
