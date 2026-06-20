# Calculator_With_Fun
A fun calculator that reveals hidden full-screen images when secret numbers are entered.

Secret Image Calculator is a simple web calculator with a fun hidden feature. When a user enters special secret numbers and presses `=`, a full-screen image appears.

## Features

- Basic calculator interface
- Secret number detection
- Full-screen image overlay
- Close button for the image
- Multiple secret images
- Works with online image links

## How It Works

The calculator checks the value entered by the user. If the value matches a secret number, the matching image is shown on the screen.

Example:

```js
const secrets = {
  "106": "https://example.com/image1.jpg",
  "777": "https://example.com/image2.jpg"
};
