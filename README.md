# Chrome Extension Boilerplate - React + Tailwind + ShadCN

This is a boilerplate for building Chrome extensions using React, Tailwind CSS, and ShadCN.

## Features

- Supports injecting React components into:
  - **New Tab**
  - **Popup**
  - **Content Script**
- All components include an example feature that allows changing the background color.


## Development

For development, use:

```sh
npm run dev
```

This will watch for changes and rebuild automatically.


## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/chrome-extension-boilerplate.git
   cd chrome-extension-boilerplate
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Build the extension:
   ```sh
   npm run build
   ```
4. Load the extension in Chrome:
   - Open **chrome://extensions/** in your browser.
   - Enable **Developer mode** (toggle in the top right corner).
   - Click **Load unpacked** and select the `dist` folder.

## Adding ShadCN Components

ShadCN components are **not** included by default. To use them:

1. Visit [shadcn/ui](https://ui.shadcn.com/).
2. Copy the desired component's code manually into your project.
3. Ensure required dependencies are installed as per ShadCN's documentation.

