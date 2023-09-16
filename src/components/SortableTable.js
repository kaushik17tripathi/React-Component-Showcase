import useSort from "../hooks/use-sort";
import { GoArrowSmallDown, GoArrowSmallUp } from "react-icons/go";
import Table from "./Table";

function SortableTable(props) {
  const { config, data } = props;
  const { sortedData, setSortColumn, sortBy, sortOrder } = useSort(
    config,
    data
  );

  const updatedConfig = config.map((column) => {
    if (column.sortValue) {
      return {
        ...column,
        header: () => (
          <th
            className="cursor-pointer hover:bg-gray-100"
            onClick={() => setSortColumn(column.label)}
          >
            <div className="flex items-center">
              {column.label}
              {getIcons(column.label, sortBy, sortOrder)}
            </div>
          </th>
        ),
      };
    } else {
      return column;
    }
  });

  return <Table {...props} config={updatedConfig} data={sortedData} />;
}

function getIcons(label, sortBy, sortOrder) {
  if (label !== sortBy) {
    return (
      <div>
        <GoArrowSmallUp />
        <GoArrowSmallDown />
      </div>
    );
  }

  if (sortOrder === "null") {
    return (
      <div>
        <GoArrowSmallUp />
        <GoArrowSmallDown />
      </div>
    );
  }
  if (sortOrder === "asc") {
    return (
      <div>
        <GoArrowSmallUp />
      </div>
    );
  } else if (sortOrder === "desc") {
    return (
      <div>
        <GoArrowSmallDown />
      </div>
    );
  }
}
export default SortableTable;
