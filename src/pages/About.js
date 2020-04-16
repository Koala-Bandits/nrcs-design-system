import React from "react";
import { ContentHeaderH1 } from "components/text/ContentHeader";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <ContentHeaderH1>NRCS Design System</ContentHeaderH1>

        <p class="lead">
          <span className="text-danger">
            ** BETA: CURRENTLY UNDER DEVELOPMENT AND INCOMPLETE **
          </span>
        </p>
        <p class="lead">
          <strong>A design system produced for our partners at NRCS.</strong>
        </p>

        <p>
          An adaptation of the{" "}
          <strong>
            <a
              href="http://usda-fsa.github.io/fsa-design-system/"
              target="_blank"
              rel="nopener noreferrer"
            >
              FPAC Design System
            </a>
          </strong>{" "}
          and its inherent roots from the{" "}
          <strong>
            <a
              href="https://designsystem.digital.gov/"
              target="_blank"
              rel="nopener noreferrer"
            >
              U.S. Web Design System.
            </a>
          </strong>
        </p>
        <p>
          A resource with specifics and expanded documentation meant as a
          compliment to the FPAC Design System documentation, all to support the
          current needs of coordinated efforts building apps at NRCS.
        </p>
        <p>
          If you are working on a project with FPAC or its related agencies, it
          is suggested you consider starting with the FPAC design system first.
        </p>
        <ul>
          <li>
            Designed with clean simple styles, high color contrast for
            accessibilty, and to provide solutions for large scale applications.
          </li>
          <li>
            Provides color, typography, iconography, components and examples
            with documentation for how to use them.
          </li>
          <li>
            The intent is to provide a solution for our development teams to
            converge upon for consistent implementation in design and style.
          </li>
          <li>
            Provides a complete scalable UI component library. It covers
            implementations of most all FPAC components, a few others provided
            by Reactstrap, as well as some custom complex components.
          </li>
          <li>
            This site is built with React, StoryBook, using{" "}
            <strong>
              <a
                href="https://reactstrap.github.io/"
                target="_blank"
                rel="nopener noreferrer"
              >
                ReactStrap
              </a>
            </strong>
            . The{" "}
            <strong>
              <a
                href="https://github.com/Koala-Bandits/nrcs-design-system"
                target="_blank"
                rel="nopener noreferrer"
              >
                source
              </a>
            </strong>{" "}
            for this project can serve as an example implementation and
            application skeleton.
          </li>
        </ul>
      </div>
    );
  }
}

export default About;
