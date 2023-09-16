import { createContext, useState ,useEffect} from "react";

const NavigationContext = createContext();

function NavigationProvider({ children }) {

  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(()=>{
    const handler=()=>{
      setCurrentPath(window.location.pathname)
    }
    window.addEventListener('popstate',handler)

    return ()=>{
        window.removeEventListener('popstate',handler)
    }
  },[])

  const navigate=(to)=>{
    //to='/dropdown'
    window.history.pushState({},'',to)
    setCurrentPath(to);
  }

  return (
    <NavigationContext.Provider value={{currentPath,navigate}}>
      {children}
    </NavigationContext.Provider>
  );
}

export { NavigationProvider };
export default NavigationContext;

//we use state so that everytime address changes our component is rerendered