import React from "react";

type Props = {
  imgURL: string;
};
export const CuteImage: React.FC<Props> = ({ imgURL }) => {
  return (
    <iframe
      src={imgURL}
      width="240"
      height="240"
      title="cute-image"
      style={{ border: "0px", zIndex: "-2", pointerEvents: "none" }}
      className="giphy-embed"
      allowFullScreen
    ></iframe>
  );
};
