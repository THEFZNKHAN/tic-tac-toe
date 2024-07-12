import PropTypes from "prop-types";

const Square = ({ value, onSquareClick }) => {
  return (
    <button
      onClick={onSquareClick}
      className="h-24 w-24 bg-slate-700 flex items-center justify-center text-6xl text-white font-bold rounded-xl border-2 border-slate-500 hover:border-red-500"
    >
      {value ? <img src={value} alt="player" width={40} height={40} /> : null}
    </button>
  );
};

Square.propTypes = {
  value: PropTypes.string,
  onSquareClick: PropTypes.func.isRequired,
};

export default Square;
