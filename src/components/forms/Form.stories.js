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
import { ContentHeaderH1 } from "components/text/ContentHeader";
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
    <ContentHeaderH1>Form - Basic</ContentHeaderH1>
    <p className="lead">Typical single column form example.</p>
    <Row>
      <Col sm="12" md="6" className="mb-4">
        <h3>Default</h3>
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

      <Col sm="12" md="6">
        <h3>Small</h3>
        <Card className="bg-transparent">
          <CardBody>
            <h3>Profile</h3>
            <Form>
              <FormGroup>
                <Label for="exampleName" size="sm">
                  Name
                </Label>
                <Input
                  type="text"
                  name="name"
                  id="exampleNameSm"
                  placeholder="Danger Dan"
                  bsSize="sm"
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePower" size="sm">
                  Super Power
                </Label>
                <Input
                  type="text"
                  name="power"
                  id="examplePowerSm"
                  placeholder="Duels with dragons"
                  bsSize="sm"
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePlainText" size="sm">
                  Agent Level
                </Label>
                <Input
                  plaintext
                  value="SUPER BAD"
                  id="examplePlainTextSm"
                  bsSize="sm"
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleSelect" size="sm">
                  Theme Color
                </Label>
                <Input
                  type="select"
                  name="color"
                  id="exampleSelectSm"
                  bsSize="sm"
                >
                  <option>Charcoal</option>
                  <option>Blue</option>
                  <option>Red</option>
                  <option>Green</option>
                  <option>Pink</option>
                  <option>Purple</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="exampleSelectMulti" size="sm">
                  Tools
                </Label>
                <Input
                  type="select"
                  name="selectMulti"
                  id="exampleSelectMultiSm"
                  bsSize="sm"
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
                <Label for="exampleText" size="sm">
                  Bio
                </Label>
                <Input
                  type="textarea"
                  name="text"
                  id="exampleTextSm"
                  placeholder="Likes cats..."
                  bsSize="sm"
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleCustomFileBrowser" size="sm">
                  Avatar Image
                </Label>
                <CustomInput
                  type="file"
                  id="exampleCustomFileBrowserSm"
                  name="customFile"
                  bsSize="sm"
                />
              </FormGroup>

              <FormGroup>
                <Label for="exampleCheckbox" size="sm">
                  Options
                </Label>
                <CustomInput
                  type="checkbox"
                  id="exampleCustomCheckboxSm"
                  label="Auto spidy-sense"
                  bsSize="sm"
                />
                <CustomInput
                  type="checkbox"
                  id="exampleCustomCheckbox2Sm"
                  label="Leave the light on"
                  bsSize="sm"
                />
                <CustomInput
                  type="checkbox"
                  id="exampleCustomCheckbox3Sm"
                  label="Extra bacon"
                  bsSize="sm"
                  checked
                  disabled
                />
                <CustomInput
                  type="checkbox"
                  id="exampleCustomCheckbox4Sm"
                  label="Extra bacon"
                  htmlFor="exampleCustomCheckbox4_X"
                  bsSize="sm"
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
    <ContentHeaderH1>Form - </ContentHeaderH1>
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
    <ContentHeaderH1>Form - Horizontal</ContentHeaderH1>
    To do... example horizontal layout form with left-aligned labels.
  </div>
);

export const FormInlineStory = () => (
  <div>
    <ContentHeaderH1>Form - Inline</ContentHeaderH1>
    To do... example horizontal layout form with left-aligned labels.
  </div>
);

export const FormInputGroupStory = () => (
  <div>
    <ContentHeaderH1>Form - InputGroup</ContentHeaderH1>
    To do... various input grouping examples.
  </div>
);

FormDefaultStory.story = {
  name: "Form - Basic"
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
