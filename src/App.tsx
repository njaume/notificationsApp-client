import React from "react";
import Logs from "./features/logs/Logs";
import Layout from "./features/Layout";

function App(): JSX.Element {
  return (
    <div className="App">
      <Layout>
        <Logs />
      </Layout>
    </div>
  );
}

export default App;
