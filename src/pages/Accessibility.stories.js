import React from "react";

export default {
  title: "Design System|Accessibility"
};

export const AccessibilityStory = () => (
  <div className="container">
    <h1 className="docs">Accessibility</h1>

    <p>
      NRCS has 508 requirements for web applications that are quite strict and
      generally aims for <strong>Level AA</strong> and{" "}
      <strong>Level AAA</strong> standards.
    </p>
    <p>
      In our design system, our components and examples are coded with
      accessibility <mark>(BETA - still largely a work in progress)</mark>
      in mind to provide good examples for developers. However, it is still{" "}
      <strong>the developer's responsibility</strong> to produce accesssible
      work.
    </p>
    <h3>Guidelines</h3>
    <p>
      For now, the best resource for accessibility and what our design system
      aims to match and follow comes from the{" "}
      <strong>
        <a href="http://usda-fsa.github.io/fsa-design-system/guides/accessibility/">
          FPAC Design System's documentation on accessibilty
        </a>
      </strong>
      , as well as as the{" "}
      <strong>
        <a href="https://www.w3.org/TR/WCAG20/">WCAG 2.0 AA Standards</a>
      </strong>{" "}
      that FPAC suggests as a minimum requirement.
    </p>
  </div>
);
