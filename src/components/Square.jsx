/* eslint-disable react/prop-types */
export const Square = ({ black, children }) => {
  const fill = black ? "black" : "white";
  const stroke = black ? "white" : "black";
  return (
    <div
      style={{ background: fill, color: stroke, width: "100%", height: "100%" }}
    >
      {children}
    </div>
  );
};
2;