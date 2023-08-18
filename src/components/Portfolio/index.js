import React from "react";
import api from "../../assets/API.png";
import calories from "../../assets/Calories & Me.jpg";
import quiz from "../../assets/CodeQuiz.png";
import pet from "../../assets/Pet.jpg";
import weather from "../../assets/Weather-Dashboard.jpg";
import scheduler from "../../assets/Work Scheduler.png";

export default function Portfolio() {
  return (
    <div>
      <section id="work" className="jobs">
        <div className="flex-row">
          <h2 className="section-title secondary-border">Projects</h2>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/ShivaTagh/Social-Network-API">
                {" "}
                <img
                  src={api}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="API"
                />
              </a>
              <div className="job-text">
              <h4>My Social Network API Project</h4>
              <p>
              This is an API for a social network web application 
              where users can share their thoughts, react to friends
              ’ thoughts, and create a friend list.
              </p>
            </div>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://shivatagh.github.io/Homework-Challange-Work-Day-Scheduler/">
                {" "}
                <img
                  src={scheduler}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Work Scheduler"
                />
              </a>
              <div className="job-text">
              <h4>My Work Schedular App</h4>
              <p>
              This work day planner is from 9am to 6pm which interact with the user by
               showing the user the hours that have past , current and future hours. 
               It is able to add the events and save to the local storage.
              </p>
            </div>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://find-your-pet-f291172b2d8b.herokuapp.com/">
                {" "}
                <img
                  src={pet}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Pet"
                />
              </a>
              <div className="job-text">
              <h4>My Pet Finder App</h4>
              <p>
              This website helps the user find and adopt pets from their nearest 
              location by registering an account that can save their preferred 
              pets to adopt.
              </p>
            </div>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://shivatagh.github.io/Weather-Dashboard/">
                {" "}
                <img
                  src={weather}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Weather-Dashboard"
                />
              </a>
              <div className="job-text">
              <h4>My Weather Dashboard App</h4>
              <p>
                This app retrieve weather data for cities and displays the specific 
                parameters of current day and 5 days.
              </p>
            </div>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://shivatagh.github.io/Homework-Challange-CodeQuiz/">
                {" "}
                <img
                  src={quiz}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="CodeQuiz"
                />
              </a>
              <div className="job-text">
              <h4>My Quiz App</h4>
              <p>
              This is a quiz application using HTML, CSS, and Javascript. 
              This application emphasizes the use of Javascript to provide 
              quiz questions and collect user data to determine whether the 
              answers to a question are correct, this then generates a score 
              and appends a final page of results from the user data.
              </p>
            </div>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://bibekmain.github.io/Project-1-G10/">
                {" "}
                <img
                  src={calories}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Calories & Me"
                />
              </a>
              <div className="job-text">
              <h4>My Calories Tracker App</h4>
              <p>
                This website browse and retrieve the nutritional information 
                and brand of any food or meal searched. Serch for restaurant 
                items, fast foods and package foods.
              </p>
            </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


