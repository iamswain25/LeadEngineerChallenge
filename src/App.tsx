import React from "react";
import TableMaterial from "./components/TableMaterial";
const REACT_APP_SERVER_PORT = process.env.REACT_APP_SERVER_PORT;
function App() {
  const [data, setData] = React.useState();
  React.useEffect(() => {
    fetch(`http://localhost:${REACT_APP_SERVER_PORT}/patients`)
      .then((res) => res.json())
      .then(setData);
  }, [setData]);
  return <TableMaterial data={data} />;
}

export default App;
