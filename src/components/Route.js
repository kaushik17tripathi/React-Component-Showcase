import useNavigation from "../hooks/use-navigation"

function Route({path,children}){
    const {currentPath}=useNavigation()

    if(path===currentPath) return children
}

export default Route