import React from "react";
import Nav from "../Nav";

export default function Header(props) {
  const { currentTab, handleTabChange } = props;

  return (
    <div>
      <section>
        <header className="flex-row px-1">
          <div>
          <h1>Shiva Taghizdeh</h1>
          </div>
          <div>
            <Nav
              currentTab={currentTab}
              handleTabChange={handleTabChange}
            ></Nav>
          </div>
        </header>
      </section>
      <section className="hero">
        <div className="hero-cta">
        
          <h2>Welcome</h2>
          <p>
            Welcome to my portfolio page built with React. Here,
            you can find a small sample of the projects i worked on over
            the Berkley full stack coding bootcamp.
          </p>
        </div>
      </section>
    </div>
  );
}

