import React from "react";
import { Row, Col, Card, CardBody, CardText } from "reactstrap";
import {
  ContentHeaderH1,
  ContentHeaderH2
} from "components/text/ContentHeader";

export default {
  title: "Design System|Typography"
};

export const TypographyStory = () => (
  <div className="container">
    <ContentHeaderH1>Typography</ContentHeaderH1>

    <p class="lead">
      Clear and consistent headings, highly legible body paragraphs, clear
      labels, and easy-to-use input fields.
    </p>

    <ContentHeaderH2>Typeface</ContentHeaderH2>
    <p>
      NRCS uses Google's open source{" "}
      <strong>
        <a
          href="https://fonts.google.com/specimen/Roboto?selection.family=Roboto"
          target="_blank"
          rel="nopener noreferrer"
        >
          Roboto
        </a>
      </strong>{" "}
      font. It is one of the suggested fonts from the U.S. Web Design System and
      is widely used for its legibility and familiarity paired with MDI icons.
      It works well for our data-heavy applications across browsers and devices.
    </p>

    <Row xs="1" sm="2" md="3" className="mb-3">
      <Col className="mb-3">
        <Card>
          <CardBody className="docs-typeface">
            <Row>
              <Col>
                <strong>Default</strong>
              </Col>
            </Row>
            <Row>
              <div className="col-auto docs-text-big">Aa</div>
              <div className="col">
                <p>abcdefghijklmnopqrstuvwxyz</p>
                <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                <p>1234567890</p>
              </div>
            </Row>
          </CardBody>
        </Card>
      </Col>
      <Col className="mb-3">
        <Card>
          <CardBody className="docs-typeface font-weight-light">
            <Row>
              <Col>
                <strong>Light</strong>
              </Col>
            </Row>
            <Row>
              <div className="col-auto docs-text-big">Aa</div>
              <div className="col">
                <p>abcdefghijklmnopqrstuvwxyz</p>
                <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                <p>1234567890</p>
              </div>
            </Row>
          </CardBody>
        </Card>
      </Col>
      <Col className="mb-3">
        <Card>
          <CardBody className="docs-typeface font-weight-bold">
            <Row>
              <Col>
                <strong>Bold</strong>
              </Col>
            </Row>
            <Row>
              <div className="col-auto docs-text-big">Aa</div>
              <div className="col">
                <p>abcdefghijklmnopqrstuvwxyz</p>
                <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                <p>1234567890</p>
              </div>
            </Row>
          </CardBody>
        </Card>
      </Col>
      <Col className="mb-3">
        <Card>
          <CardBody className="docs-typeface docs-text-fallback">
            <Row>
              <Col>
                <strong>Fallback (Helvetica)</strong>
              </Col>
            </Row>
            <Row>
              <div className="col-auto docs-text-big">Aa</div>
              <div className="col">
                <p>abcdefghijklmnopqrstuvwxyz</p>
                <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                <p>1234567890</p>
              </div>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>

    <ContentHeaderH2>Headings</ContentHeaderH2>

    <h1>h1. heading (responsive sizing)</h1>
    <h2>h2. heading (responsive sizing)</h2>
    <h3>h3. heading (responsive sizing)</h3>
    <h4>h4. heading (responsive sizing)</h4>
    <h5>h5. heading</h5>
    <h6>h6. heading</h6>

    <ContentHeaderH2>Paragraph</ContentHeaderH2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>

    <ContentHeaderH2>Text Elements</ContentHeaderH2>
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
  </div>
);
