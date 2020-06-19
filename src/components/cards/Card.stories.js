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
  ListGroup,
  ListGroupItem
} from "reactstrap";

export default {
  title: "Components|Cards"
};

export const CardDefault = () => (
  <div className="pb-4">
    <h2 className="docs">Card - Default</h2>
    <p className="lead">
      Cards are a versatile container that we can use to frame or group a
      section of content, create blocks.
    </p>

    <h3 className="docs">Basic White</h3>

    <Card style={{ maxWidth: 500 }}>
      <CardBody>This is some text within a card body.</CardBody>
    </Card>

    <h3 className="docs">Basic Muted</h3>

    <Card className="card-muted" style={{ maxWidth: 500 }}>
      <CardBody>This is some text within a muted card body.</CardBody>
    </Card>

    <h3 className="docs">Transparent</h3>

    <Card className="bg-transparent" style={{ maxWidth: 500 }}>
      <CardBody>Blend in with the background.</CardBody>
    </Card>

    <h3 className="docs">Kitchen Sink Card</h3>

    <Card style={{ maxWidth: 340 }}>
      <CardHeader className="h5">Card Header</CardHeader>
      <CardImg
        top
        width="100%"
        src="../images/KoalaBanditsClrzdSm.png"
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
