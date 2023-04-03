import React from "react";

import { Helmet } from "react-helmet";

import Navigation from "../components/navigation/index";
import SpeakerCard from "../components/speaker-card/index";
import NumbersCard from "../components/numbers-card/index";
import EventCard from "../components/event-card/index";
import Slide from "../components/slide/index";
import Footer from "../components/footer/index";
import "./home.css";
import Hero from "../components/hero";
import Sponsors from "../components/sponsors";
import Speakers from "../components/speakers";
import Agenda from "../components/agenda";
import Workshops from "../components/workshops";
import Location from "../components/location";
import Number from "../components/numbers";

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Marketing event page</title>
        <meta property="og:title" content="Marketing event page" />
      </Helmet>
      <Navigation></Navigation>
      <main className="home-main">
        <div className="home-hero section-container">
          <Hero />
          <div className="home-blue-background"></div>
        </div>
        <div className="home-sponsors section-container">
          <Sponsors />
        </div>
        <div className="home-speakers section-container">
          <Speakers />
        </div>
        <div className="home-numbers-banner section-container">
          <Number />
        </div>
        <Location />
        <div className="home-agenda section-container">
          <Agenda />
        </div>
        <div className="home-workshops">
          <Workshops />
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxidXNpbmVzc3xlbnwwfHx8fDE2NDM3MzQ3MjI&amp;ixlib=rb-1.2.1&amp;w=1500"
            className="home-image7"
          />
        </div>
        <div className="home-previous-events section-container">
          <div className="home-max-width4 max-content-container">
            <div className="home-heading-container3">
              <h1 className="home-text49 heading2">
                <span>previous events</span>
              </h1>
              <span className="home-text51">
                Take a tour of our previous conferences
              </span>
            </div>
          </div>
          <div data-type="slider" className="home-slider">
            <Slide rootClassName="slide-root-class-name4"></Slide>
            <Slide
              heading="Slide #2"
              rootClassName="slide-root-class-name1"
            ></Slide>
            <Slide
              heading="Slide #3"
              rootClassName="slide-root-class-name"
            ></Slide>
            <Slide
              heading="Slide #4"
              rootClassName="slide-root-class-name3"
            ></Slide>
            <Slide
              heading="Slide #5"
              rootClassName="slide-root-class-name2"
            ></Slide>
          </div>
          <div className="home-slider-controls">
            <div data-action="previousSlide" className="home-go-left">
              <svg viewBox="0 0 1024 1024" className="home-icon">
                <path d="M250 176l92-90 426 426-426 426-92-90 338-336z"></path>
              </svg>
            </div>
            <div data-action="nextSlide" className="home-go-right">
              <svg viewBox="0 0 1024 1024" className="home-icon2">
                <path d="M250 176l92-90 426 426-426 426-92-90 338-336z"></path>
              </svg>
            </div>
          </div>
        </div>
      </main>
      <Footer rootClassName="footer-root-class-name"></Footer>
    </div>
  );
};

export default Home;
