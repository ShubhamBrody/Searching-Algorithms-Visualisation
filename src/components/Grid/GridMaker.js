import Box from "./Box";
import Dfs from "../Algorithms/Dfs"
import { useEffect, useRef, useState } from "react";

function GridMaker({ rows, cols }) {
  const width = 30;
  const [grid, setGrid] = useState(
    Array(rows).fill(Array(cols).fill(0))
  );
  const [selectval, setSelectval] = useState("block");
  var r = useRef(null);
  var refs = Array(rows).fill(Array(cols).fill(r));
  const [start, setStart] = useState([-1, -1]);
  const [end, setEnd] = useState([-1, -1]);
  const [rundfs, setRundfs] = useState(false);
  const colornames = ["normal", "block", "start", "end", "visited"];
  const [visitedarray, setVisitedarray] = useState([])

  useEffect(() => {
    var I=-1;
    console.log(visitedarray, rundfs)
    if(visitedarray.length===0 && grid) return
    console.log("came here", visitedarray)
    var st = setInterval(() => {
      ++I
      console.log("I:",I,"vis:",visitedarray.length)
      if(I>=visitedarray.length) {
        clearInterval(st)
        return;
      }
      console.log(visitedarray[I])
      console.log("GRID SIZE : ", grid.length)
      if(JSON.stringify(visitedarray[I]) !== JSON.stringify(start) && JSON.stringify(visitedarray[I]) !== JSON.stringify(end))
      setGrid((prev) => {
        console.log(prev)
        return prev.map((row, i) => {
          return row.map((val, j) => {
            if(i===visitedarray[I][0] && j===visitedarray[I][1]) return 4;
            return val
          })
        })
        // prev[visitedarray[i][0]][visitedarray[i][1]] = 4;
        // return prev
      })
    }, 10)
  }, [visitedarray])

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
      <button onClick={(e)=>{setRundfs((prev)=>!prev)}}>Start Dfs</button>
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
      {rundfs && <Dfs setRundfs={setRundfs} grid={grid} setGrid={setGrid} start={start} end={end} rows={rows} cols={cols} setVisited={setVisitedarray}/>}
    </div>
  );
}

export default GridMaker;
