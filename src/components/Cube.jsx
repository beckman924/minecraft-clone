import { useState } from "react";

import { useBox } from "@react-three/cannon";

import * as textures from "../images/textures.js";
import { useStore } from "../hooks/useStore.js";

const Cube = ({ id, position, texture }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [removeCube] = useStore((state) => [state.removeCube]);
  const [ref] = useBox(() => ({
    type: "Static",
    position,
  }));

  const activeTexture = textures[texture + "Texture"];

  return (
    <mesh
      ref={ref}
      onPointerMove={(e) => {
        e.stopPropagation();
        setIsHovering(true);
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        setIsHovering(false);
      }}
      onClick={(e) => {
        e.stopPropagation();

        if (e.button === 2) {
          removeCube(id);
        }
      }}
    >
      <boxGeometry />
      <meshStandardMaterial
        color={isHovering ? "hotpink" : "white"}
        transparent
        map={activeTexture}
        attach="material"
      />
    </mesh>
  );
};

export default Cube;
