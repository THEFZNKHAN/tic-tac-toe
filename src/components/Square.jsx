import PropTypes from "prop-types";

const Square = ({ value, onSquareClick }) => {
  return (
    <button
      className="w-20 h-20 hover:border-red-500 active:border-red-600 focus:border-red-500 border-2 font-bold border-white rounded-xl m-4 p-4 text-white"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
};

Square.propTypes = {
  value: PropTypes.string,
  onSquareClick: PropTypes.func.isRequired,
};

export default Square;
