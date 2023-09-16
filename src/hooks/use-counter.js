import { useEffect, useState } from "react";

function useCounter(initialCount) {
    const [count, setCount] = useState(initialCount);
  
    useEffect(() => {
      console.log(count);
    }, [count]);
  
    const increment= () => {
      setCount(count + 1);
    };
  
    return {increment,count}//{count:count,increment:handleClick}
  }

  export default useCounter