import React from "react";
import {
  ContentHeaderH1,
  ContentHeaderH2
} from "components/text/ContentHeader";

export default {
  title: "Design System|About"
};

export const AboutStory = () => (
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
          U.S. Web Design System
        </a>
      </strong>
    </p>
    <p>
      A resource with specifics and expanded documentation meant as a compliment
      to the FPAC Design System documentation, all to support current needs of
      coordination efforts at NRCS.
    </p>
    <p>
      If you are working on a project with FPAC or its related agencies, it is
      suggested you consider starting FPAC design system first.
    </p>
    <ul>
      <li>
        Designed with clean simple styles, high color contrast for accessibilty,
        and to provide solutions for large scale applications.
      </li>
      <li>
        Provides color, typography, iconography, components and examples with
        documentation for how to use them.
      </li>
      <li>
        The intent is to provide a solution for our development teams to
        converge upon for consistent implementation in design and style.
      </li>
      <li>
        The NRCS Design System is based on a custom{" "}
        <strong>
          <a
            href="https://getbootstrap.com/docs/4.4/getting-started/introduction/"
            target="_blank"
            rel="nopener noreferrer"
          >
            Bootstrap
          </a>
        </strong>{" "}
        theme. Therefore all users can refer to Bootstrap documentation for{" "}
        <strong>
          <a
            href="https://getbootstrap.com/docs/4.4/components/"
            target="_blank"
            rel="nopener noreferrer"
          >
            component styles
          </a>
        </strong>
        ,{" "}
        <strong>
          <a
            href="https://getbootstrap.com/docs/4.4/layout/overview/"
            target="_blank"
            rel="nopener noreferrer"
          >
            layouts
          </a>
        </strong>
        , and{" "}
        <strong>
          <a
            href="https://getbootstrap.com/docs/4.4/utilities/"
            target="_blank"
            rel="nopener noreferrer"
          >
            utilities
          </a>
        </strong>
        . It's recommended that all styles are done through Bootstrap clasess
        and keep hand-written CSS to a minimum.
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
        for this project can serve as an example implementation and start to
        components.
      </li>
    </ul>
  </div>
);
