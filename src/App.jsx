import { useState } from "react";
import "primereact/resources/themes/vela-green/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./App.css";
import Providers from "./app/index";
import Routing from "./page";

function App() {
  return (
    <Providers>
      <Routing />
    </Providers>
  );
}

export default App;
