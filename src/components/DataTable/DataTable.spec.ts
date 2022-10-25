import { shallowMount, VueWrapper } from "@vue/test-utils";
import { describe, it, expect, beforeEach } from "vitest";
import DataTable from "@/components/DataTable/DataTable.vue";

let wrapper: VueWrapper;

describe("DataTable", () => {
  beforeEach(() => {
    // Arrange
    wrapper = shallowMount(DataTable as any, {
      props: {
        fields: ["Col A", "Col B", "Col C", "Col D", "Col E"],
        data: [
          {
            "Col A": 1,
            "Col B": 1,
            "Col C": 1,
            "Col D": 1,
            "Col E": 1,
          },
          {
            "Col A": 2,
            "Col B": 2,
            "Col C": 2,
            "Col D": 2,
            "Col E": 2,
          },
          {
            "Col A": 3,
            "Col B": 3,
            "Col C": 3,
            "Col D": 3,
            "Col E": 3,
          },
          {
            "Col A": 4,
            "Col B": 4,
            "Col C": 4,
            "Col D": 4,
            "Col E": 4,
          },
          {
            "Col A": 5,
            "Col B": 5,
            "Col C": 5,
            "Col D": 5,
            "Col E": 5,
          },
          {
            "Col A": 6,
            "Col B": 6,
            "Col C": 6,
            "Col D": 6,
            "Col E": 6,
          },
        ],
      },
    });
  });

  it("is called", () => {
    // Assert
    expect(wrapper.exists()).toBeTruthy();
  });

  it("should render", () => {
    expect(wrapper.find("table")).toBeTruthy();
  });

  it.each(["A", "B", "C", "D", "E"])(
    "should render table headers",
    (colHeader) => {
      const tableHeader = wrapper
        .findAll("th")
        .filter((node) => node.text().match(`Col ${colHeader}`))
        .at(0);

      expect(tableHeader?.exists());
    }
  );

  it.todo("should show table row count less or equal rows per page selected");
  it.todo(
    "should change number of table rows when rows per page selected change"
  );
  it.todo("should sort table when caret icon clicked");
  it.todo("clicked page on pagination should contain class active");
});
