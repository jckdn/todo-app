import React, { FC, ReactElement } from "react";
import {
  render as rtlRender,
  RenderOptions as RtlRenderOptions,
} from "@testing-library/react";
import { configureStore, EnhancedStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import itemsReducer from "../../app/features/items/items-slice";
import { AppState } from "../../app/store";

/**
 * This render wrapper pattern for wiring up redux in the react tests is a mash up of
 * these examples:
 * - https://redux.js.org/usage/writing-tests#components
 * - https://testing-library.com/docs/react-testing-library/setup#custom-render.
 */

interface RenderOptions extends Omit<RtlRenderOptions, "wrapper"> {
  initialState?: AppState;
  store?: EnhancedStore;
}

function render(ui: ReactElement, options: RenderOptions = {}) {
  const {
    initialState,
    store = configureStore({
      reducer: { items: itemsReducer },
      preloadedState: initialState,
    }),
    ...rtlRenderOptions
  } = options;

  const wrapper: FC<{ children: React.ReactNode }> = ({ children }) => (
    <Provider store={store}>{children}</Provider>
  );

  return rtlRender(ui, { wrapper, ...rtlRenderOptions });
}

// Re-export everything.
export * from "@testing-library/react";

// Override render method.
export { render };
