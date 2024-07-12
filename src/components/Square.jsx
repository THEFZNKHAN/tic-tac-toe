import PropTypes from "prop-types";

const Square = ({ value, onSquareClick }) => {
  return (
    <button
      className="flex items-center justify-center w-24 h-24 border-2 border-gray-400 hover:border-red-600 rounded-xl m-3 bg-gray-800"
      onClick={onSquareClick}
    >
      {value && <img src={value} alt="img" width={35} height={35} />}
    </button>
  );
};

Square.propTypes = {
  value: PropTypes.string,
  onSquareClick: PropTypes.func.isRequired,
};

export default Square;
