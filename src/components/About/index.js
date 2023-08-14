import React from "react";
import profile from "../../assets/Profile.jpg";
export default function About() {
  return (
    <section id="about-me" className="my-5 intro">
      <div class="flex-row">
        <h1 id="about" className="section-title primary-border">
          About Me
        </h1>
      </div>
      <div className="flex-row">
        <div class="intro-info">
          <div class="intro-img">
            <img src={profile} style={{ width: "100%" }} alt="profile" />
          </div>
          <p>
          I am Shiva Taghizadeh and I work as a web developer. I am a software engineer 
          who loves to create websites as well as apps for people. I think that people 
          should look at the bigger picture when they are building something.          
          </p>
          <p>
          I am a web developer with a vast array of knowledge in many different 
          front end and back end languages, responsive frameworks, databases, 
          and best code practices. My objective is simply to be the best web 
          developer that I can be and to contribute to the technology industry 
          all that I know and can do.
          </p>
        </div>
      </div>
    </section>
  );
}


