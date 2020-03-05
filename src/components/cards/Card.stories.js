import React from "react";
import {
  Card,
  CardHeader,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardLink,
  Button,
  ListGroup,
  ListGroupItem
} from "reactstrap";

export default {
  title: "Components|Cards"
};

export const CardDefault = () => (
  <div className="pb-4">
    <h1 className="docs">Card - Default</h1>
    <p>
      Cards are a versatile container that we can use to frame or group a
      section of content, create blocks etc.
    </p>

    <h2 className="docs">Basic White</h2>

    <Card style={{ "max-width": "500px" }}>
      <CardBody>This is some text within a card body.</CardBody>
    </Card>

    <h2 className="docs">Basic Muted</h2>

    <Card className="card-muted" style={{ "max-width": "500px" }}>
      <CardBody>This is some text within a card body.</CardBody>
    </Card>

    <h2 className="docs">Kitchen Sink Card</h2>

    <Card style={{ "max-width": "340px" }}>
      <CardHeader className="h5">Card Header</CardHeader>
      <CardImg
        top
        width="100%"
        src="./images/KoalaBanditsClrzdSm.png"
        alt="Card image caption"
      />
      <CardBody>
        <CardTitle className="h5">Card title</CardTitle>
        <CardSubtitle className="h6 text-muted mb-2">
          Card subtitle
        </CardSubtitle>
        <CardText>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </CardText>
      </CardBody>
      <ListGroup flush>
        <ListGroupItem>Cras justo odio</ListGroupItem>
        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem>Morbi leo risus</ListGroupItem>
        <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
        <ListGroupItem>Vestibulum at eros</ListGroupItem>
      </ListGroup>
      <CardBody>
        <div className="text-right">
          <CardLink href="#">Card Link</CardLink>
          <CardLink href="#">Another Link</CardLink>
        </div>
      </CardBody>
    </Card>
  </div>
);

CardDefault.story = {
  name: "Cards - Default"
};
