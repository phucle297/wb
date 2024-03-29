import "sanitize.css";
import "sanitize.css/forms.css";
import "sanitize.css/typography.css";
import "@mantine/core/styles.css";
import "@ui/globals.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";
import { RouterProvider } from "react-router-dom";

import { router } from "./pages/router/index.tsx";
import { ToastProvider } from "@ui/providers/toast-provider.tsx";
import { store } from "./redux/store";
import { ThemeProvider } from "@ui/providers/theme-provider.tsx";
import { MantineProvider } from "@mantine/core";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider>
      <ThemeProvider defaultTheme="dark" storageColorKey="color" storageThemeKey="theme">
        <ReduxProvider store={store}>
          <ToastProvider />
          <RouterProvider router={router} />
        </ReduxProvider>
      </ThemeProvider>
    </MantineProvider>
  </React.StrictMode>
);
