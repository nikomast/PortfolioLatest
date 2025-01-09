import React, { useEffect } from "react";
import Display from "../components/Display/Display";
import LoanCalculator from "../projects/LoanCalculator/LoanCalculator";
import Pong from "../projects/Pong/Pong";
import Calculator from "../projects/DeliveryFeeCalculator/DeliveryFeeCalc";
import Slideshow from "../components/Slideshow/Slideshow"; 
import "../styles/style.css";
import CalculatorImage from "../styles/img/LoanCalculatorImage.jpg";
import LoginImage from "../styles/img/LoginSystemImage.png";
import possessionTracker from "../styles/img/possessionTracker(2).png";
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
                <p>In these projects and others for the same company i worked with Javascript and Php/Laravel. Building functionalitys of apps for clients.</p> 
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
                </li><p></p>
                <li>
                <b>Possession tracker:</b> Made from an idea. Probably most complex of the projects that i have made by my self. 
                  The Possession Tracker app allows users to log possession events in real-time, providing detailed statistics and visualizations. 
                  Users can track metrics such as possession duration, turnovers, and scoring opportunities. 
                  The app supports multiple sports and can be customized to fit specific game rules and requirements.
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
            <p>This app was created for personal use as a vacation project in just 4 days. I was tired of doing budget analyses on the back of an envelope—mostly because it was always so hard to find a pen.</p>
            
            <p>The app provides an easy way to check your budget and keep track of your income, expenses, and loan statuses. It offers tools to help you visualize your loans over time and provides insights into the true cost of a loan relative to the payment plan you choose.</p>
            
            <p>The Budget page serves as "the envelope," but as long as you remember your email and password, you’ll never lose it.</p>
            
            <p>Key things I gained from creating this app include a deeper understanding of React, as well as my first experience using Google Firebase for hosting, user authentication, and as a database.</p>
            
            <p>In essence, this app takes input from the user, manipulates it, and saves it to the database. The data is then displayed on the app using Chart.js. Budgeting calculations are simple but effective and are primarily handled on the front end because this app doesn't have a separate backend.</p>
            
            <p>Loan calculations are slightly more complex than the budgeting features, but they are still implemented on the front end. If I were to further develop this app, the first improvement I’d address would be to move the loan calculations to a backend for better scalability.</p>
            
            <p>Loan payback rates can be calculated in several ways. The simplest method is to make the minimum payment every month until the loan(s) are fully paid off. Another approach is the waterfall method, where the algorithm allocates a fixed monthly amount toward paying loans, starting with the loan that has the highest interest rate, until all loans are cleared.</p>
            
            <p>A third option allows the user to input their own monthly budget, and the algorithm uses that to calculate how long it will take to pay off all loans. In both the waterfall and user-input methods, the payback order always prioritizes the loan with the highest interest.</p>
            
            <a href="https://loan-managment-app.web.app/#/login">Take a look</a>
          </div>

          }
          imageUrl={LoginImage}
        />
      <Slideshow>
        {projects}
      </Slideshow>
      <Display
          title="Possession Tracker"
          description={
          <div>
            <p>
              Dive into the world of sports analytics with our advanced Possession Tracker app. 
              Designed for coaches, analysts, and enthusiasts, this tool allows users to track and analyze ball or puck possession during games with precision. 
              The app features an interactive grid-based interface to log possession actions, including gains, losses, shots, and goals.
            </p>
            
            <p>
              Logged-in users benefit from secure data storage and comprehensive insights, such as possession efficiency and shot conversion rates. 
              Guest users can explore temporary session-based analysis. Built with React and Django, the app combines sleek front-end functionality with robust back-end processing.
            </p>
            
            <p>This version is a working prototype, showcasing core functionality and a vision for deeper game insights.</p>
            
            <p>
              This project was born from a somewhat abstract idea that I gradually brought to life step by step. 
              I made plenty of mistakes along the way and, while I'm not entirely satisfied with the project's structure, it has been an interesting experience with many learning opportunities and interesting problems. 
            </p>
            
            <p>
              The back end is primarily used as a database and for user authentication. It is hosted on Google Cloud Run in a Docker container, which is my favorite hosting method for back ends due to its simplicity, speed of deployment, and reliability. The front end is hosted on Google Firebase. 
              I started building this project from the front end, and that approach worked initially but at the end im not completely satisfied with the result because there might be too many actions made in the front end but as a demo its really good. 
              The project evolved to include components that aim to be as simple as possible despite the underlying complexity that comes from my vision that the app needs to be testable by anyone and still have the ability to be used by a regular user or a user that has an account and records games regularly.
              All calculations, data manipulation, and temporary storage are currently handled on the front end—something I would approach differently if I started again, by leveraging the back end more for these tasks.
            </p>

            <p>
              In hindsight, I would send the data to the back end as soon as it is recorded, handle all manipulation on the server side, and then save the results. This change would make the system more scalable and efficient. 
              One could say I learned a lot with this project. The database structure is as follows: a user has teams and series. A team belongs to a series, and each series has matches that contain actions. These actions are recorded as the main purpose of the app. 
              Additionally, users can review past match actions, and in the future, there will be functionality to generate predictions based on historical data.
            </p>
            
            <a href="https://possession-tracker-dce8c.web.app/">Take a look</a>
          </div>

          }
          imageUrl={possessionTracker}
        />

        <Display
          title="Mobile Game"
          description={
<div>
  <p>
    Embark on a simple interstellar adventure with our Unity-based Space Shooter game. Steer your spaceship through a treacherous asteroid field, where quick reflexes and sharpshooting are your keys to survival. This engaging game challenges players to navigate and outmaneuver a relentless barrage of asteroids. With intuitive controls designed for both casual and avid gamers, you can blast through obstacles with precision. Every level ups the ante, providing an exhilarating experience that tests both your dexterity and your strategic thinking. Created for thrill-seekers and sci-fi enthusiasts alike, this game transforms a simple concept into an addictive cosmic journey.
  </p>
  <p>
    This project was something I had always wanted to do while studying but never found the time for—until now. I’ve created a prototype of the game I had envisioned. The game includes all the essentials to make it functional: logic, graphics, and sound. There’s a menu for starting the game, a joystick for controlling the ship, a button for shooting, and, of course, asteroids to shoot at. The asteroids increase in speed as time passes, making the gameplay more challenging. That’s it—simple yet complete. While I’m not deeply interested in game development, this project taught me how to use Unity to build something that works effectively.
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
