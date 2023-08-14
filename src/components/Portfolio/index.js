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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


