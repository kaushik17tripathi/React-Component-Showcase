// import PropTypes from "prop-types";
import className from "classnames";

//wrapper
function Button({
  children,
  primary,
  secondary,
  warning,
  success,
  danger,
  outline,
  rounded,
  ...rest
}) {
  const classes=className(rest.className,/**this will include the className prop*/ 'flex item-center px-3 py-1.5 border',{
    'border-blue-500 bg-blue-500 text-white':primary,
    'border-gray-900 bg-gray-900 text-white':secondary,
    'border-green-500 bg-green-500 text-white':success,
    'border-yellow-400 bg-yellow-400 text-white':warning,
    'border-red-500 bg-red-500 text-white':danger,
    'rounded-full':rounded,
    'bg-white':outline,//the later classname overwrites the previous
    'text-blue-500':primary&&outline,
    'text-gray-900':secondary&&outline,
    'text-green-500':success&&outline,
    'text-yellow-400':warning&&outline,
    'text-red-500':danger&&outline,

  })
  console.log(children)
  return <button {...rest} className={classes}>{children}</button>; //underlying element
}

Button.propTypes = {
  checkVariation: ({ primary, secondary, warning, success, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!warning) +
      Number(!!danger) +
      Number(!!success);

    if (count > 1) {
      return new Error("Only one of primary,secondary...");
    }
  },
};

export default Button;

//prop types is a prop validation library where we can check for some condition on our prop we can make our custom conditons like here we used to check no more than one props among(primary,secondary...) is passed


//Number(!!undefined)=0
//Number(true)=1
//Number(false)=0

//we could not pass the className prop to button directly because it already is getting the prop named className which is passing object so it replaces the previous one therefore in order to pass it we use it by passing within the object and we access it from the rest of the classes