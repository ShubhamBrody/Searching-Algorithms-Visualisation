
  useEffect((e) => {
    window.onkeydown((e) => {
        if(e.key==="Alt") setAltkey(true);
    });
    window.onkeyup((e) => {
        if(e.key==="Alt") setAltkey(false);
    })
  })