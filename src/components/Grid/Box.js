function Box({
  height,
  width,
  i,
  j,
  reference,
  selectval,
  setGrid,
  colorcode,
  start,
  end,
  setStart,
  setEnd,
}) {
  const colorCat = {
    normal: "transparent",
    block: "grey",
    start: "green",
    end: "red",
    visited: "skyblue",
  };

  const colorset = {
    normal: 0,
    block: 1,
    start: 2,
    end: 3,
    visited: 4,
  };

  const color = colorCat[colorcode];

  const s = {
    height: height,
    width: width,
    backgroundColor: color,
    border: "1px solid black",
    transition: "all 0.3s ease-in"
  };

  const onSubmitHandler = (e) => {
    console.log(i, j);
    if(e.type==="mouseover" && (selectval==="start" || selectval==="end" || e.ctrlKey===false)) return;
    setGrid((grid) =>
      grid.map((item, I) => {
        return item.map((val, J) => {
          if (selectval === "start" && I === start[0] && J === start[1] && e.altKey===false) {
            return 0;
          }
          if (selectval === "end" && I === end[0] && J === end[1] && e.altKey===false) {
            return 0;
          }
          if (I === i && J === j) {
            if(e.altKey===true) {
                if(val===2) {
                    setStart([-1,-1]);
                }
                else if(val===3) {
                    setEnd([-1,-1]);
                }
                return 0;
            }
            return colorset[selectval];
          }
          return val;
        });
      })
    );
    if(selectval==="start" && e.altKey===false) {
        setStart([i,j])
    }
    if(selectval==="end" && e.altKey===false) {
        setEnd([i,j])
    }
  };

  return <div ref={reference} onClick={onSubmitHandler} onMouseOver={onSubmitHandler} style={s}></div>;
}

export default Box;
