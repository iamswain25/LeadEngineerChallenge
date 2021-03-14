import * as db from "../../db.json";
import { render, screen } from "@testing-library/react";
import TableMaterial from "../components/TableMaterial";
import { mount } from "enzyme";
describe("rendering table", () => {
  render(<TableMaterial data={db.patients} />);
  const wrapper = mount(<TableMaterial data={db.patients} />);

  test("rendering all data with 20 per page", () => {
    const linkElement = screen.getAllByText(/1-20 of 500/i);
    linkElement?.map((item) => expect(item).toBeInTheDocument());
  });
  test("search by ssn", () => {
    const input = wrapper.find("input[type='text']");
    input.simulate("change", { target: { value: "439-12" } });
    expect(
      wrapper.find("[value='8161505950']").contains("8161505950")
    ).toBeTruthy();
  });
  test("search by id", () => {
    const input = wrapper.find("input[type='text']");
    input.simulate("change", { target: { value: "816" } });
    const td = wrapper.find("td");
    expect(td.children("Tulley")).toBeTruthy();
    expect(td.length).toBeGreaterThan(1);
    expect(td.children("Loddy")).toBeTruthy();
    expect(td.children("Susanetta")).toBeTruthy();
  });
  test("search fail by id", () => {
    const input = wrapper.find("input[type='text']");
    input.simulate("change", { target: { value: "816" } });
    expect(wrapper.find("td").contains("kim")).toBeFalsy();
  });
});
