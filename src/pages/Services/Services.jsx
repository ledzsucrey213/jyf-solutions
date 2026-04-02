import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import "./Services.css";
import restaurant from "../../assets/images/restaurant-website.png";
import ra_image from "../../assets/images/ra.png";
import model3D from "../../assets/images/model-plat.png";
import applicationImage from "../../assets/images/outfy.png";

const Services = () => {
  const { language } = useLanguage();

  const content = {
    fr: {
      title: "Nos Services",
      service1Title: "Sites Web <span className='highlight'>sur mesure</span> adaptés à vos besoins",
      service1Description:
        "Nous concevons des sites web modernes, responsives et performants, conçus pour mettre en valeur votre marque et engager votre audience. Que vous ayez besoin d'une page de destination, d'un portfolio ou d'une plateforme d'entreprise complète, notre équipe livre des solutions élégantes et fonctionnelles à une valeur inégalée.",
      service1Price: "Sites web à partir de <strong>800€</strong>",
      service2Title: "Applications <span className='highlight'>mobiles puissantes</span>",
      service2Description:
        "De la conception au lancement, nous créons des applications mobiles élégantes et évolutives pour iOS et Android. Nos applications sont conçues pour offrir une expérience utilisateur fluide, des performances robustes et des résultats réels pour les startups et les entreprises en croissance.",
      service2Price: "Applications mobiles à partir de <strong>1200€</strong>",
      service3Title: "Modélisation <span className='highlight'>3D réaliste</span> de plats",
      service3Description:
        "Nous réalisons des modélisations 3D de plats ultra réalistes pour sublimer votre communication visuelle. Offrez à vos clients un aperçu fidèle et attractif des plats proposés sur votre carte, idéal pour les restaurants, dark kitchens ou marques alimentaires. Nos rendus permettent de valoriser chaque détail, d’attirer l’attention et d’augmenter l’envie de commander, sans avoir recours à un shooting photo traditionnel.",
      service3Price: "Modélisation 3D sur devis personnalisé",
    },
    en: {
      title: "Our Services",
      service1Title: "Custom <span className='highlight'>Websites</span> tailored to your needs",
      service1Description:
        "We build modern, responsive, and high-performance websites designed to showcase your brand and engage your audience. Whether you need a landing page, a portfolio, or a full-fledged corporate platform, our team delivers elegant and functional solutions at unmatched value.",
      service1Price: "Websites starting at just <strong>€800</strong>",
      service2Title: "Powerful <span className='highlight'>Mobile Applications</span>",
      service2Description:
        "From concept to launch, we craft sleek and scalable mobile apps for both iOS and Android. Our applications are designed to deliver a smooth user experience, robust performance, and real business results—perfect for startups and growing companies.",
      service2Price: "Mobile apps available from <strong>€1200</strong>",
      service3Title: "Realistic <span className='highlight'>3D Food Modeling</span>",
      service3Description:
        "We create ultra-realistic 3D food models to enhance your visual communication. Give your customers a clear and appealing preview of the dishes on your menu—perfect for restaurants, dark kitchens, and food brands. Our renders highlight every detail, capture attention, and increase the desire to order, without the need for traditional photoshoots.",
      service3Price: "3D modeling available with custom pricing",
    },
  };

  return (
    <div className="services-container">
      <h1 className="services-title-bg">{content[language].title}</h1>

      <section className="service-block" style={{ marginBottom: '100px' }}>
        <div className="service-content">
          <h2 dangerouslySetInnerHTML={{ __html: content[language].service1Title }} />
          <p>{content[language].service1Description}</p>
          <p className="price-note" dangerouslySetInnerHTML={{ __html: content[language].service1Price }} />
        </div>
        <div className="service-image service-image-burger">
          <a href="https://jy-dev-italy.onrender.com/" target="_blank" rel="noopener noreferrer">
            <img src={restaurant} alt="Website Example" />
          </a>
        </div>
      </section>

      <section className="service-block reverse">
        <div className="service-content">
          <h2 dangerouslySetInnerHTML={{ __html: content[language].service2Title }} />
          <p>{content[language].service2Description}</p>
          <p className="price-note" dangerouslySetInnerHTML={{ __html: content[language].service2Price }} />
        </div>
        <div className="service-image service-image-outfy">
          <img src={applicationImage} alt="Mobile App Example" style={{ width: '250px', height: 'auto', objectFit: 'contain' }} />
        </div>
      </section>

      <section className="service-block" style={{ marginBottom: '100px' }}>
        <div className="service-content">
          <h2 dangerouslySetInnerHTML={{ __html: content[language].service3Title }} />
          <p>{content[language].service3Description}</p>
          <p className="price-note" dangerouslySetInnerHTML={{ __html: content[language].service3Price }} />
        </div>
        <div className="service-image2 service-image-plat">
          <img src={ra_image} alt="Website Example" />
          <div className="arrow-right">
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="64" viewBox="0 0 24 24" fill="none">
              <path
                d="M13 5L21 12M21 12L13 19M21 12H3"
                stroke="#AD61FF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13 5L21 12M21 12L13 19M21 12H3"
                stroke="rgba(173, 97, 255, 0.3)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <img src={model3D} alt="Website Example" />
        </div>
      </section>
    </div>
  );
};

export default Services;
