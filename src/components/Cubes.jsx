import { useStore } from "../hooks/useStore";

import Cube from "./Cube";

const Cubes = () => {
  const [cubes] = useStore((state) => [state.cubes]);

  return cubes.map(({ id, position, texture }) => {
    return <Cube key={id} id={id} position={position} texture={texture} />;
  });
};

export default Cubes;
