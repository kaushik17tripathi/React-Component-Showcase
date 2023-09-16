import { useContext } from "react";
import NavigationContext from "../contexts/navigation";

function useNavigation(){
    return useContext(NavigationContext)

}
export default useNavigation