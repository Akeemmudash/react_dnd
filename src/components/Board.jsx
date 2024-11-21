import { PropTypes } from "../utils/PropTypes";
import { renderSquare } from "../utils/renderSquare";

export const Board = ({ knightPosition }) => {
  const squares = [];
  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare(i, knightPosition));
  }
  return (
    <div
      style={{
        width: "100%",
        aspectRatio: "1/1",
        marginInline: "20px",
        maxWidth: "600px",
        border: "4px solid",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {squares}
    </div>
  );
};

Board.propTypes = {
  knightPosition: PropTypes.arrayOf(PropTypes.number),
};
