import { useEffect, useRef } from "react";

export const MiniBob = () => {

  const eyes = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: MouseEvent) => {
    const { clientX: x, clientY: y } = e;

    const { left, top, right, bottom } = eyes.current?.getBoundingClientRect() as DOMRect;


    // get the coordinates of the middle of the eyes
    const middleX = left + (right - left) / 2;
    const middleY = top + (bottom - top) / 2;

    const pupils = eyes.current?.querySelectorAll(".pupil") as NodeListOf<HTMLElement>;

    pupils.forEach((pupil) => {
      const moveX = middleX - x;
      const moveY = middleY - y;

      // move the eyes relative to the mouse position and the middle of the eyes and the width and height of the window
      const width = window.innerWidth;
      const height = window.innerHeight;

      // calculate the percentage of the movement relative to the width and height of the window
      const move = {
        x: (-moveX / width) * 100 - 50,
        y: (-moveY / height) * 100 - 50,
      };

      // limit the movement of the eyes
      if (move.x < -100) move.x = -100;
      if (move.x > 100) move.x = 100;
      if (move.y > 20) move.y = 20;

      pupil.style.transform = `translate(${move.x}%, ${move.y}%)`;

      // calculate the distance between the mouse and the middle of the eyes
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    }
  }, [])


  return (
    <div className="relative block h-24 w-24">
      <div className="h-20 w-20 border-4 border-white rounded-xl bg-black z-10 absolute">
        <div className="eyes flex w-full justify-around mt-2 relative" ref={eyes}>
          <div className="eye w-6 h-6 bg-white rounded-full">
            <div className="pupil w-2 h-2 bg-black rounded-full absolute"></div>
          </div>
          <div className="eye w-6 h-6 bg-white rounded-full">
            <div className="pupil w-2 h-2 bg-black rounded-full absolute"></div>
          </div>
        </div>
      </div>
      <div className="h-20 w-20 border-4 border-white rounded-xl bg-black absolute top-2 left-2 z-0"></div>
    </div>
  )
}
