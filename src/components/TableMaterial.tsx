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
    <section>
      <MaterialTable
        icons={tableIcons}
        options={{ pageSize: 20 }}
        columns={[
          { title: "id", field: "id", searchable: true },
          { title: "first_name", field: "first_name", searchable: false },
          { title: "last_name", field: "last_name", searchable: false },
          { title: "email", field: "email", searchable: false },
          { title: "gender", field: "gender", searchable: false },
          { title: "ethnicity", field: "ethnicity", searchable: false },
          { title: "birthdate", field: "birthdate", searchable: false },
          { title: "ssn", field: "ssn", searchable: true },
          {
            title: "insured",
            field: "insured",
            type: "boolean",
            searchable: false,
          },
          {
            title: "deceased",
            field: "deceased",
            type: "boolean",
            searchable: false,
          },
          // {
          //   title: "diagnosis",
          //   field: "diagnosis",
          //   render: (rowData) => <div>{JSON.stringify(rowData.diagnosis)}</div>,
          // },
          // {
          //   title: "pcp",
          //   field: "pcp",
          //   render: (rowData) => <div>{JSON.stringify(rowData.pcp)}</div>,
          // },
        ]}
        data={data as any}
        title="patient data"
      />
    </section>
  );
}
