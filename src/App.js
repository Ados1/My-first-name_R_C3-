import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <div className="App">
        <h1>EMMANUEL KARTEY ADODOADJIE- FRONT-END DEVELOPER</h1>
        <h2> SKILLS</h2>
      </div>

      <ul className="skills">
        <li>Project management</li>
        <li>HTML 5</li>
        <li>CSS 3</li>
        <li>Node JS</li>
        <li>React JS</li>
        <li>JavaScript</li>
      </ul>

      <div className="App">
        <h2>Experience</h2>
      </div>
      <div>
        <h3>SOFTWARE DEVELOPER (INTERN) REMOTE</h3>
        <h4>07/2023 FIVSYS Karnataka, India</h4>
        <ul className="skills">
          <li>
            Designed and developed Chatbots using Python and the OpenAI API to
            provide conversational solutions for customer queries, resulting in
            a 30% reduction in customer support response time.{" "}
          </li>
          <li>
            Collaborated with cross-functional teams of 3 members which include
            2 UI/UX designers and 1 product manager, to gather requirements and
            deliver Chatbot solutions that align with business goals.{" "}
          </li>
          <li>
            Implemented the Chatbot backend using Flask, creating efficient and
            scalable server-side logic to handle more than 50 user interactions
            and AI-driven responses.{" "}
          </li>
          <li>
            Developed interactive user interfaces for 5 Chatbots using
            JavaScript, HTML, and CSS, enhancing user engagement and providing a
            seamless conversational experience.{" "}
          </li>
        </ul>

        <h3>Project Manager Tegs Construction Limited </h3>
        <h4>10/2017 to 07/2022 Tema, Ghana</h4>
        <ul className="skills">
          <li>
            Focused on project monitoring and management by developing forecasts
            and tracking expenses.{" "}
          </li>
          <li>
            Facilitated productive meetings that led to a 10% reduction in
            project bottlenecks and a 20% increase in information exchange
            efficiency, resulting in accelerated project timelines.{" "}
          </li>
          <li>
            Devised comprehensive project plans with well-defined timelines,
            strategically allocated tasks to respective teams, and oversaw
            workflow throughout the construction phase, resulting in an average
            project completion 20% ahead of schedule.{" "}
          </li>
          <li>
            Assessed and adjusted project scope and cost, implementing highly
            efficient change management processes that resulted in a 10%
            reduction in scope creep.{" "}
          </li>
        </ul>
      </div>
      <div>
        <h3>EDUCATION AND TRAINING</h3>
        <p>CERTIFICATE: Front end Developer 04/2023 Azubi Africa</p>
        <p>
          Bachelor of Science: Building Technology 06/2016 Kwame Nkrumah
          University of Science and Technology
        </p>
        <p>AWS Cloud Practitioner (Self-Taught) </p>{" "}
        <a
          href="https://www.credly.com/badges/31d18313-ec38-4527-9923-bf6409d622b1/public_url"
          target="blank"
          title=" AWS credentials"
        >
          See credentials here
        </a>
      </div>
    </div>
  );
}

export default App;
