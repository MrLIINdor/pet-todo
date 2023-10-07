// import { useState } from "react";
import "primereact/resources/themes/vela-green/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./App.css";
import { TabMenu } from 'primereact/tabmenu';

function App() {
  const items = [
    {label: 'Home', icon: 'pi pi-fw pi-home'},
    {label: 'Calendar', icon: 'pi pi-fw pi-calendar'},
    {label: 'Edit', icon: 'pi pi-fw pi-pencil'},
    {label: 'Documentation', icon: 'pi pi-fw pi-file'},
    {label: 'Settings', icon: 'pi pi-fw pi-cog'}
];

return (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems:'center' }}>
    <div className="card">
        <TabMenu model={items} />
    </div>
      
    </div>
  )
}

export default App;
