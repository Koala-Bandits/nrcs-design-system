import React from "react";
import { Row, Col, Card, CardBody } from "reactstrap";
import {
  ContentHeaderH1,
  ContentHeaderH2
} from "components/text/ContentHeader";
import Icon from "@mdi/react";
import { mdiOpenInNew } from "@mdi/js";

class Typography extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <ContentHeaderH1>Typography</ContentHeaderH1>
        <p className="lead">
          Familiar, modern, highly legible Google font provides easy reading,
          distinct labels, easy-to-use and high contrast input fields for
          accessibility.
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
          font. It is one of the suggested fonts from the U.S. Web Design System
          and is widely used for its legibility and familiarity paired with MDI
          icons. It works well for our data-heavy applications across browsers
          and devices.
        </p>
        <Row xs="1" sm="2" md="3" className="mb-3">
          <Col className="mb-3">
            <Card>
              <CardBody className="docs-typeface">
                <Row>
                  <Col>Default</Col>
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
                  <Col>Light</Col>
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
                  <Col>Bold</Col>
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
                  <Col>Fallback (Helvetica)</Col>
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
        <ContentHeaderH2>Sizes & Scaling</ContentHeaderH2>
        <p>
          All our components and typography supports both a{" "}
          <strong>default 16px base</strong> and a more compact{" "}
          <strong>small 14px base</strong> scaling via either a{" "}
          <code>size="small"</code> size attribute or <code>"*-small"</code> CSS
          class.
        </p>
        <p>
          This also gives designers flexibility to have a few text scales on
          hand to use with common elements.
        </p>
        <p>
          Note however, being based on Bootstrap a developer can scale the whole
          typography system as needed via the <code>$font-size-base</code>{" "}
          variable.
        </p>

        <h3>Default: 16px (1rem) base</h3>
        <p>
          Default typography scale is 16px for accessibility and easily reading.
          We typically suggest and design with default scale for public facing
          websites and applications that are limited in complexity.
        </p>

        <h3>Small: 14px (0.875rem) base</h3>
        <p>
          Use the small typography scale at 14px for a more compact presentation
          that we use often with more complex, internal GIS web applications and
          websites. This smaller sizing is also often paired with wider margins
          and layouts.
        </p>

        <Row>
          <Col xs="12" md="6" className="mb-3">
            <ContentHeaderH2>Headings</ContentHeaderH2>
            <h1>h1. heading (responsive)</h1>
            <h2>h2. heading (responsive)</h2>
            <h3>h3. heading (responsive)</h3>
            <h4>h4. heading (responsive)</h4>
            <h5>h5. heading</h5>
            <h6>h6. heading</h6>
          </Col>
          <Col xs="12" md="6" className="mb-3">
            <ContentHeaderH2>Headings (Small)</ContentHeaderH2>
            <h1 className="h1-sm">h1. heading (responsive)</h1>
            <h2 className="h2-sm">h2. heading (responsive)</h2>
            <h3 className="h3-sm">h3. heading (responsive)</h3>
            <h4 className="h4-sm">h4. heading (responsive)</h4>
            <h5 className="h5-sm">h5. heading</h5>
            <h6 className="h6-sm">h6. heading</h6>
          </Col>
        </Row>

        <Row>
          <Col xs="12" md="6" className="mb-3">
            <ContentHeaderH2>Paragraph</ContentHeaderH2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Col>
          <Col xs="12" md="6" className="mb-3">
            <ContentHeaderH2>Paragraph (Small)</ContentHeaderH2>
            <p className="p-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs="12" md="6" className="mb-3">
            <ContentHeaderH2>Lead</ContentHeaderH2>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </Col>
          <Col xs="12" md="6" className="mb-3">
            <ContentHeaderH2>Lead (Small)</ContentHeaderH2>
            <p className="lead-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs="12" md="6" className="mb-3">
            <ContentHeaderH2>Text Elements</ContentHeaderH2>
            <p>
              <abbr title="Abbreviation">abbr</abbr>
            </p>
            <p>
              This line of text is how{" "}
              <a href="https://www.spacetelescope.org/images/archive/top100/">
                a link to something
              </a>{" "}
              renders.
            </p>
            <p>
              <a href="#">
                This is an external link{" "}
                <Icon className="mdi" path={mdiOpenInNew} size={0.8} />
              </a>
            </p>
            <p>
              <b>b element</b>
            </p>
            <p>
              <cite>cite element</cite>
            </p>
            <p>
              <code>code element</code>
            </p>
            <p>
              <del>
                This line of text is meant to be treated as deleted text.
              </del>
            </p>
            <p>
              <dfn title="Title text">dfn element</dfn>
            </p>
            <p>
              <em>em element</em>
            </p>
            <p>
              <em>This line rendered as italicized text.</em>
            </p>
            <p>
              <ins>
                This line of text is meant to be treated as an addition to the
                document.
              </ins>
            </p>
            <p>
              <kbd>kbd element</kbd>
            </p>
            <p>
              <label>
                label element: bold for most things except checkboxes, radios,
                and switches
              </label>
            </p>
            <p>
              You can use the mark tag to <mark>highlight</mark> text.
            </p>
            <p>
              <q>q element</q>
            </p>
            <p>
              <samp>samp element</samp>
            </p>
            <p>
              <small>
                This line of text is meant to be treated as fine print.
              </small>
            </p>
            <p>
              <s>
                This line of text is meant to be treated as no longer accurate.
              </s>
            </p>
            <p>
              <span>span element</span>
            </p>
            <p>
              <strong>strong element: rendered as bold text.</strong>
            </p>
            <p>
              This is a <sub>sub element</sub> in a sentence.
            </p>
            <p>
              This is a <sup>sup element</sup> in an sentence.
            </p>
            <p>
              <time dateTime="2005-05-15 19:00">time element</time>
            </p>
            <p>
              <u>This line of text will render as underlined</u>
            </p>
            <p>
              <var>var element</var>
            </p>
          </Col>
          <Col xs="12" md="6" className="mb-3">
            <ContentHeaderH2>Text Elements (Small)</ContentHeaderH2>
            <p className="p-sm">
              <abbr title="Abbreviation">abbr</abbr>
            </p>
            <p className="p-sm">
              This line of text is how{" "}
              <a href="https://www.spacetelescope.org/images/archive/top100/">
                a link to something
              </a>{" "}
              renders.
            </p>
            <p className="p-sm">
              <a href="#">
                This is an external link{" "}
                <Icon className="mdi" path={mdiOpenInNew} size={0.8} />
              </a>
            </p>
            <p className="p-sm">
              <b>b element</b>
            </p>
            <p className="p-sm">
              <cite>cite element</cite>
            </p>
            <p className="p-sm">
              <code>code element</code>
            </p>
            <p className="p-sm">
              <del>
                This line of text is meant to be treated as deleted text.
              </del>
            </p>
            <p className="p-sm">
              <dfn title="Title text">dfn element</dfn>
            </p>
            <p className="p-sm">
              <em>em element</em>
            </p>
            <p className="p-sm">
              <em>This line rendered as italicized text.</em>
            </p>
            <p className="p-sm">
              <ins>
                This line of text is meant to be treated as an addition to the
                document.
              </ins>
            </p>
            <p className="p-sm">
              <kbd>kbd element</kbd>
            </p>
            <p className="p-sm">
              <label>
                label element: bold for most things except checkboxes, radios,
                and switches
              </label>
            </p>
            <p className="p-sm">
              You can use the mark tag to <mark>highlight</mark> text.
            </p>
            <p className="p-sm">
              <q>q element</q>
            </p>
            <p className="p-sm">
              <samp>samp element</samp>
            </p>
            <p className="p-sm">
              <small>
                This line of text is meant to be treated as fine print.
              </small>
            </p>
            <p className="p-sm">
              <s>
                This line of text is meant to be treated as no longer accurate.
              </s>
            </p>
            <p className="p-sm">
              <span>span element</span>
            </p>
            <p className="p-sm">
              <strong>strong element: rendered as bold text.</strong>
            </p>
            <p className="p-sm">
              This is a <sub>sub element</sub> in a sentence.
            </p>
            <p className="p-sm">
              This is a <sup>sup element</sup> in an sentence.
            </p>
            <p className="p-sm">
              <time dateTime="2005-05-15 19:00">time element</time>
            </p>
            <p className="p-sm">
              <u>This line of text will render as underlined</u>
            </p>
            <p className="p-sm">
              <var>var element</var>
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs="12" md="6" className="mb-3">
            <ContentHeaderH2>List</ContentHeaderH2>
            <ul>
              <li>List item one</li>
              <li>List item two</li>
              <li>List item three</li>
            </ul>
          </Col>
          <Col xs="12" md="6" className="mb-3">
            <ContentHeaderH2>List (Small)</ContentHeaderH2>
            <ul className="list-sm">
              <li>List item one</li>
              <li>List item two</li>
              <li>List item three</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col xs="12" md="6" className="mb-3">
            <ContentHeaderH2>Numbered List</ContentHeaderH2>
            <ol>
              <li>List item one</li>
              <li>List item two</li>
              <li>List item three</li>
            </ol>
          </Col>
          <Col xs="12" md="6" className="mb-3">
            <ContentHeaderH2>Numbered List (Small)</ContentHeaderH2>
            <ol className="list-sm">
              <li>List item one</li>
              <li>List item two</li>
              <li>List item three</li>
            </ol>
          </Col>
        </Row>
        <Row>
          <Col xs="12" md="6" className="mb-3">
            <ContentHeaderH2>Inline List</ContentHeaderH2>
            <ul className="list-inline">
              <li className="list-inline-item">Lorem ipsum</li>
              <li className="list-inline-item">Phasellus iaculis</li>
              <li className="list-inline-item">Nulla volutpat</li>
            </ul>
          </Col>
          <Col xs="12" md="6" className="mb-3">
            <ContentHeaderH2>Inline List (Small)</ContentHeaderH2>
            <ul className="list-inline list-sm">
              <li className="list-inline-item">Lorem ipsum</li>
              <li className="list-inline-item">Phasellus iaculis</li>
              <li className="list-inline-item">Nulla volutpat</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col xs="12" md="6" className="mb-3">
            <ContentHeaderH2>Description List</ContentHeaderH2>
            <dl className="row">
              <dt className="col-sm-3">Description lists</dt>
              <dd className="col-sm-9">
                A description list is perfect for defining terms.
              </dd>

              <dt className="col-sm-3">Euismod</dt>
              <dd className="col-sm-9">
                <p>
                  Vestibulum id ligula porta felis euismod semper eget lacinia
                  odio sem nec elit.
                </p>
                <p>Donec id elit non mi porta gravida at eget metus.</p>
              </dd>

              <dt className="col-sm-3">Malesuada porta</dt>
              <dd className="col-sm-9">
                Etiam porta sem malesuada magna mollis euismod.
              </dd>

              <dt className="col-sm-3 text-truncate">
                Truncated term is truncated
              </dt>
              <dd className="col-sm-9">
                Fusce dapibus, tellus ac cursus commodo, tortor mauris
                condimentum nibh, ut fermentum massa justo sit amet risus.
              </dd>

              <dt className="col-sm-3">Nesting</dt>
              <dd className="col-sm-9">
                <dl className="row">
                  <dt className="col-sm-4">Nested definition list</dt>
                  <dd className="col-sm-8">
                    Aenean posuere, tortor sed cursus feugiat, nunc augue
                    blandit nunc.
                  </dd>
                </dl>
              </dd>
            </dl>
          </Col>
          <Col xs="12" md="6" className="mb-3">
            <ContentHeaderH2>Description List (Small)</ContentHeaderH2>
            <dl className="row list-sm">
              <dt className="col-sm-3">Description lists</dt>
              <dd className="col-sm-9">
                A description list is perfect for defining terms.
              </dd>

              <dt className="col-sm-3">Euismod</dt>
              <dd className="col-sm-9">
                <p>
                  Vestibulum id ligula porta felis euismod semper eget lacinia
                  odio sem nec elit.
                </p>
                <p>Donec id elit non mi porta gravida at eget metus.</p>
              </dd>

              <dt className="col-sm-3">Malesuada porta</dt>
              <dd className="col-sm-9">
                Etiam porta sem malesuada magna mollis euismod.
              </dd>

              <dt className="col-sm-3 text-truncate">
                Truncated term is truncated
              </dt>
              <dd className="col-sm-9">
                Fusce dapibus, tellus ac cursus commodo, tortor mauris
                condimentum nibh, ut fermentum massa justo sit amet risus.
              </dd>

              <dt className="col-sm-3">Nesting</dt>
              <dd className="col-sm-9">
                <dl className="row">
                  <dt className="col-sm-4">Nested definition list</dt>
                  <dd className="col-sm-8">
                    Aenean posuere, tortor sed cursus feugiat, nunc augue
                    blandit nunc.
                  </dd>
                </dl>
              </dd>
            </dl>
          </Col>
        </Row>

        <ContentHeaderH2>Responsive Font Sizing</ContentHeaderH2>
        <p>
          Is enabled by default via the{" "}
          <code>$enable-responsive-font-sizes</code> Sass variable. You can turn
          it off if you want to. It mostly affects header sizing.
        </p>
        <ContentHeaderH2>Text Utilities</ContentHeaderH2>
        <p>
          Since NRCS Design System is Bootstrap based, documentation for
          utilities to change text alignment, transform, style, weight, and
          color, see{" "}
          <a href="https://getbootstrap.com/docs/4.4/utilities/text/">
            text utilities
          </a>{" "}
          and{" "}
          <a href="https://getbootstrap.com/docs/4.4/utilities/colors/">
            color utilities
          </a>{" "}
          links.
        </p>
        <Row>
          <Col>
            Use{" "}
            <a href="https://getbootstrap.com/docs/4.4/utilities/text/">
              text utilities
            </a>{" "}
            to align things like this:
            <blockquote className="card blockquote text-center">
              <p className="mb-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.
              </p>
              <footer className="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </footer>
            </blockquote>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Typography;
