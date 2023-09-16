import classNames from "classnames";
import useNavigation from "../hooks/use-navigation";

function Link({ to, children,className,activeClassName}) {

  const { navigate,currentPath} = useNavigation();

  const classes=classNames('text-blue-500',className,currentPath===to&&activeClassName)

  const handleClick = (e) => {
    if(e.ctrlKey||e.metaKey) return 
    //if we hold control key then on clicking link it will open in new page like default browser behavior
    e.preventDefault();

    navigate(to);
  };

  return <a className={classes} href={to} onClick={handleClick}>{children}</a>;
}

export default Link;
