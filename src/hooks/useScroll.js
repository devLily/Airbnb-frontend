import { useState, useEffect } from "react";

const useWindowScroll = () => {
  const [state, setState] = useState({
    x: window.pageXOffset,
    y: window.pageYOffset,
  });

  useEffect(() => {
    const handler = () => {
      setState((state) => {
        const { pageXOffset, pageYOffset } = window;
        console.log("pageYOffset", pageYOffset);
        //Check state for change, return same state if no change happened to prevent rerender
        //(see useState/setState documentation). useState/setState is used internally in useRafState/setState.
        return state.x !== pageXOffset || state.y !== pageYOffset
          ? {
              x: pageXOffset,
              y: pageYOffset,
            }
          : state;
      });
    };

    //We have to update window scroll at mount, before subscription.
    //Window scroll may be changed between render and effect handler.
    handler();

    window.addEventListener("scroll", handler, {
      capture: false,
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  return state;
};

export default useWindowScroll;
