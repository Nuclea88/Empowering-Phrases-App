import "./ButtonNav.css"

const ButtonNav = ({ text, onClick }) => {
  return (
    <button className="button-nav" onClick={onClick}>
      {text}
    </button>
  );
};

export default ButtonNav;