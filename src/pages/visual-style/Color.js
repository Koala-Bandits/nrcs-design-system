import React from "react";
import {
  ContentHeaderH1,
  ContentHeaderH2
} from "components/text/ContentHeader";

class Color extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container docs-color">
        <ContentHeaderH1>Color</ContentHeaderH1>

        <p className="lead">
          The NRCS Color Palette is anchored around the USDA/FPAC Primary Geen
          and Secondary Blue colors and their goal of meeting strict 508
          requirements of high color contrast.
        </p>
        <p>
          Several NRCS applications currently use Blue as the primary color
          coming from their water theme. So this design system simply swaps the
          Blue for our Primary and the Green for our Secondary. NRCS gray
          tertiary and accent colors are adjusted slightly from FPAC.
        </p>
        <p>
          New projects, especially if public facing, should consider using the
          Green as the Primary color and you'll see that we provide header
          components that use it as an option.
        </p>

        <ContentHeaderH2>Base Palette</ContentHeaderH2>

        <div className="row">
          <div className="col-md-4">
            <div className="p-3 mb-3 docs-gray-900 text-white docs-color-swatch">
              Dark (gray-900) #282828
              <p>
                <small>Default text color</small>
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-3 mb-3 bg-light text-dark border docs-color-swatch">
              Light (gray-100) #fafafa
              <p>
                <small>Background</small>
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="p-3 mb-3 bg-white text-dark docs-color-swatch">
              White #fff
              <p>
                <small>
                  Background of Card, Outline Buttons, and other components
                </small>
              </p>
            </div>
          </div>
        </div>

        <ContentHeaderH2>Color Palette</ContentHeaderH2>

        <div className="row">
          <div className="col-md-4">
            <div className="p-3 mb-3 bg-primary text-white docs-color-swatch">
              Primary #205493
              <p>
                <small>
                  FPAC blue - Header, primary buttons, actions and controls
                </small>
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-3 mb-3 bg-secondary text-white docs-color-swatch">
              Secondary #236430{" "}
              <p>
                <small>FPAC green</small>
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-3 mb-3 docs-color-primaryoutline docs-color-swatch">
              Primary Outline #205493, bg: #fff/white
              <p>
                <small>Secondary buttons</small>
              </p>
            </div>
          </div>
        </div>

        <ContentHeaderH2>Accent Palette</ContentHeaderH2>

        <div className="row">
          <div className="col-md-4 mb-3">
            <div className="p-3 bg-info text-white docs-color-swatch">
              Information #296cbd
              <p>
                <small>10% lighter than Primary blue</small>
              </p>
            </div>
            <div className="p-3 alert-info">
              Information Background / Active Highlight
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="p-3 bg-success text-white docs-color-swatch">
              Success #308a42
              <p>
                <small>10% lighter than Secondary green</small>
              </p>
            </div>
            <div className="p-3 alert alert-banner alert-success">
              Successs Background
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="p-3 bg-danger text-white docs-color-swatch">
              Danger #b70f0a
            </div>
            <div className="p-3 alert alert-banner alert-danger">
              Danger Background
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="p-3 bg-warning text-dark docs-color-swatch">
              Warning #fdb81e
            </div>
            <div className="p-3 alert alert-banner alert-warning">
              Danger Background
            </div>
          </div>

          <div className="col-md-4">
            <div className="p-3 mb-3 bg-white text-dark docs-color-swatch">
              Focus Outline #TO-DO
              <p>
                <small>
                  Focus indicator outline/highlight for accessibility
                </small>
              </p>
            </div>
          </div>
        </div>

        <ContentHeaderH2>Grays</ContentHeaderH2>

        <div className="row mb-3">
          <div className="col-md-12">
            <div className="p-3 docs-gray-100">
              $gray-100 #fafafa
              <p>
                <small>BACKGROUND</small>
              </p>
            </div>

            <div className="p-3 docs-gray-200">
              $gray-200 #f0f0f0
              <p>
                <small>
                  HOVER for menus and row selections, table header background
                </small>
              </p>
            </div>

            <div className="p-3 docs-gray-300">$gray-300 #e8e8e8</div>

            <div className="p-3 docs-gray-400">$gray-400 #d8d8d8</div>

            <div className="p-3 docs-gray-500">
              $gray-500 #b8b8b8
              <p>
                <small>BORDERS/DIVIDERS other than inputs</small>
              </p>
            </div>

            <div className="p-3 docs-gray-600 text-white">
              $gray-600 #888888
              <p>
                <small>
                  INPUT BORDERS for strong color contrast, disabled text
                </small>
              </p>
            </div>

            <div className="p-3 docs-gray-700 text-white">
              $gray-700 #686868
              <p>
                <small>
                  LABELS of inputs and table headers, disabled input text
                </small>
              </p>
            </div>

            <div className="p-3 docs-gray-800 text-white">
              $gray-800 #484848
              <p>
                <small>ICONS</small>
              </p>
            </div>

            <div className="p-3 docs-gray-900 text-white">
              $gray-900 #282828
              <p>
                <small>Default TEXT color</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Color;
