import React from "react";

export default {
  title: "Design System|About"
};

export const About = () => (
  <div>
    <h1>NRCS Design System</h1>

    <p>
      <strong>
        A design system using{" "}
        <a href="https://koala-bandits.github.io/nrcs-style/" target="_blank">
          nrcs-style
        </a>{" "}
        produced for our partners NRCS.{" "}
        <span className="text-danger">
          ** BETA: CURRENTLY UNDER DEVELOPMENT AND INCOMPLETE **
        </span>
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
          . If you are here working on a project with FPAC or its related
          organizations, it is suggested you consider starting with these design
          systems.
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
      </ul>
    </p>
  </div>
);
