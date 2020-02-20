import React from "react";

export default {
  title: "Design System|Color"
};

export const Color = () => (
  <div className="docs-color">
    <h1>Color</h1>

    <div className="container">
      <div class="row">
        <div class="col-md-4">
          <div class="p-3 mb-3 bg-primary text-white docs-color-swatch">
            Primary #205493
            <p>
              <small>Header, Primary buttons, actions, and controls.</small>
            </p>
          </div>
        </div>

        <div class="col-md-4">
          <div class="p-3 mb-3 docs-color-primaryoutline docs-color-swatch">
            Primary Outline #205493, bg: #fff/white
            <p>
              <small>Secondary buttons</small>
            </p>
          </div>
        </div>

        <div class="col-md-4">
          <div class="p-3 mb-3 bg-secondary text-white docs-color-swatch">
            Secondary{" "}
            <p>
              <small>(not used)</small>
            </p>
          </div>
        </div>

        <div class="col-md-4">
          <div class="p-3 mb-3 bg-success text-white docs-color-swatch">
            Success #199c38
          </div>
        </div>

        <div class="col-md-4">
          <div class="p-3 mb-3 bg-danger text-white docs-color-swatch">
            Danger #b70f0a
          </div>
        </div>

        <div class="col-md-4">
          <div class="p-3 mb-3 bg-warning text-dark docs-color-swatch">
            Warning #fdb81e
          </div>
        </div>

        <div class="col-md-4">
          <div class="p-3 mb-3 bg-info text-white docs-color-swatch">
            Info #0068ad
          </div>
        </div>

        <div class="col-md-4">
          <div class="p-3 mb-3 bg-light text-dark border docs-color-swatch">
            Light (gray-100) #f8f9fa
          </div>
        </div>

        <div class="col-md-4">
          <div class="p-3 mb-3 bg-dark text-white docs-color-swatch">
            Dark (gray-900) #212529
            <p>
              <small>Default text color</small>
            </p>
          </div>
        </div>
      </div>
    </div>

    <h2>Grays</h2>

    <div className="container">
      <div class="row mb-3">
        <div class="col-md-12">
          <div class="p-3 docs-gray-100">100 - Default BACKGROUND color</div>

          <div class="p-3 docs-gray-200">
            200 - Default HOVER for menus and row selections
          </div>

          <div class="p-3 docs-gray-300">300</div>

          <div class="p-3 docs-gray-400">400</div>

          <div class="p-3 docs-gray-500">
            500 - Defaults BORDERS other than inputs
          </div>

          <div class="p-3 docs-gray-600 text-white">600</div>

          <div class="p-3 docs-gray-700 text-white">
            700 - Default ICON and INPUT border colors
          </div>

          <div class="p-3 docs-gray-800 text-white">800</div>

          <div class="p-3 docs-gray-900 text-white">
            900 - Default TEXT color
          </div>
        </div>
      </div>
    </div>
  </div>
);
