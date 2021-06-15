import React from "react";
import "./Websites.scss";
// import Resources from "../../Resources.json";

function Websites() {
  return (
    <div id="websites__section">
      <h1 className="section-title">Front-End Development</h1>
      <section className="websites__section-card-container">
        <card className="websites__section-card">
          <img src="https://via.placeholder.com/100x100" alt="placeholder" />
          <h5>Vue</h5>
        </card>
        <card className="websites__section-card">
          <img src="https://via.placeholder.com/100x100" alt="placeholder" />
          <h5>React</h5>
        </card>
        <card className="websites__section-card">
          <img src="https://via.placeholder.com/100x100" alt="placeholder" />
          <h5>Angular</h5>
        </card>
      </section>
    </div>
  );
}

export default Websites;
