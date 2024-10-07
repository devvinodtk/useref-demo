import { useRef } from "react";
import Circle from "./Circle";
import useThrottle from "./useThrottle";


function App() {
  const handleMouseMove = (e) => {
    const circle = circleRef.current;
    circle.style.left =`${e[0].clientX+10}px `;
    circle.style.top =`${e[0].clientY+10}px`;
  }

  const handleThrottledMouseMove = useThrottle(handleMouseMove, 100);

  const circleRef = useRef()

  return (
    <div onMouseMove={handleThrottledMouseMove} style={{
        height:"100vh", 
        width:"100%", 
        position: "relative"
      }}>
      <Circle ref={circleRef} />
    </div>
  );
}

export default App;
