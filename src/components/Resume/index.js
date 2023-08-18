import React from "react";
import myResume from "../../assets/Resume.jpg";
import { BsCloudDownload } from "react-icons/bs";
import { GrTechnology } from "react-icons/gr";
import { FaBeer } from 'react-icons/fa'

export default function Resume() {
  return (
    <div>
      <section id="welcome-section" className="download-intro">
        <div className="flex-row">
          <h2 className="section-title primary-border">My Resume</h2>
        </div>
        <div className="flex-row">
          <div className="download-info">
            <div className="download-text">
              <a href={myResume} className="download-logo" download>
                <BsCloudDownload />
              </a>
              <p>
                Please download my resume.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* // This is the resume language */}
      <section id="home-page-body" className="resume-body">
        <div className="article column1">
          {/* <p><img src="./assets/images/streamline-icon-ai-robot-waiter@48x48.PNG"></p> */}

          <p className="column-title">Coding Skills</p>
          <p className="column-text">
            <ul>
              <li className="logo">
                <GrTechnology />
              </li>
              <li>Node.Js</li>
              <li>Express.js</li>
              <li>MySQL</li>
              <li>Sequelize</li>
              <li>Object-Relational Mapping(ORM)</li><li>HTML5</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>APIs</li>
              <li>Bootstrap</li>
              <li>NoSQL</li>
              <li>Progressive Web Applications (PWA)</li>
              <li>MongoDB</li>
              <li>Mongoose</li>
              <li>GraphQL</li>
              <li>React</li>
              <li>MERN</li>
            </ul>
          </p>
          <p className="column-title">My proficiencies</p>
          <p className="column-text">
            <ul>
              <li>Leadership/Management experience</li>
              <li>Troubleshooting</li>
              <li>SQL and Python Programming</li>
              <li>Budgeting</li>
              <li>Full Stack Web Development</li>
              <li>Network design</li>
              <li>Quality Assurance</li>
              <li>Interiot Design</li>
              <li>Technical Writting</li>
              <li>Engineering Management</li>
            </ul>
            </p>
          </div>
        
      </section>
    </div>
  );
}

