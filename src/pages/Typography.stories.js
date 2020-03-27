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
    <ContentHeaderH2>Lead</ContentHeaderH2>
    <p class="lead">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
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
    <ContentHeaderH2>List</ContentHeaderH2>
    <ul>
      <li>List item one</li>
      <li>List item two</li>
      <li>List item three</li>
    </ul>
    <ContentHeaderH2>Numbered List</ContentHeaderH2>
    <ol>
      <li>List item one</li>
      <li>List item two</li>
      <li>List item three</li>
    </ol>
    <ContentHeaderH2>Numbered List</ContentHeaderH2>
    <ul class="list-inline">
      <li class="list-inline-item">Lorem ipsum</li>
      <li class="list-inline-item">Phasellus iaculis</li>
      <li class="list-inline-item">Nulla volutpat</li>
    </ul>
    <ContentHeaderH2>Description List</ContentHeaderH2>
    <dl class="row">
      <dt class="col-sm-3">Description lists</dt>
      <dd class="col-sm-9">
        A description list is perfect for defining terms.
      </dd>

      <dt class="col-sm-3">Euismod</dt>
      <dd class="col-sm-9">
        <p>
          Vestibulum id ligula porta felis euismod semper eget lacinia odio sem
          nec elit.
        </p>
        <p>Donec id elit non mi porta gravida at eget metus.</p>
      </dd>

      <dt class="col-sm-3">Malesuada porta</dt>
      <dd class="col-sm-9">Etiam porta sem malesuada magna mollis euismod.</dd>

      <dt class="col-sm-3 text-truncate">Truncated term is truncated</dt>
      <dd class="col-sm-9">
        Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
        ut fermentum massa justo sit amet risus.
      </dd>

      <dt class="col-sm-3">Nesting</dt>
      <dd class="col-sm-9">
        <dl class="row">
          <dt class="col-sm-4">Nested definition list</dt>
          <dd class="col-sm-8">
            Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.
          </dd>
        </dl>
      </dd>
    </dl>
    <ContentHeaderH2>Responsive Font Sizing</ContentHeaderH2>
    Is enabled by default via the <code>
      $enable-responsive-font-sizes
    </code>{" "}
    Sass variable. You can turn it off if you want to. It mostly affects header
    sizing.
    <ContentHeaderH2>Text Utilities</ContentHeaderH2>
    Since NRCS Design System is Bootstrap based, documentation for utilities to
    change text alignment, transform, style, weight, and color, see{" "}
    <a href="https://getbootstrap.com/docs/4.4/utilities/text/">
      text utilities
    </a>{" "}
    and{" "}
    <a href="https://getbootstrap.com/docs/4.4/utilities/colors/">
      color utilities
    </a>{" "}
    links.
    <ContentHeaderH2>Text Utilities</ContentHeaderH2>
    Use{" "}
    <a href="https://getbootstrap.com/docs/4.4/utilities/text/">
      text utilities
    </a>{" "}
    to align things like this:
    <blockquote class="card blockquote text-center">
      <p class="mb-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.
      </p>
      <footer class="blockquote-footer">
        Someone famous in <cite title="Source Title">Source Title</cite>
      </footer>
    </blockquote>
  </div>
);
