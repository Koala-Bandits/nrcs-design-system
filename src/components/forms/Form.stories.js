import React from "react";
import {
  Col,
  Row,
  Card,
  CardBody,
  CustomInput,
  Form,
  FormGroup,
  FormText,
  Label,
  Input
} from "reactstrap";
import { ContentHeaderH2 } from "components/text/ContentHeader";
import {
  PrimaryButton,
  SecondaryButton,
  ButtonSet,
  ButtonFooter
} from "components/buttons/Buttons";

export default {
  title: "Components|Forms/Form Examples"
};

export const FormDefaultStory = () => (
  <div>
    <ContentHeaderH2>Form - Default</ContentHeaderH2>
    <p>Typical single column form example...</p>
    <Row>
      <Col sm="12" md="6">
        <Card className="bg-transparent">
          <CardBody>
            <h3>Profile</h3>
            <Form>
              <FormGroup>
                <Label for="exampleName">Name</Label>
                <Input
                  type="text"
                  name="name"
                  id="exampleName"
                  placeholder="Danger Dan"
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePower">Super Power</Label>
                <Input
                  type="text"
                  name="power"
                  id="examplePower"
                  placeholder="Duels with dragons"
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePlainText">Agent Level</Label>
                <Input plaintext value="SUPER BAD" id="examplePlainText" />
              </FormGroup>
              <FormGroup>
                <Label for="exampleSelect">Theme Color</Label>
                <Input type="select" name="color" id="exampleSelect">
                  <option>Charcoal</option>
                  <option>Blue</option>
                  <option>Red</option>
                  <option>Green</option>
                  <option>Pink</option>
                  <option>Purple</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="exampleSelectMulti">Tools</Label>
                <Input
                  type="select"
                  name="selectMulti"
                  id="exampleSelectMulti"
                  multiple
                >
                  <option>Compass</option>
                  <option>Rope</option>
                  <option>Blaster</option>
                  <option>Snackies</option>
                  <option>Sunscreen</option>
                </Input>
                <FormText color="muted">
                  This is some placeholder block-level help text for the above
                  input. It's a bit lighter and easily wraps to a new line.
                </FormText>
              </FormGroup>
              <FormGroup>
                <Label for="exampleText">Bio</Label>
                <Input
                  type="textarea"
                  name="text"
                  id="exampleText"
                  placeholder="Likes cats..."
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleCustomFileBrowser">Avatar Image</Label>
                <CustomInput
                  type="file"
                  id="exampleCustomFileBrowser"
                  name="customFile"
                />
              </FormGroup>

              <FormGroup>
                <Label for="exampleCheckbox">Options</Label>
                <CustomInput
                  type="checkbox"
                  id="exampleCustomCheckbox"
                  label="Auto spidy-sense"
                />
                <CustomInput
                  type="checkbox"
                  id="exampleCustomCheckbox2"
                  label="Leave the light on"
                />
                <CustomInput
                  type="checkbox"
                  id="exampleCustomCheckbox3"
                  label="Extra bacon"
                  checked
                  disabled
                />
                <CustomInput
                  type="checkbox"
                  id="exampleCustomCheckbox4"
                  label="Extra bacon"
                  htmlFor="exampleCustomCheckbox4_X"
                  checked
                  disabled
                />
              </FormGroup>
              <ButtonFooter className="text-right">
                <ButtonSet>
                  <SecondaryButton>Cancel</SecondaryButton>
                  <PrimaryButton>Save</PrimaryButton>
                </ButtonSet>
              </ButtonFooter>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
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
    <ContentHeaderH2>Form - Inline</ContentHeaderH2>
    To do... example horizontal layout form with left-aligned labels.
  </div>
);

export const FormInputGroupStory = () => (
  <div>
    <ContentHeaderH2>Form - InputGroup</ContentHeaderH2>
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
