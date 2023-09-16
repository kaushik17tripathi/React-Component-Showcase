import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";
import { useState, useEffect, useRef } from "react";

function Dropdown({ options, onChange, value }) {
  const [isOpen, setIsOpen] = useState(false);

  const divEl = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (!divEl.current) return;//if ref prop is not assigned to any html element if we toggle the visibility of the element the divEl becomes null

      if (!divEl.current.contains(event.target)) setIsOpen(false);
      //if user clicks other than dropdown then the dropdown closes
    };

    document.addEventListener("click", handler, true);

    return () => {
      document.removeEventListener("click", handler);
    }; //when the dropdown is removed we don't want to listen to the clicks
  }, []);
  //we need to keep watching for the click events after the first time drodown is rendered

  const handleClick = () => {
    setIsOpen(!isOpen);
    // setIsOpen((currentIsOpen)=>!currentIsOpen)
  };

  const handleOptionClick = (option) => {
    //close dropdown
    setIsOpen(false);
    //what option user cicked on
    onChange(option);
  };

  const renderOptions = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={divEl} className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        {value?.label || "Select..."}
        <GoChevronDown className="text-lg" />
      </Panel>
      {isOpen && <Panel className="absolute top-full">{renderOptions}</Panel>}
    </div>
  );
}

export default Dropdown;

// let content = "Select...";
// if (selection) {
//   content = selection.label;
// }

//we can return a cleanup function in the use effect function , this function is called every time before the next rerender occurs and also at the end of the useEffect
//if we have several divs with same class then to get to know which div was clicked we can add a ref prop to the div which returns the object that contains the reference to the div

//if there are two dropdowns then if we click on one the other closes because the click is done outside the refered div
