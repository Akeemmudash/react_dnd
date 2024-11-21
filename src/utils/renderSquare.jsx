import { BoardSquare } from "../components/BoardSquare";
import { Knight } from "../components/Knight";
import { canMoveKnight, moveKnight } from "../services/Game";

export function renderSquare(i, knightPosition) {
  const x = i % 8;
  const y = Math.floor(i / 8);

  return (
    <div
      key={i}
      onClick={() => handleSquareClick(x, y)}
      style={{ width: "12.5%", aspectRatio: "1/1" }}
    >
      {
        <BoardSquare x={x} y={y}>
          {renderPiece(x, y, knightPosition)}
        </BoardSquare>
      }
    </div>
  );
}
function handleSquareClick(toX, toY) {
  if (canMoveKnight(toX, toY)) moveKnight(toX, toY);
}
function renderPiece(x, y, [knightX, knightY]) {
  if (x === knightX && y === knightY) {
    return <Knight />;
  }
}
