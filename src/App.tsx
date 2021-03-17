import React from "react";
import Pagination from "./components/Pagination";
const REACT_APP_SERVER_PORT = process.env.REACT_APP_SERVER_PORT;
function App() {
  const [data, setData] = React.useState();
  React.useEffect(() => {
    fetch(`http://localhost:${REACT_APP_SERVER_PORT}/patients`)
      .then((res) => res.json())
      .then(setData);
  }, [setData]);
  if (data) return <Pagination data={data} />;
  else return null;
}

export default App;
