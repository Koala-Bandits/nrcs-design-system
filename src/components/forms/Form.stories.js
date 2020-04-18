import React from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { ContentHeaderH2 } from "components/text/ContentHeader";
import { PrimaryButton, ButtonFooter } from "components/buttons/Buttons";

export default {
  title: "Components|Forms/Form Examples"
};

export const FormDefaultStory = () => (
  <div>
    <h2 className="docs">Form - Default</h2>
    To do... example vertical layout form with top-aligned labels.
  </div>
);

export const FormRowStory = () => (
  <div>
    <ContentHeaderH2>Form - </ContentHeaderH2>
    <p className="lead">
      Use FormRow components for a mixed form with inline and vertical elements.
    </p>
    <Row>
      <Col className="m-3 p-3 border rounded">
        <Form>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="with a placeholder"
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="examplePassword"
                  placeholder="password placeholder"
                />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label for="exampleAddress">Address</Label>
            <Input
              type="text"
              name="address"
              id="exampleAddress"
              placeholder="1234 Main St"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleAddress2">Address 2</Label>
            <Input
              type="text"
              name="address2"
              id="exampleAddress2"
              placeholder="Apartment, studio, or floor"
            />
          </FormGroup>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleCity">City</Label>
                <Input type="text" name="city" id="exampleCity" />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="exampleState">State</Label>
                <Input type="text" name="state" id="exampleState" />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label for="exampleZip">Zip</Label>
                <Input type="text" name="zip" id="exampleZip" />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup check>
            <Input type="checkbox" name="check" id="exampleCheck" />
            <Label for="exampleCheck" check>
              Check me out
            </Label>
          </FormGroup>
          <ButtonFooter>
            <PrimaryButton>Sign in</PrimaryButton>
          </ButtonFooter>
        </Form>
      </Col>
    </Row>
  </div>
);

export const FormHorizontalStory = () => (
  <div>
    <ContentHeaderH2>Form - Horizontal</ContentHeaderH2>
    To do... example horizontal layout form with left-aligned labels.
  </div>
);

export const FormInlineStory = () => (
  <div>
    <h2 className="docs">Form - Inline</h2>
    To do... example horizontal layout form with left-aligned labels.
  </div>
);

export const FormInputGroupStory = () => (
  <div>
    <h2 className="docs">Form - InputGroup</h2>
    To do... various input grouping examples.
  </div>
);

FormDefaultStory.story = {
  name: "Form - Default"
};

FormRowStory.story = {
  name: "Form - FormRow"
};

FormHorizontalStory.story = {
  name: "Form - Horizontal"
};

FormInlineStory.story = {
  name: "Form - Inline"
};

FormInputGroupStory.story = {
  name: "Form - Input Group"
};
