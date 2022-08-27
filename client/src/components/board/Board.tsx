import React from "react";
import { getViewport, panCamera, zoomCamera } from "../../utils/camera";
import { StyledBoard, TransformWrapper } from "./Board.styled";

function Board() {
  const ref = React.useRef<HTMLDivElement>(null);

  const [camera, setCamera] = React.useState({
    x: 0,
    y: 0,
    z: 1,
  });

  React.useEffect(() => {
    function handleWheel(event: WheelEvent) {
      event.preventDefault();

      const { clientX, clientY, deltaX, deltaY, metaKey, ctrlKey } = event;

      if (metaKey || ctrlKey) {
        setCamera((camera) =>
          zoomCamera(camera, { x: clientX, y: clientY }, deltaY / 100)
        );
      } else {
        setCamera((camera) => panCamera(camera, deltaX, deltaY));
      }
    }

    const elm = ref.current!;
    elm.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      elm.removeEventListener("wheel", handleWheel);
    };
  }, [ref]);

  const viewport = getViewport(camera, {
    minX: 0,
    minY: 0,
    maxX: window.innerWidth,
    maxY: window.innerHeight,
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const transform = `
    scale(${camera.z}) 
    translate(${camera.x}px, ${camera.y}px)
  `;

  return (
    <StyledBoard ref={ref}>
      <TransformWrapper style={{ transform }}>
        <div className="trans">
          <p>example element</p>
        </div>
      </TransformWrapper>
    </StyledBoard>
  );
}

export default Board;
