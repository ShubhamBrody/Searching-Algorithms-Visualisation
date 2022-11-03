var dir = [
  [-1, 0],
  [0, -1],
  [1, 0],
  [0, 1],
  [-1, -1],
  [-1, 1],
  [1, -1],
  [1, 1],
];

var visited = [];

// function rundfs(curr, end, grid, setGrid, m, n) {
//   return 1;
//   if (curr===end) return 1;
//   if (curr in visited) return 0;
//   console.log("DFS : ", curr);
//   setGrid((prev) => {
//     prev[curr[0]][curr[1]] = 4;
//     return prev;
//   });
//   console.log(grid)
//   visited.push(curr);
//   for (var i = 0; i < dir.length; ++i) {
//     setTimeout(() => {
//     var d = dir[i];
//     var X = curr[0] + d[0],
//       Y = curr[1] + d[1];
//     if (X >= 0 && X < m && Y >= 0 && Y < n && grid[X][Y] !== 1) {
//         if (rundfs([X, Y], end, grid, setGrid, m, n) === 1) return 1;
//       }
//       }, 1000)
//   }
//   return 0;
// }

function dfs(start, end, grid, m, n) {
  if (visited.find((e) => JSON.stringify(e) === JSON.stringify(start)))
    return 0;
  if (JSON.stringify(start) === JSON.stringify(end)) return 1;
  visited.push(start);
  for (var i = 0; i < dir.length; ++i) {
    var d = dir[i];
    var X = start[0] + d[0],
      Y = start[1] + d[1];
    if (X >= 0 && X < m && Y >= 0 && Y < n && grid[X][Y] !== 1) {
      if (dfs([X, Y], end, grid, m, n) === 1) return 1;
    }
  }
  return 0;
}

function bfs(start, end, grid, m, n) {
  var q = [start]
  visited.push(start)
  while (q.length > 0) {
    var currelem = q.shift()
    if(JSON.stringify(currelem)===JSON.stringify(end)) return 1
    for (var i = 0; i < dir.length; ++i) {
      var d = dir[i]
      var X = currelem[0] + d[0],
        Y = currelem[1] + d[1]
      if (X >= 0 && X < m && Y >= 0 && Y < n && grid[X][Y] !== 1) {
        if(visited.find((e) => JSON.stringify(e)===JSON.stringify([X,Y]))) continue
        if(X===end[0] && Y===end[1]) return 1
        q.push([X, Y])
        visited.push([X,Y])
      }
    }
  }
  return 0
}

function Dfs({ start, end, grid, rows, cols, setVisited, setRundfs }) {
  console.log(rows, cols, "hi");
  visited = [];
  setRundfs(false);
  if (bfs(start, end, grid, rows, cols) === 1) {
    console.log("FOUND TARGET");
    console.log(visited);
    setVisited(visited);
  } else {
    console.log("NOT FOUND", visited);
  }
}

export default Dfs;
