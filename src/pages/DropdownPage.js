import { useState } from "react";
import Dropdown from "../components/Dropdown";

function DropdownPage() {
  const [selection, setSelection] = useState(null);

  const handleSelect = (option) => {
    setSelection(option);
  };

  const options = [
    { label: "Red", value: "Red" },
    { label: "Blue", value: "Blue" },
    { label: "Green", value: "Green" },
  ];
  return (
    <div className="flex">
      <Dropdown options={options} onChange={handleSelect} value={selection} />
    </div>
  );
}

export default DropdownPage;
