import React from "react";

export default {
  title: "Design System|Color"
};

export const Color = () => (
  <div className="docs-color">
    <h1 className="docs">Color</h1>

    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="p-3 mb-3 bg-primary text-white docs-color-swatch">
            Primary #205493
            <p>
              <small>Header, primary buttons, actions and controls</small>
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

        <div className="col-md-4">
          <div className="p-3 mb-3 bg-secondary text-white docs-color-swatch">
            Secondary #236430{" "}
            <p>
              <small>FPAC green</small>
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="p-3 mb-3 bg-success text-white docs-color-swatch">
            Success #308a42 (10% lighter than Secondary green)
          </div>
        </div>

        <div className="col-md-4">
          <div className="p-3 mb-3 bg-danger text-white docs-color-swatch">
            Danger #b70f0a
          </div>
        </div>

        <div className="col-md-4">
          <div className="p-3 mb-3 bg-warning text-dark docs-color-swatch">
            Warning #fdb81e
          </div>
        </div>

        <div className="col-md-4">
          <div className="p-3 mb-3 bg-info text-white docs-color-swatch">
            Info #296cbd (10% lighter than Primary blue)
            <p>
              <small>Links, information icons</small>
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="p-3 mb-3 bg-light text-dark border docs-color-swatch">
            Light (gray-100) #f8f9fa
            <p>
              <small>Background</small>
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="p-3 mb-3 bg-dark text-white docs-color-swatch">
            Dark (gray-900) #212529
            <p>
              <small>Default text color</small>
            </p>
          </div>
        </div>
      </div>
    </div>

    <h2 className="docs">Grays</h2>

    <div className="container">
      <div className="row mb-3">
        <div className="col-md-12">
          <div className="p-3 docs-gray-100">
            100 - Default BACKGROUND color
          </div>

          <div className="p-3 docs-gray-200">
            200 - Default HOVER for menus and row selections
          </div>

          <div className="p-3 docs-gray-300">300</div>

          <div className="p-3 docs-gray-400">400</div>

          <div className="p-3 docs-gray-500">
            500 - Defaults BORDERS other than inputs
          </div>

          <div className="p-3 docs-gray-600 text-white">600</div>

          <div className="p-3 docs-gray-700 text-white">
            700 - Default ICON and INPUT border colors
          </div>

          <div className="p-3 docs-gray-800 text-white">800</div>

          <div className="p-3 docs-gray-900 text-white">
            900 - Default TEXT color
          </div>
        </div>
      </div>
    </div>
  </div>
);
