import "./Button.css";
import { Link } from "react-router-dom";

const STYLES = ["btn-primary"];
const SIZES = ["btn-medium"];

export const Button = (children, type, onClick, buttonStyle, buttonSize) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const chsckButtonSize = SIZES.includes(buttonSize) ? buttonSize : STYLES[0];

  return (
    <Link to="/signup" className="btn-mobile">
      <button
        className={`btn ${checkButtonStyle} ${chsckButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
