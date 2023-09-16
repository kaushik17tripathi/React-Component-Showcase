import Accordion from "../components/Accordion";
function AccordionPage() {
  const items = [
    {
      id:'fsdfd',
      label: "Can i use React on this project",
      content: "You can use it anywhere",
    },
    {
      id:'dsfs',
      label: "Can i use React on this project",
      content: "You can use it anywhere",
    },
    {
      id:'dfda',
      label: "Can i use React on this project",
      content: "You can use it anywhere",
    },
  ];
  return <Accordion items={items}/>;
}

export default AccordionPage;
