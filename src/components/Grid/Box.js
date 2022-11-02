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
    start: "lightgreen",
    end: "red",
  };

  const colorset = {
    normal: 0,
    block: 1,
    start: 2,
    end: 3,
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
    setGrid((grid) =>
      grid.map((item, I) => {
        return item.map((val, J) => {
          if (selectval === "start" && I === start[0] && J === start[1]) {
            return 0;
          }
          if (selectval === "end" && I === end[0] && J === end[1]) {
            return 0;
          }
          if (I === i && J === j) {
            return colorset[selectval];
          }
          return val;
        });
      })
    );
    if(selectval==="start") {
        setStart([i,j])
    }
    if(selectval==="end") {
        setEnd([i,j])
    }
  };

  return <div ref={reference} onClick={onSubmitHandler} style={s}></div>;
}

export default Box;
