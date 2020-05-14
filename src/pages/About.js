import React from "react";
import { ContentHeaderH1 } from "components/text/ContentHeader";
import { Alert } from "components/feedback/alerts/Alert";
import { AlertMessage } from "components/feedback/messages/AlertMessage";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <ContentHeaderH1>NRCS Design System</ContentHeaderH1>
        <Alert color="warning">
          Warning: currently under development and incomplete.
        </Alert>
        <p className="lead">
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

        <h3>NRCS Adaptation</h3>
        <p>
          Several of our projects are large GIS applications or complex process
          management systems. NRCS had need for a design system with dedicated
          choices in components, additional complex components, and integrated
          iconography together.
        </p>
        <p>
          Since many of our teams and projects currently use Bootstrap in some
          way or with React/Reactrap and already have established UI component
          libraries, it made sense to align our current styles and components to
          FPAC in the form of this NRCS Design System.
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
            Provides a scalable UI component library. It covers implementations
            of most all FPAC components, a few others provided by Reactstrap, as
            well as some custom complex components.
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
