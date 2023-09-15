import { usePlane } from "@react-three/cannon";

import { groundTexture } from "../images/textures.js";
import { useStore } from "../hooks/useStore.js";

const Ground = () => {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -0.5, 0],
  }));

  const [addCube] = useStore((state) => [state.addCube]);

  groundTexture.repeat.set(100, 100);

  const handleClickGround = (e) => {
    e.stopPropagation();

    if (e.button === 0) {
      const [x, y, z] = Object.values(e.point).map((v) => Math.ceil(v));
      addCube(x, y, z);
    }
  };

  return (
    <mesh ref={ref} onClick={handleClickGround}>
      <planeGeometry attach="geometry" args={[100, 100]} />
      <meshStandardMaterial attach="material" map={groundTexture} />
    </mesh>
  );
};

export default Ground;
