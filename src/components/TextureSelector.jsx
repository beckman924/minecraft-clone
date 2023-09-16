/* eslint-disable no-unused-vars */
import { useEffect } from "react";

import { useStore } from "../hooks/useStore";
import { useKeyboard } from "../hooks/useKeyboard";
import * as images from "../images/images";

const TextureSelector = () => {
  const [texture, setTexture] = useStore((state) => [
    state.texture,
    state.setTexture,
  ]);

  const { dirt, grass, glass, wood, log } = useKeyboard();

  useEffect(() => {
    const options = {
      dirt,
      grass,
      glass,
      wood,
      log,
    };

    const selectedTexture = Object.entries(options).find(
      ([texture, isEnabled]) => isEnabled
    );

    if (selectedTexture) {
      const [textureName] = selectedTexture;
      setTexture(textureName);
    }
  }, [dirt, grass, glass, log, wood, setTexture]);

  return (
    <div className="texture-selector">
      {Object.entries(images).map(([imgKey, img]) => (
        <img
          key={imgKey}
          className={texture === imgKey.replace("Img", "") ? "selected" : ""}
          src={img}
          alt={imgKey}
        />
      ))}
    </div>
  );
};

export default TextureSelector;
