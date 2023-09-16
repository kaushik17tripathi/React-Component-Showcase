import {GoBell,GoCloudDownload,GoDatabase,GoArchive,GoBroadcast} from "react-icons/go";
import Button from "../components/Button";


function ButtonPage() {
  const handleClick = () => console.log("Click");

  return (
    <div>
      <div>
        <Button className="mb-4" primary rounded outline onClick={handleClick}>
          <GoBell />
          Click!
        </Button>
      </div>
      <div>
        <Button success>
          <GoArchive />
          Buy Now
        </Button>
      </div>
      <div>
        <Button warning>
          <GoBroadcast />
          See Deal
        </Button>
      </div>
      <div>
        <Button secondary outline>
          <GoDatabase />
          Order
        </Button>
      </div>
      <div>
        <Button danger rounded>
          <GoCloudDownload />
          Go to cart
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
//whatever we write in between button tags automatically get passed on custom components in the form of children prop
