import React, {useEffect}from "react";
import Project from "../projects/Project";
import Pong from '../projects/Pong';
import Calculator from "../projects/DeliveryFeeCalc";
import LoanCalculator from '../projects/LoanCalculator';
import '../styles/style.css';
import CalculatorImage from '../styles/img/LoanCalculatorImage.jpg';
import LoginImage from '../styles/img/LoginSystemImage.jpg';
import GameClip from '../styles/img/GameClip.gif';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomePage = () => {
    useEffect(() => {
        AOS.init({
            duration: 9000,
            once: false,
        });
    }, []);
      

    return (
        <div>
         <div className="projects-container">
            <Project 
        title="About This Website"
       description={
        <div>
            <p>Discover a multifaceted portfolio website blending functionality with innovation.
               Built with a React front-end and Django back-end, this site highlights a unique mix 
               of interactive tools and showcases diverse projects.</p>
            <h3>Key Features:</h3>
            <ul>
                <li><b>Loan Calculator App:</b> Effortlessly calculate loan repayment schedules and 
                    interest costs. Results are visually displayed through charts hosted on an 
                    Nginx server.</li>
                <li><b>Interactive Pong Game:</b> Enjoy a classic game reimagined for the modern 
                    web.</li>
                <li><b>Project Showcase:</b> Explore a variety of projects, each detailed with 
                    technologies used, reflecting a wide-ranging skill set.</li>
                <li><b>Contact Form:</b> Engage easily through a secure, React and Django-powered 
                    contact form with Google reCAPTCHA.</li>
                <li><b> Delivery distance calculator:</b> Made as a part of Wolt apprenticeship application. It calculates food delivery price based on a set of logical rules. </li>
                 <li><b>Cloud and Containerization:</b> Used to run this site. Leveraging the power of Google Cloud for hosting and Docker for containerization,
                 the website epitomizes modern deployment practices, ensuring scalability and efficiency.</li>
            </ul>
        </div>
            }
        imageUrl={CalculatorImage}
            />
            <div className="project">
                <LoanCalculator />
            </div>
            <div className="project">
            <Pong />
            </div>
            <div className="project">
                <Calculator />
            </div>
            <Project 
                title="Web And Mobile App"
                description={<di><p>Explore the seamless integration of our dual-role login system, available through both a dynamic web application and a companion Android app (app still in production).
                Built with Django and React, this system differentiates user experiences based on subscription status, offering tailored access to content for both paid and free users.
                The Android extension ensures on-the-go access with additional appointment scheduling features, reflecting our dedication to a comprehensive and cohesive user experience.</p> <a href="https://logindemo-pcvcxm53jq-lz.a.run.app/">Take A Look</a> </di>}
                imageUrl={LoginImage}
            />
            <Project 
                title="Mobile Game"
                description={<div> <p>Embark on an simple interstellar adventure with our Unity-based Space Shooter game.
                Steer your spaceship through a treacherous asteroid field, where quick reflexes and sharpshooting are your keys to survival.
                 This engaging game challenges players to navigate and outmaneuver a relentless barrage of asteroids. With intuitive controls designed for both casual and avid gamers, you can blast through obstacles with precision.
               Every level ups the ante, providing an exhilarating experience that tests both your dexterity and your strategic thinking.
                Created for thrill-seekers and sci-fi enthusiasts alike, this game transforms a simple concept into an addictive cosmic journey. Publishing proccess is ongoing.</p></div>}
                imageUrl={GameClip}
            />
        </div>
        </div>
    );
};

export default HomePage;
