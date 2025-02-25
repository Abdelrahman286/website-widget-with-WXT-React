import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import AppContextProvider from "./Appcontext"; // Import your context provider

export default defineContentScript({
  matches: ["*://*/*"],
  cssInjectionMode: "ui",
  async main(ctx) {
    console.log("my context is", ctx);

    const ui = await createShadowRootUi(ctx, {
      name: "widget-content-box",
      position: "inline",
      onMount: (container) => {
        console.log(container);

        const root = ReactDOM.createRoot(container);
        root.render(
          <AppContextProvider>
            <App />
          </AppContextProvider>
        );
        return root;
      },
      onRemove: (root) => {
        root?.unmount();
      },
    });

    ui.mount();
  },
});
