// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import * as React from "react";
import { createUseScreenVariants } from "@plasmicapp/react-web";

export const ScreenContext = React.createContext(
  "PLEASE_RENDER_INSIDE_PROVIDER"
);

export const useScreenVariants = createUseScreenVariants(true, {
  tabletsOnly: "(min-width:0px) and (max-width:930px)",
  mobileOnly: "(max-width:500px)",
});

export default ScreenContext;
/* prettier-ignore-end */
