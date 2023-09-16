import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(-1); //initially first content will be visible

  const handleClick = (index) => {
    if(expandedIndex===index)//if user clicks on open content
    setExpandedIndex(-1);
    else
    setExpandedIndex(index);
  };

  const renderItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const icon = (
      <span className="text-2xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );

    return (
      <div key={item.id}>
        <div
          className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer "
          onClick={() => handleClick(index)}
        >
          {item.label}
          {icon}{" "}
        </div>
        <div>
          {isExpanded && <div className="border-b p-5">{item.content}</div>}
        </div>
      </div>
    );
  });
  return <div className="border-x border-t rounded">{renderItems}</div>;
}

export default Accordion;

//whenever we create a list we need to give id to top element
//isExpanded&& <div>{item.content}</div> if isExpanded is false content will be false if isExpanded is true content will be div element
//react doesnot display boolean in jsx
//this is conditional rendering
