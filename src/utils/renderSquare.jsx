import { Knight } from "../components/Knight";
import { Square } from "../components/Square";

export function renderSquare(x, y, [knightX, knightY]) {
  const black = (x + y) % 2 === 1;
  const isKnightHere = knightX === knightY;
  const piece = isKnightHere ? <Knight /> : null;

  return <Square black={black}>{piece}/</Square>;
}
