import React from "react";
import TableMaterial from "./components/TableMaterial";

function App() {
  const [data, setData] = React.useState();
  React.useEffect(() => {
    fetch("http://localhost:3001/patients")
      .then((res) => res.json())
      .then(setData);
  }, [setData]);
  return <TableMaterial data={data} />;
}

export default App;
