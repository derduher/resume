import React from "react";
import styled from "styled-components";

const Body = styled.div`
  position: relative;
  padding: 1rem;
  main {
    display: grid;
    grid-template-areas: "primary" "side";
    grid-gap: 1rem;
    @media screen and (min-width: 768px) {
      grid-template-columns: 2fr 10fr;
      grid-template-areas: "side primary";
    }
  }
  aside {
    grid-area: side;
    ul {
      margin: 0;
      padding: 0;
    }
    li {
      list-style-type: none;
    }
  }
  .primary {
    grid-area: primary;
  }
`;

const Header = styled.header`
  text-align: right;
`;

function App() {
  return (
    <Body>
      <Header>
        <h1 className="name">Patrick Joel Weygand</h1>
        <h2 className="title">Frontend Engineer</h2>
      </Header>
      <main>
        <aside>
          <section>
            <address className="contact">
              <div>8527 Pickford Street, Los Angeles</div>
              <div>California 90035</div>
              <div>patrick.weygand@gmail.com</div>
              <div>
                <a href="https://github.com/derduher/">github.com/derduher</a>
              </div>
            </address>
          </section>
          <section>
            <h2>Skills</h2>
            <ul>
              <li>Javascript</li>
              <li>Typscript</li>
              <li>Linux</li>
              <li></li>
              <li>React</li>
              <li>Redux</li>
              <li>Graphql</li>
              <li>Webpack</li>
              <li>styled components</li>
              <li>cypress</li>
              <li>webdriver</li>
              <li>docker</li>
              <li>node</li>
              <li>Page load optimization</li>
              <li>unit testing</li>
              <li>continuous integration</li>
            </ul>
          </section>
          <section>
            <h2>Education</h2>
            <div className="education">
              <h3>Computer Science, Bachelor of Science</h3>
              Institute of Technology (formerly)
              <br />
              Univeristy of Minnesota Twin Cities
              <br />
              <time dateTime="2009-05" className="time">
                May 2009
              </time>
            </div>
          </section>
          <section>
            <h2>Side Projects</h2>
            <ul>
              <li>
                Maintainer of the most popular sitemap xml generating library +
                cli
              </li>
              <li>Blaster: an Asteroids clone</li>
            </ul>
          </section>
          <section>
            <h2>Interested In Learning</h2>
            <ul>
              <li>Cloud Provider and Devops Tools (AWS, Google)</li>
              <li>Leadership Skills</li>
            </ul>
          </section>
          <section>
            <h2>Personality / Fun Fluff</h2>
            <div className="fluff">
              <p>
                I’m a huge nerd. I just finished reading Network Effect, the
                latest book in a series about a sentient security robot that
                watches trashy television in its off time.
              </p>
              <p>
                I am also into video/board games. My current favorites are
                Factorio and Shipwreck Arcana.
              </p>
            </div>
          </section>
        </aside>
        <div className="primary">
          <section>
            <h2>Objective</h2>
            <p>
              To build quality web applications that people love. To act as a
              servant leader to a smart team of positive people passionate about
              what they do.
            </p>
          </section>
          <section>
            <h2>Work Experience</h2>
            <section className="position">
              <h3>Sr. Software Engineer, Web</h3>
              <div className="details">
                Fender, Hollywood CA, <time dateTime="2019-06">Jun 2019</time> -{" "}
                <time dateTime="2020-05-15">May 2020</time>
              </div>
              <p>
                With Fender I worked as a part of the both the feature and
                acquisition squads. I worked with the devops, data, design, and
                marketing teams to deliver various projects. I :
              </p>
              <ul>
                <li>
                  Led conversion from a bi-weekly release process to a
                  continuous integration (CI) process
                </li>
                <li>Led conversion to Segment.io’s Typewriter</li>
                <li>
                  Led conversion to Create-React-App from a custom build
                  framework
                </li>
                <li>Rebuilt their entire single sign-on site</li>
                <li>Created a brand new cancellation flow from scratch</li>
                <li>Rebuilt their CI pipeline to run tasks in parallel. </li>
                <li>
                  In times of crisis, I regularly was the point person resolving
                  outages in a timely manner either myself or by guiding
                  teammates in the safest most expedient manner to resolve the
                  current situation.{" "}
                </li>
                <li>
                  Regularly paired with teammates to help them get around a
                  technical hurdle they were stuck on.{" "}
                </li>
                <li>
                  Received the Most Valuable Player award on at least 5 separate
                  occasions.
                </li>
              </ul>
            </section>
            <section className="position">
              <h3>Principal User Interface Engineer</h3>
              <div className="details">
                RingDNA, Sherman Oaks CA,{" "}
                <time dateTime="2019-01">Jan 2019</time> -{" "}
                <time dateTime="2019-05">May 2019</time>
              </div>
              <p>
                In my brief stint at RingDNA I rebuilt their build system and
                managed an external contracting group building their mobile app.
                I also coached them on improving their QA process.
              </p>
            </section>
            <section className="position">
              <h3>Sr. Frontend Engineer</h3>
              <div className="details">
                Fullscreen, Los Angeles CA,{" "}
                <time dateTime="2015-09">Sep 2015</time> -{" "}
                <time dateTime="2018-12-03">Dec 2018</time>
              </div>
              <ul>
                <li>Built Rooster Teeth's Community platform. </li>
                <li>
                  When there was a need to have someone step in and take charge,
                  I acted as a servant leader, supporting the product owners by
                  turning feedback from stakeholders into actionable items.{" "}
                </li>
                <li>
                  Provided technical guidance on scope and scale of work, to
                  help in prioritizing and defining features.
                </li>
                <li>
                  Spent two years on Fullscreen’s SVOD service built in angular
                </li>
                <li>
                  Six months reducing page and video load times from 8 to 4
                  seconds and 7.5 and 2 seconds respectively
                </li>
                <li>
                  Built Real User Metrics service using built-in browser tools
                  and Datadog as an aggregator
                </li>
                <li>
                  Rebuilt large portions of our REST backend as a GraphQL
                  service
                </li>
                <li>Built a headless end-to-end docker test environment. </li>
                <li>Converted a large codebase from CoffeeScript to es6.</li>
              </ul>
            </section>
            <section className="position">
              <h3>Sr. UI Engineer</h3>
              <div className="details">
                Ubiquiti, Los Angeles CA,{" "}
                <time dateTime="2012-10">Oct 2012</time> -{" "}
                <time dateTime="2015-07">Jul 2015</time>
              </div>
              <p>
                My work at Ubiquiti centered on Single Page Applications, though
                I branched a bit into backend work, DevOps, UX work, and quite a
                bit into API design.
              </p>
              <ul>
                <li>
                  Led a team of 8, composed mostly of new developers, to launch
                  an MVP for Customer Relations Management software and
                  delivered in 3 months with 100% unit test coverage.
                </li>
                <li>
                  In my role as lead, I worked to refine requirements to be
                  acceptable and accomplishable.
                </li>
                <li>
                  Developer and maintainer of UI for our Single Sign-On service,
                  verifying and responding to any and all security issues.{" "}
                </li>
                <li>
                  Designed the protocol, core dispatcher and action queue for
                  our first WebSocket communications API at the company.{" "}
                </li>
                <li>
                  Worked with DevOps to get a continuous integration pipeline
                  setup for our team.{" "}
                </li>
                <li>
                  Coached our team on Github flow, code reviews, and unit tests.{" "}
                </li>
                <li>Primary designer of RESTful APIs at the company. </li>
                <li>
                  Optimized page load performance/built-in basic security, by
                  building an Ansible role for Nginx that the entire company
                  could use.
                </li>
              </ul>
            </section>
            <section className="position">
              <h3>Software Engineer</h3>
              <div className="details">
                Gorilla Nation (Evolve Media Corp), Los Angeles CA,{" "}
                <time dateTime="2011-01">Jan 2011</time> -{" "}
                <time dateTime="2012-09">Sep 2012</time>
              </div>
              <p>
                I designed and built out publisher management platform working
                with business stakeholders to create a user experience optimized
                for users’ workflow and needs. Technologies used to enhance the
                experience include Backbone.js for an instant and flexible UI,
                HTML 5 input validation for frustration-free forms, and HTML 5
                boilerplate for fast page loads. I built Flash-less JavaScript
                ad unit called “the Sliver,” a highly customizable and remotely
                configurable buildable product. The Sliver is cross-browser and
                mobile friendly, weighing in at 8kb gzipped/minified.  I built
                ORM interface (datasource) for Cake 2.X to Google’s DFP API
                Service.
              </p>
            </section>
            <section className="position">
              <h3>QA Engineer</h3>
              <div className="details">
                Pricegrabber.com, Los Angeles CA,{" "}
                <time dateTime="2009-06">Jun 2009</time> -{" "}
                <time dateTime="2010-12">Dec 2010</time>
              </div>
              <p>
                I designed and developed tools for the QA department to
                strengthen test coverage, shorten the time taken to run tests,
                and make the testing process easier. I enhanced an existing XML
                API tool with schema validation using jQuery, xmllint, CSS,
                HTML, JavaScript and PHP. I developed and maintained subversion
                tools written in Perl as well as  served as a backup release
                manager, building Release Candidates and pushing them to live
                servers.
              </p>
            </section>
          </section>
        </div>
      </main>
    </Body>
  );
}

export default App;
