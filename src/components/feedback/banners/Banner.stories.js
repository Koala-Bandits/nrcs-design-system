import React from "react";
import { Container, Row, Col } from "reactstrap";
import Icon from "@mdi/react";
import { mdiAlert, mdiCheckCircle } from "@mdi/js";
import { Banner } from "./Banner";

export default {
  title: "Components|Feedback/Banners"
};

export const BannersDefault = () => (
  <div>
    <h2 className="docs">Banners - Default</h2>
    <p className="lead">
      Banner alerts are used under a ModalHeader or ContenHeader 100% width
      edge-to-edge when Growls are not practical.
    </p>

    <Banner className="alert-banner" color="info">
      This is an <strong>info</strong> banner with{" "}
      <a href="#" className="alert-link">
        an example link
      </a>
      . Give it a click if you like.
    </Banner>
    <Banner className="alert-banner" color="success">
      This is a <strong>success</strong> banner with{" "}
      <a href="#" className="alert-link">
        an example link
      </a>
      . Give it a click if you like.
    </Banner>
    <Banner className="alert-banner" color="danger">
      This is a <strong>error</strong> banner with{" "}
      <a href="#" className="alert-link">
        an example link
      </a>
      . Give it a click if you like.
    </Banner>
    <Banner className="alert-banner" color="warning">
      This is a <strong>warning</strong> banner with{" "}
      <a href="#" className="alert-link">
        an example link
      </a>
      . Give it a click if you like.
    </Banner>
  </div>
);

export const BannersWithIcons = () => (
  <div>
    <h3>Banners - No Icon</h3>
    <p>
      Banners come with icons by default as it aids in accessibility (color
      blind individuals). If you really want to remove the icon you can do so
      using the <code>noIcon</code> prop.
    </p>

    <Banner color="info" noIcon>
      This is an <strong>info</strong> banner with{" "}
      <a href="#" className="alert-link">
        an example link
      </a>
      . Give it a click if you like.
    </Banner>
  </div>
);

export const BannersDismissable = () => {
  return (
    <div>
      <h3>Banners - Dismissable</h3>
      <p>
        Use the <code>dismissable</code> property to make a Banner dismissable.
      </p>
      <Banner color="info" dismissable>
        This is a dismissable <strong>banner</strong> banner with{" "}
        <a href="#" className="alert-link">
          an example link
        </a>
        . Go ahead, make me go away.
      </Banner>
    </div>
  );
};

export const BannersContent = () => (
  <div>
    <h3>Banners - with Content</h3>

    <p>
      In rare cases you may want more control of content in a Banner. In this
      example, we use <code>noIcon</code> to remove the default icon and do our
      own thang...
    </p>

    <Banner color="success" noIcon>
      <h4 className="alert-heading">
        <Icon className="mdi" path={mdiCheckCircle} size={1.3} />
        Well done!
      </h4>
      <p>
        Aww yeah, you successfully read this important banner message. This
        example text is going to run a bit longer so that you can see how
        spacing within an banner works with this kind of content.
      </p>
      <hr />
      <p className="mb-0">
        Whenever you need to, be sure to use margin utilities to keep things
        nice and tidy.
      </p>
    </Banner>
  </div>
);

BannersDefault.story = {
  name: "Banners - Default"
};

BannersWithIcons.story = {
  name: "Banners - No Icon"
};

BannersDismissable.story = {
  name: "Banners - Dismissable"
};

BannersContent.story = {
  name: "Banners - with Content"
};
