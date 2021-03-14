function RecursiveList({ data }: { data: any }) {
  return (
    <ul>
      {Object.keys(data).map((key) => {
        if (key === "tableData") return null;
        return (
          <li key={"row-id-" + key}>
            {key}:
            {typeof data[key] === "string" ? (
              " " + data[key]
            ) : Array.isArray(data[key]) ? (
              <ul>
                {data[key]?.map((str: string, index: number) => (
                  <li key={"row-id-" + index}>{str}</li>
                ))}
              </ul>
            ) : data[key] instanceof Object ? (
              <RecursiveList data={data[key]} />
            ) : (
              JSON.stringify(data[key])
            )}
          </li>
        );
      })}
    </ul>
  );
}
export default RecursiveList;
