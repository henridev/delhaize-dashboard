import React, { createContext } from "react";
import { Route, Switch } from "react-router-dom";

import PersistentDrawerLeft from "./components/template/Navigation";
import KasBoekGraphs from "./components/pages/KasBoekGraphs";
import KasBoek from "./components/pages/Kasboek";
import UploadKasboek from "./components/pages/UploadKasboek";

export const ConfigContext = createContext();
const configValue = {};

function App() {
  return (
    <ConfigContext.Provider value={configValue}>
      <div className="App">
        <PersistentDrawerLeft>
          <Switch>
            <Route path="/" exact component={KasBoek} />
            <Route path="/overview/kasboek" exact component={KasBoek} />{" "}
            <Route path="/upload/kasboek" component={UploadKasboek} />
            <Route path="/dashboard/kasboek" component={KasBoekGraphs} />
            <Route render={() => <h2>404</h2>} />
          </Switch>
        </PersistentDrawerLeft>
      </div>
    </ConfigContext.Provider>
  );
}

export default App;
