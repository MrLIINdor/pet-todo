import React from "react";
import ReduxConfig from "./providers/ReduxConfig";
import RouterConfig from "./providers/RouterConfig";

export default function Providers({ children }) {
  return (
    <ReduxConfig>
      <RouterConfig>{children}</RouterConfig>
    </ReduxConfig>
  );
}
