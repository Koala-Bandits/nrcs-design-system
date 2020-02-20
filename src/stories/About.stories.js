import React from "react";

export default {
  title: "Design System|About"
};

export const About = () => (
  <div>
    <h1>NRCS Design System</h1>

    <p>
      <span className="text-danger">
        ** BETA: CURRENTLY UNDER DEVELOPMENT AND INCOMPLETE **
      </span>
    </p>

    <p>
      <strong>
        A design system using{" "}
        <a href="https://koala-bandits.github.io/nrcs-style/" target="_blank">
          nrcs-style
        </a>{" "}
        produced for our partners at NRCS.{" "}
      </strong>
    </p>

    <p>
      <ul>
        <li>
          Inspired by{" "}
          <a
            href="http://usda-fsa.github.io/fsa-design-system/"
            target="_blank"
          >
            FPAC Design System
          </a>{" "}
          and its inherent roots from the{" "}
          <a href="https://designsystem.digital.gov/" target="_blank">
            U.S. Web Design System
          </a>
          . If you are working on a project with FPAC or its related agencies,
          it is suggested you consider starting with these design systems.
        </li>
        <li>
          Designed with clean simple styles with high color contrast for
          accessibilty and to provide solutions for large scale applications.
        </li>
        <li>
          Provides color, typography, iconography, components, examples and
          documentation for how to use them.
        </li>
        <li>
          The intent is to provide a solution for our development teams to
          converge upon for consistent implementation in design and style.
        </li>
        <li>
          The NRCS Design System is based on{" "}
          <a href="https://koala-bandits.github.io/nrcs-style/" target="_blank">
            nrcs-style
          </a>{" "}
          which is a custom{" "}
          <a
            href="https://getbootstrap.com/docs/4.4/getting-started/introduction/"
            target="_blank"
          >
            Bootstrap
          </a>{" "}
          theme. Therefore all components can refer to Bootstrap for
          documentation for{" "}
          <a
            href="https://getbootstrap.com/docs/4.4/components/"
            target="_blank"
          >
            styles
          </a>
          ,{" "}
          <a
            href="https://getbootstrap.com/docs/4.4/layout/overview/"
            target="_blank"
          >
            layouts
          </a>
          , and{" "}
          <a
            href="https://getbootstrap.com/docs/4.4/utilities/"
            target="_blank"
          >
            utilities
          </a>
          . It's recommended that all styles are done through Bootstrap clasess
          and keep hand-written CSS to a minimum.
        </li>
        <li>
          This site is built with React, StoryBook, using{" "}
          <a href="https://reactstrap.github.io/" target="_blank">
            ReactStrap
          </a>
          . The{" "}
          <a
            href="https://github.com/Koala-Bandits/nrcs-design-system"
            target="_blank"
          >
            source
          </a>{" "}
          for this project can serve as an example implementation and start to
          components.
        </li>
      </ul>
    </p>
  </div>
);
