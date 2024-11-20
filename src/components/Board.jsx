import { PropTypes } from "../utils/PropTypes";
import { renderSquare } from "../utils/renderSquare";

export const Board = ({ knightPosition }) => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      {renderSquare(0, 0, knightPosition)}
      {renderSquare(1, 0, knightPosition)}
      {renderSquare(2, 0, knightPosition)}
    </div>
  );
};

Board.propTypes = {
  knightPosition: PropTypes.arrayOf(PropTypes.number),
};
