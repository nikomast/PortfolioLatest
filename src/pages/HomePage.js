import React, { useEffect } from "react";
import Display from "../components/Display/Display";
import LoanCalculator from "../projects/LoanCalculator/LoanCalculator";
import Pong from "../projects/Pong/Pong";
import Calculator from "../projects/DeliveryFeeCalculator/DeliveryFeeCalc";
import Slideshow from "../components/Slideshow/Slideshow"; 
import "../styles/style.css";
import CalculatorImage from "../styles/img/LoanCalculatorImage.jpg";
import LoginImage from "../styles/img/LoginSystemImage.png";
import GameClip from "../styles/img/GameClip.gif";
import AOS from "aos";
import "aos/dist/aos.css";

const HomePage = () => {
  const projects = [
    <Calculator />,
    <LoanCalculator />,
    <Pong />,
  ];
  

  useEffect(() => {
    AOS.init({
      duration: 9000,
      once: false,
    });
    
  }, []);

  return (
    <div>
      <div className="projects-container">
        <Display
          title="About This Website"
          description={
            <div>
              <p>
                Heres a simple portfolio website blending functionality
                with creativity. Built with a React front-end and hosted by Google firebase, this site highlights a unique mix of interactive tools
                and showcases diverse projects. <p>I have also worked on projects like these: <a href="https://app.sportapp.io/home">Sportapp</a> &  <a href="https://www.pesistulokset.fi/etusivu">Pesistulokset</a></p>
              </p>
              <h3>Key Features:</h3>
              <ul>
              <li>
                <b>Project Showcase:</b> Explore a variety of example projects, each
                  detailed with technologies used, reflecting a wide-ranging
                  skill set from desing, modeling and production.<p></p>     
                </li>
                <li>
                  <b>Loan Calculator:</b> Effortlessly calculate loan
                  repayment schedules and interest costs. Results are visually
                  displayed through charts. <p>I made an app based on this, more from that later. The component on this page was the concept for the app.</p>
                </li>
                <li>
                  <b>Interactive Pong Game:</b> Enjoy a classic game reimagined
                  for the modern web. One if my first projects purpose was to make something interactive for this page. <p>(Use the right mouse button or touchscreen to play)</p>
                </li>
                {/*
                <li>
                  <b>Contact Form:</b> Engage easily through a secure, React
                  and Django-powered contact form with Google reCAPTCHA.
                </li>
                 */ }
                <li>
                  <b>Delivery Distance Calculator:</b> Made as a part of Wolt
                  apprenticeship application. It calculates food delivery price
                  based on a set of logical rules. This one is quite simple as a model but the procedure is solid. 
                </li>
              </ul>
            </div>
          }
          imageUrl={CalculatorImage}
        />

        <Display
          title="Personal finance manager"
          description={
            <div>
              <p>
              This app was created for personal use as a vacation project. I was tired of doing budget analyses on the back of an envelope—mostly because it was always so hard to find a pen.
              <p>This app provides an easy way to check your budget and keep track of your incomes, expenses, and loan statuses.</p>
              It offers tools to help you visualize your loans over time and provides information about the true cost of a loan relative to the payment plan you choose.
              <p>The Budget page serves as "the envelope," but as long as you remember your email and password, you’ll never lose it.</p>
              </p>
              <a href="https://loan-managment-app.web.app/#/login">Take a look</a>
            </div>
          }
          imageUrl={LoginImage}
        />
      <Slideshow>
        {projects}
      </Slideshow>
        <Display
          title="Mobile Game"
          description={
            <div>
              <p>
                Embark on a simple interstellar adventure with our Unity-based
                Space Shooter game. Steer your spaceship through a treacherous
                asteroid field, where quick reflexes and sharpshooting are your
                keys to survival. This engaging game challenges players to
                navigate and outmaneuver a relentless barrage of asteroids. With
                intuitive controls designed for both casual and avid gamers, you
                can blast through obstacles with precision. Every level ups the
                ante, providing an exhilarating experience that tests both your
                dexterity and your strategic thinking. Created for thrill-seekers
                and sci-fi enthusiasts alike, this game transforms a simple
                concept into an addictive cosmic journey. <p>This version is working concept.</p>
              </p>
            </div>
          }
          imageUrl={GameClip}
        />
      </div>
    </div>
  );
};

export default HomePage;
