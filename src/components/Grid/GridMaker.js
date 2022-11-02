import Box from "./Box";
import { useRef, useState } from "react";

function GridMaker({ rows, cols }) {
  const width = 30;
  const [grid, setGrid] = useState(
    Array(rows).fill(Array(cols).fill(4))
  );
  const [selectval, setSelectval] = useState("block");
  var r = useRef(null);
  var refs = Array(rows).fill(Array(cols).fill(r));
  const [start, setStart] = useState([-1, -1]);
  const [end, setEnd] = useState([-1, -1]);
  const colornames = ["normal", "block", "start", "end", "visited"];

  return (
    <div>
      <select
        value={selectval}
        onChange={(e) => {
          setSelectval(e.target.value);
        }}
      >
        <option value="block">Block</option>
        <option value="start">Start</option>
        <option value="end">End</option>
      </select>
      {grid && grid.map((item, i) => {
        return (
          <div style={{ display: "flex" }}>
            {item.map((b, j) => {
              return (
                <Box
                  setStart={setStart}
                  setEnd={setEnd}
                  setGrid={setGrid}
                  colorcode={colornames[b]}
                  selectval={selectval}
                  i={i}
                  j={j}
                  reference={refs[i][j]}
                  width={width}
                  height={width}
                  start={start}
                  end={end}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default GridMaker;
