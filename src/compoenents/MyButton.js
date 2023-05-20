import { Link } from "react-router-dom";
function MyButton(props) {
  return (
    <Link
      to="/menu"
      className="text-white bg-secondary rounded-lg p-3 lg:text-xl lg:w-52 "
    >
      {props.title}
    </Link>
  );
}
export default MyButton;
