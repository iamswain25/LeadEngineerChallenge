import { Container } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ReactPaginate from "react-paginate";
import React from "react";
import Cards from "./Cards";
import "./pagination.css";
const COUNT_PER_PAGE = 20;
export default function Pagination({ data }: any) {
  const pageCount = React.useMemo(() => data.length / COUNT_PER_PAGE, [data]);
  const [offset, setOffset] = React.useState(0);
  function handlePageClick({ selected }: { selected: number }) {
    const offset = COUNT_PER_PAGE * selected;
    setOffset(offset);
  }
  return (
    <Container>
      <Cards data={data.slice(offset, offset + 20)} />
      <ReactPaginate
        activeClassName={"item active "}
        breakClassName={"item break-me "}
        breakLabel={"..."}
        containerClassName={"pagination"}
        disabledClassName={"disabled-page"}
        marginPagesDisplayed={2}
        nextClassName={"item next "}
        nextLabel={<ArrowForwardIosIcon style={{ fontSize: 18 }} />}
        onPageChange={handlePageClick}
        pageCount={pageCount}
        pageClassName={"item pagination-page "}
        pageRangeDisplayed={2}
        previousClassName={"item previous"}
        previousLabel={<ArrowBackIosIcon style={{ fontSize: 18 }} />}
      />
    </Container>
  );
}
