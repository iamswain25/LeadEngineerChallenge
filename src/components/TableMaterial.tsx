import MaterialTable from "material-table";
import React from "react";
import { tableIcons } from "./TableIcons";
export default function TableMaterial() {
  const [data, setData] = React.useState();
  React.useEffect(() => {
    fetch("http://localhost:3001/patients")
      .then((res) => res.json())
      .then(setData);
  }, [setData]);
  return (
    <div style={{ maxWidth: "100%" }}>
      <MaterialTable
        icons={tableIcons}
        columns={[
          { title: "id", field: "id" },
          { title: "first_name", field: "first_name" },
          { title: "last_name", field: "last_name" },
          { title: "email", field: "email" },
          { title: "gender", field: "gender" },
          { title: "ethnicity", field: "ethnicity" },
          { title: "birthdate", field: "birthdate" },
          { title: "ssn", field: "ssn" },
          { title: "insured", field: "insured", type: "boolean" },
          { title: "deceased", field: "deceased", type: "boolean" },
          {
            title: "diagnosis",
            field: "diagnosis",
            render: (rowData) => <div>{JSON.stringify(rowData)}</div>,
          },
          {
            title: "pcp",
            field: "pcp",
            render: (rowData) => <div>{JSON.stringify(rowData)}</div>,
          },
        ]}
        data={data as any}
        title="Demo Title"
      />
    </div>
  );
}
