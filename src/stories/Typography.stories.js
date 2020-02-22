import React from "react";

export default {
  title: "Design System|Typography"
};

export const Typography = () => (
  <div>
    <h1 className="docs">Typography</h1>

    <p className="col-md-8">
      <strong>Typeface</strong>
      <br />
      NRCS uses Google's open source{" "}
      <strong>
        <a
          href="https://fonts.google.com/specimen/Roboto?selection.family=Roboto"
          target="_blank"
        >
          Roboto
        </a>
      </strong>{" "}
      font. It is a widely used font that we like for its legibility and
      familiarity paired with MDI icons. It works well for our data-heavy
      applications across browsers and devices.
    </p>

    <div className="col docs-typeface mt-5">
      <div className="row mb-5">
        <div className="col">
          <div className="row">
            <div className="col">
              <strong>Default</strong>
            </div>
          </div>
          <div className="row">
            <div className="col-auto docs-text-big">Aa</div>
            <div className="col">
              <p>abcdefghijklmnopqrstuvwxyz</p>
              <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
              <p>1234567890</p>
            </div>
          </div>
        </div>

        <div className="col font-weight-light">
          <div className="row">
            <div className="col">
              <strong>Light</strong>
            </div>
          </div>
          <div className="row">
            <div className="col-auto docs-text-big">Aa</div>
            <div className="col">
              <p>abcdefghijklmnopqrstuvwxyz</p>
              <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
              <p>1234567890</p>
            </div>
          </div>
        </div>

        <div className="col font-weight-bold">
          <div className="row">
            <div className="col">
              <strong>Bold</strong>
            </div>
          </div>
          <div className="row">
            <div className="col-auto docs-text-big">Aa</div>
            <div className="col">
              <p>abcdefghijklmnopqrstuvwxyz</p>
              <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
              <p>1234567890</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col docs-text-fallback">
          <div className="row">
            <div className="col">
              <strong>Fallback (Helvetica)</strong>
            </div>
          </div>
          <div className="row">
            <div className="col-auto docs-text-big">Aa</div>
            <div className="col">
              <p>abcdefghijklmnopqrstuvwxyz</p>
              <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
              <p>1234567890</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <hr />

    <h1>h1. heading</h1>
    <h2>h2. heading</h2>
    <h3>h3. heading</h3>
    <h4>h4. heading</h4>
    <h5>h5. heading</h5>
    <h6>h6. heading</h6>

    <p>
      You can use the mark tag to <mark>highlight</mark> text.
    </p>
    <p>
      <del>This line of text is meant to be treated as deleted text.</del>
    </p>
    <p>
      <s>This line of text is meant to be treated as no longer accurate.</s>
    </p>
    <p>
      <ins>
        This line of text is meant to be treated as an addition to the document.
      </ins>
    </p>
    <p>
      <u>This line of text will render as underlined</u>
    </p>
    <p>
      <small>This line of text is meant to be treated as fine print.</small>
    </p>
    <p>
      <strong>This line rendered as bold text.</strong>
    </p>
    <p>
      <em>This line rendered as italicized text.</em>
    </p>
    <p>
      This line of text is how{" "}
      <a href="https://www.spacetelescope.org/images/archive/top100/">
        a link to something
      </a>{" "}
      renders.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
  </div>
);
