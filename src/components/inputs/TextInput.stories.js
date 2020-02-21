import React from "react";
import { Form, FormGroup, FormText, Label, Input } from "reactstrap";

export default {
  title: "Components|Inputs/Text Input"
};

export const RangeDefault = () => (
  <div>
    <h1 className="docs">Text Inputs</h1>

    <h2 className="docs">Text Input Types</h2>
    <FormGroup>
      <Label for="exampleEmail">Plain Text (Static)</Label>
      <Input plaintext value="Some plain text/ static value" />
    </FormGroup>
    <FormGroup>
      <Label for="exampleEmail">Email</Label>
      <Input
        type="email"
        name="email"
        id="exampleEmail"
        placeholder="with a placeholder"
      />
    </FormGroup>
    <FormGroup>
      <Label for="examplePassword">Password</Label>
      <Input
        type="password"
        name="password"
        id="examplePassword"
        placeholder="password placeholder"
      />
    </FormGroup>
    <FormGroup>
      <Label for="exampleUrl">Url</Label>
      <Input
        type="url"
        name="url"
        id="exampleUrl"
        placeholder="url placeholder"
      />
    </FormGroup>
    <FormGroup>
      <Label for="exampleNumber">Number</Label>
      <Input
        type="number"
        name="number"
        id="exampleNumber"
        placeholder="number placeholder"
      />
    </FormGroup>
    <FormGroup>
      <Label for="exampleDatetime">Datetime</Label>
      <Input
        type="datetime"
        name="datetime"
        id="exampleDatetime"
        placeholder="datetime placeholder"
      />
    </FormGroup>
    <FormGroup>
      <Label for="exampleDate">Date</Label>
      <Input
        type="date"
        name="date"
        id="exampleDate"
        placeholder="date placeholder"
      />
    </FormGroup>
    <FormGroup>
      <Label for="exampleTime">Time</Label>
      <Input
        type="time"
        name="time"
        id="exampleTime"
        placeholder="time placeholder"
      />
    </FormGroup>
    <FormGroup>
      <Label for="exampleColor">Color</Label>
      <Input
        type="color"
        name="color"
        id="exampleColor"
        placeholder="color placeholder"
      />
    </FormGroup>
    <FormGroup>
      <Label for="exampleSearch">Search</Label>
      <Input
        type="search"
        name="search"
        id="exampleSearch"
        placeholder="search placeholder"
      />
    </FormGroup>

    <FormGroup>
      <Label for="exampleText">Text Area</Label>
      <Input type="textarea" name="text" id="exampleText" />
    </FormGroup>
  </div>
);

RangeDefault.story = {
  name: "Text Input - Default"
};
